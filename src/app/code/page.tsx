'use client';

import { useEffect, useState } from 'react';
import { styled } from '@linaria/react';

import * as Blockly from 'blockly/core';
import { Xml } from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';

import { BlocklyWorkspace } from '@/components/common/blocklyWorkspace';

import BlocksInitializer from '@/utils/blocks/initializer';
import registerGenerators from '@/utils/blocks/generators';

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
    <Wrapper>
      <div>header</div>
      <Container>
        <BlocklyWorkspace setWorkspace={setWorkspace} />
        <div>
          <CodeIframe srcDoc={code} />
          <div>
            <p>code</p>
            <code typeof="html">{code}</code>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Code;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const CodeIframe = styled.iframe`
  width: 100%;
  aspect-ratio: 16 / 9;
`;
