'use client';

import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { flex, font, theme } from '@/styles';
import { styled } from '@linaria/react';
import Link from 'next/link';

import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

import { ShareIcon, SaveIcon, MoreIcon } from '@/assets/icon';
import { BlocklySpace } from '@/components/common';
import { BlocksInitializer, registerGenerators } from '@/utils/blocks';

interface MainCodingProps {
  setCode: React.Dispatch<React.SetStateAction<string>>;
}

export default function MainCoding({ setCode }: MainCodingProps) {
  const params = useSearchParams();
  const type = params.get('type') || 'html';

  const [workspace, setWorkspace] = useState<Blockly.WorkspaceSvg | null>(null);

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

  useEffect(() => {
    BlocksInitializer();
  }, []);

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

  return (
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
          <button onClick={printWorkspaceAsXml}>
            <ShareIcon />
          </button>
          <button>
            <SaveIcon />
          </button>
          <button>
            <MoreIcon />
          </button>
        </div>
      </CodingHeader>
      <BlocklySpace setWorkspace={setWorkspace} type={type} />
    </CodingPlace>
  );
}

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
