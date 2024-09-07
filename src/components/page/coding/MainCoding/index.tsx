'use client';

import { Suspense, useCallback, useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { flex, font, theme } from '@/styles';
import { styled } from '@linaria/react';
import Link from 'next/link';

import * as Blockly from 'blockly/core';

import { ShareIcon, SaveIcon, MoreIcon } from '@/assets/icon';
import { BlocklySpace, LoadingSpinner } from '@/components/common';
import { handleCopyClipBoard } from '@/utils/clipboard';
import UpdateInfoModal from '../UpdataModal';
import { useMutation } from '@tanstack/react-query';
import { projectCodeSaveApi, projectSaveApi } from '@/api/project';
import { toast } from 'react-toastify';

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
  const { projectId } = useParams();

  const type = params.get('type') || 'html';

  const [workspace, setWorkspace] = useState<Blockly.WorkspaceSvg | null>(null);
  const [showMoreTab, setShowMoreTab] = useState<boolean>(false);
  const [showProjectUpdateModal, setShowProjectUpdateModal] =
    useState<boolean>(false);

  // 추후 XML로 변환하여 저장할 때 사용할 함수
  const printWorkspaceAsXml = useCallback(() => {
    if (workspace) {
      const workspaceDomXml = Blockly.Xml.workspaceToDom(workspace);
      const workspaceRawXml = Blockly.Xml.domToPrettyText(workspaceDomXml);
      return workspaceRawXml;
    }
  }, [workspace]);

  const { mutate: saveCodeMutate } = useMutation({
    mutationFn: projectCodeSaveApi,
    mutationKey: ['projectCodeSaveApi'],
    onSuccess: () => toast.success('코드 저장 성공'),
    onError: () => toast.error('코드 저장 실패'),
  });

  const shareUrl = () => {
    if (projectId)
      handleCopyClipBoard(
        `${window.location.protocol}//${window.location.host}/project/${projectId}`,
      );
  };

  const saveCode = () => {
    const xml = printWorkspaceAsXml();
    if (!xml) {
      console.error('No XML generated from workspace');
      return; // xml이 undefined인 경우 Blob을 생성하지 않고 함수를 종료
    }

    const blob = new Blob([xml], { type: 'text/xml' });

    saveCodeMutate({ projectId: Number(projectId), code: blob });
  };

  const showMoreTabClick = () => {
    setShowMoreTab(!showMoreTab);
  };
  const stopPropagation = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const UpdateProjectInfo = () => {
    setShowProjectUpdateModal(true);
  };

  const deleteProject = () => {
    if (window.confirm('삭제하시겠습니까?')) {
      // 삭제 서버 요청보내기
    }
  };

  return (
    <CodingPlace>
      {showProjectUpdateModal && (
        <UpdateInfoModal
          isOpen={showProjectUpdateModal}
          setIsOpen={setShowProjectUpdateModal}
        />
      )}
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
          <button onClick={shareUrl}>
            <ShareIcon />
          </button>
          <button onClick={saveCode}>
            <SaveIcon />
          </button>
          <MoreButton onClick={showMoreTabClick}>
            <MoreIcon />
            {showMoreTab && (
              <ShowMore onClick={stopPropagation}>
                <button onClick={UpdateProjectInfo}>수정하기</button>
                <hr />
                <button onClick={deleteProject}>삭제하기</button>
              </ShowMore>
            )}
          </MoreButton>
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

const MoreButton = styled.button`
  position: relative;
`;

const ShowMore = styled.div`
  ${flex.COLUMN_FLEX}
  position: absolute;
  top: 20px;
  left: 10px;
  background-color: ${theme.extra.white};
  border-radius: 16px;
  z-index: 30;
  > button {
    padding: 8px 18px;
    width: max-content;
    &:last-child {
      color: ${theme.extra.red};
    }
  }
  > hr {
    color: ${theme.gray[500]};
    width: 100%;
  }
`;
