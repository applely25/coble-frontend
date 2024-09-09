'use client';

import { styled } from '@linaria/react';
import { flex } from '@/styles';
import Image from 'next/image';

import {
  CodePreview,
  InfoModal,
  MainCoding,
  PrettyCode,
} from '@/components/page/coding';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function Coding() {
  const [code, setCode] = useState<string>('');
  const { projectId } = useParams();
  useEffect(() => {
    toast('코드 블록이 보이지 않으신 경우, 새로고침 해주세요');
  }, []);
  const router = useRouter();

  if (Number(projectId)) {
    return (
      <Container>
        <MainCoding setCode={setCode} code={code} />
        <SideBar>
          <CodePreview code={code} />
          <PrettyCode code={code} setCode={setCode} />
        </SideBar>
      </Container>
    );
  } else if (projectId === 'new') {
    return (
      <CodingImage>
        <InfoModal />
        <Image src="/codingBackground.png" alt="landing" layout="fill" />
      </CodingImage>
    );
  } else {
    router.push('/coding/new');
  }
}

const Container = styled.div`
  width: 100dvw;
  height: calc(100dvh - 60px);
  margin-top: 60px;
  ${flex.FLEX}
`;

const SideBar = styled.div`
  width: 500px;
  margin: 16px;
  ${flex.COLUMN_FLEX}
  gap: 15px;
`;

const CodingImage = styled.div`
  width: 100vw;
  height: calc(100dvh - 60px);
  margin-top: 60px;
  background-color: red;
  position: relative;
`;
