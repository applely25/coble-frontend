'use client';

import { styled } from '@linaria/react';
import { flex } from '@/styles';

import {
  CodePreview,
  InfoModal,
  MainCoding,
  PrettyCode,
} from '@/components/page/coding';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

export default function Coding() {
  const [code, setCode] = useState<string>('');
  const { projectId } = useParams();
  const router = useRouter();

  useEffect(() => {
    console.log('code', code);
  }, [code]);

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
      <Container>
        <InfoModal />
        <MainCoding setCode={setCode} code={code} />
        <SideBar>
          <CodePreview code={code} />
          <PrettyCode code={code} setCode={setCode} />
        </SideBar>
      </Container>
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
