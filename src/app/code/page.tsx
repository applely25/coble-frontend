'use client';
import * as S from './style';
import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { useEffect, useState } from 'react';
import { Xml } from 'blockly';
import BlocksInitializer from '@/utils/blocks/initializer';
import registerGenerators from '@/utils/blocks/generators';
import { BlocklyWorkspace } from '@/components/common/blocklyWorkspace';

BlocksInitializer();

const Code = () => {
  const [workspace, setWorkspace] = useState<Blockly.WorkspaceSvg | null>(null);
  const [code, setCode] = useState<string>('');

  useEffect(() => {
    registerGenerators();

    if (workspace) {
      const updateCode = () => {
        javascriptGenerator.addReservedWords('code');
        const generatedCode = javascriptGenerator.workspaceToCode(workspace);
        setCode(generatedCode);
      };

      workspace.addChangeListener(updateCode);

      return () => {
        workspace.removeChangeListener(updateCode);
      };
    }
  }, [workspace]);

  const printWorkspaceAsXml = () => {
    // 서버 연동시 사용
    if (workspace === null) return;

    const workspaceDomXml = Xml.workspaceToDom(workspace);
    const workspaceRawXml = Blockly.Xml.domToPrettyText(workspaceDomXml);
    console.log(workspaceRawXml);
  };

  return (
    <S.Wrapper>
      <div>header</div>
      <S.Container>
        <BlocklyWorkspace setWorkspace={setWorkspace} />
        <div>
          <S.CodeIframe srcDoc={code} />
          <div>
            <p>code</p>
            <code typeof="html">{code}</code>
          </div>
        </div>
      </S.Container>
    </S.Wrapper>
  );
};

export default Code;
