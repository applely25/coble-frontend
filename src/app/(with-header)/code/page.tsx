'use client';

import { useCallback, useEffect, useState } from 'react';
import { styled } from '@linaria/react';
import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

import { BlocklySpace } from '@/components/common';
import { BlocksInitializer, registerGenerators } from '@/utils/blocks';
import { flex } from '@/styles';

const Code = () => {
  const [workspace, setWorkspace] = useState<Blockly.WorkspaceSvg | null>(null);
  const [code, setCode] = useState<string>('');

  // XML 데이터 (서버에서 받아온 데이터를 대신하여 직접 사용할 수 있습니다)
  const exampleXml = ``;

  // XML 데이터를 Blockly 작업 공간으로 변환
  const loadWorkspaceFromXml = (xmlText: string) => {
    if (workspace) {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
      const workspaceDom = xmlDoc.documentElement;
      Blockly.Xml.domToWorkspace(workspaceDom, workspace);
    }
  };

  // 추후 XML로 변환하여 저장할 때 사용할 함수
  const printWorkspaceAsXml = useCallback(() => {
    if (workspace) {
      const workspaceDomXml = Blockly.Xml.workspaceToDom(workspace);
      const workspaceRawXml = Blockly.Xml.domToPrettyText(workspaceDomXml);
      console.log(workspaceRawXml);
    }
  }, [workspace]);

  // 컴포넌트가 처음 렌더링될 때만 XML 데이터를 로드
  useEffect(() => {
    BlocksInitializer();
    registerGenerators();

    if (workspace) {
      loadWorkspaceFromXml(exampleXml);

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

  useEffect(() => {
    // 작업 공간이 설정된 후 한 번만 XML 데이터를 로드
    BlocksInitializer();
  }, []);

  return (
    <Wrapper>
      <div>header</div>
      <Container>
        <BlocklySpace setWorkspace={setWorkspace} />
        <div>
          <CodeIframe srcDoc={code} />
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
