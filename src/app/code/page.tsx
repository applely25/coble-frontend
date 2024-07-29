'use client';

import { useEffect, useState } from 'react';
import { styled } from '@linaria/react';

import * as Blockly from 'blockly/core';
// import { Xml } from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';

import { BlocklySpace } from '@/components/common';
import { BlocksInitializer, registerGenerators } from '@/utils/blocks';
import { flex } from '@/styles';

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
    return undefined;
  }, [workspace]);

  useEffect(() => {
    // 블록리 초기화 함수 호출
    BlocksInitializer();
  }, []);

  // 추후 XML로 변환하여 저장할 때 사용할 함수
  // const printWorkspaceAsXml = useCallback(() => {
  //   if (workspace) {
  //     const workspaceDomXml = Xml.workspaceToDom(workspace);
  //     const workspaceRawXml = Blockly.Xml.domToPrettyText(workspaceDomXml);
  //     console.log(workspaceRawXml); // 디버깅용 콘솔 출력
  //   }
  // }, [workspace]);

  return (
    <Wrapper>
      <div>header</div>
      <Container>
        <BlocklySpace setWorkspace={setWorkspace} />
        <div>
          <CodeIframe srcDoc={code} />
          <div>
            <p>code</p>
            <code>{code}</code>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Code;

const Wrapper = styled.div`
  ${flex.COLUMN_FLEX}
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const CodeIframe = styled.iframe`
  width: 100%;
  aspect-ratio: 16 / 9;
`;
