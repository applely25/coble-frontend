'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import * as Blockly from 'blockly/core';
import { BlocklySpace } from '@/components/common';
import { javascriptGenerator } from 'blockly/javascript';
import { BlocksInitializer, registerGenerators } from '@/utils/blocks';

import { styled } from '@linaria/react';
import { flex, font, theme } from '@/styles';
import { DownloadIcon, SaveIcon, ShareIcon, SizeUpIcon } from '@/assets/icon';

import { a11yLight, CodeBlock } from 'react-code-blocks';
import useBeautifyHtml from '@/hooks/useBeautifulHtml';

export default function Coding() {
  const params = useSearchParams();
  const type = params.get('type') || 'html';

  console.log(type);

  const [workspace, setWorkspace] = useState<Blockly.WorkspaceSvg | null>(null);
  const [code, setCode] = useState<string>('');

  const { beautifiedHtml } = useBeautifyHtml(code, setCode);

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
    BlocksInitializer();
  }, []);

  return (
    <Container>
      <CodingPlace>
        <CodingHeader>
          <div>
            <Link href="/coding?type=html">
              <FileButton isSelected={type === 'html'}>HTML</FileButton>
            </Link>
            <Link href="/coding?type=css">
              <FileButton isSelected={type === 'css'}>CSS</FileButton>
            </Link>
          </div>
          <div>
            <button>
              <ShareIcon />
            </button>
            <button>
              <SaveIcon />
            </button>
          </div>
        </CodingHeader>
        <BlocklySpace setWorkspace={setWorkspace} />
      </CodingPlace>
      <SideBar>
        <CodeIframeContainer>
          <Label>미리보기</Label>
          <CodeIframe src="https://google.com"></CodeIframe>
          <ButtonLabel>
            <SizeUpIcon />
          </ButtonLabel>
        </CodeIframeContainer>
        <CodeContainer>
          <Label>코드</Label>
          <PrettyCodeContainer>
            <CodeBlock
              text={beautifiedHtml}
              language="html"
              showLineNumbers={true}
              theme={a11yLight}
            />
          </PrettyCodeContainer>
          <ButtonLabel>
            <DownloadIcon />
          </ButtonLabel>
        </CodeContainer>
      </SideBar>
    </Container>
  );
}

const Container = styled.div`
  width: 100dvw;
  height: calc(100dvh - 60px);
  margin-top: 60px;
  ${flex.FLEX}
`;

const CodingPlace = styled.div`
  flex: 1;
  margin: 16px;
  padding: 4px;
  background-color: ${theme.blue[500]};
  border-radius: 18px;
`;

const CodingHeader = styled.div`
  ${flex.BETWEEN}
  >div {
    ${flex.FLEX}
    &:last-child {
      margin-right: 16px;
      gap: 8px;
    }
  }
`;

const FileButton = styled.button<{ isSelected: boolean }>`
  ${font.B1}
  height: 54px;
  padding: 15px 45px;
  border-radius: 16px 16px 0px 0px;

  color: ${({ isSelected }) =>
    isSelected ? theme.blue[500] : theme.extra.white};
  background-color: ${({ isSelected }) =>
    isSelected ? theme.extra.white : theme.blue[500]};
`;

const SideBar = styled.div`
  width: 500px;
  margin: 16px;
  ${flex.COLUMN_FLEX}
  gap: 15px;
`;

const CodeIframeContainer = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  border: 1px solid ${theme.blue[150]};
  border-radius: 16px;
  position: relative;
`;

const CodeIframe = styled.iframe`
  aspect-ratio: 16 / 9;
  border-radius: 16px;
  width: 100%;
  border: none;
`;

const Label = styled.p`
  ${font.C1}
  padding: 6px 16px;
  border-radius: 16px;
  background-color: ${theme.blue[400]};
  opacity: 50%;
  color: ${theme.extra.white};
  position: absolute;
  top: 8px;
  left: 8px;
  z-index: 10;
`;

const ButtonLabel = styled.button`
  ${flex.CENTER}
  width: 40px;
  height: 40px;
  background-color: ${theme.blue[400]};
  border-radius: 50%;
  position: absolute;
  bottom: 8px;
  right: 8px;
  z-index: 10;
`;

const CodeContainer = styled.div`
  width: 100%;
  flex: 1;
  background-color: ${theme.blue[50]};
  border-radius: 16px;
  position: relative;
`;
const PrettyCodeContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  position: absolute;
  top: 0;
  left: 0;
  padding: 35px 0px 50px 0px;
  > span {
    font-size: 1.4rem !important;
    background-color: ${theme.blue[50]} !important;
  }
`;
