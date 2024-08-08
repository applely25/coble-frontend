'use client';

import { styled } from '@linaria/react';
import { flex } from '@/styles';

import {
  CodePreview,
  InfoModal,
  MainCoding,
  PrettyCode,
} from '@/components/page/coding';
import { useState } from 'react';

export default function Coding() {
  const [code, setCode] = useState<string>('');

  return (
    <Container>
      <InfoModal />
      <MainCoding setCode={setCode} />
      <SideBar>
        <CodePreview code={code} />
        <PrettyCode code={code} setCode={setCode} />
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

const SideBar = styled.div`
  width: 500px;
  margin: 16px;
  ${flex.COLUMN_FLEX}
  gap: 15px;
`;
