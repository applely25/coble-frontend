'use client';

import { Suspense, useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { flex, font, theme } from '@/styles';
import { styled } from '@linaria/react';
import Link from 'next/link';

import * as Blockly from 'blockly/core';

import { ShareIcon, SaveIcon, MoreIcon } from '@/assets/icon';
import { BlocklySpace, LoadingSpinner } from '@/components/common';

interface MainCodingProps {
  setCode: React.Dispatch<React.SetStateAction<string>>;
  code: string;
}

export default function MainCodingSuspense({ setCode, code }: MainCodingProps) {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <MainCoding setCode={setCode} code={code} />
    </Suspense>
  );
}

function MainCoding({ setCode, code }: MainCodingProps) {
  const params = useSearchParams();
  const type = params.get('type') || 'html';

  const [workspace, setWorkspace] = useState<Blockly.WorkspaceSvg | null>(null);

  // 추후 XML로 변환하여 저장할 때 사용할 함수
  const printWorkspaceAsXml = useCallback(() => {
    if (workspace) {
      const workspaceDomXml = Blockly.Xml.workspaceToDom(workspace);
      const workspaceRawXml = Blockly.Xml.domToPrettyText(workspaceDomXml);
      console.log(workspaceRawXml);
    }
  }, [workspace]);

  return (
    <CodingPlace>
      <CodingHeader>
        <div>
          <Link href="?type=html">
            <FileButton isSelected={type === 'html'}>HTML</FileButton>
          </Link>
          <Link href="?type=css">
            <FileButton isSelected={type === 'css'}>CSS</FileButton>
          </Link>
          <Link href="?type=ect">
            <FileButton isSelected={type === 'ect'}>ECT</FileButton>
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
      <BlocklySpace
        workspace={workspace}
        setWorkspace={setWorkspace}
        type={type}
        setCode={setCode}
        code={code}
      />
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
