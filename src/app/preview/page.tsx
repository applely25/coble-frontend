'use client';

import { channel } from '@/context/broadCastChannel';
import { styled } from '@linaria/react';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function Preview() {
  const [codeContext, setCodeContext] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    toast.info(
      '새로고침 시, 미리보기가 작동하지 않을 수 있습니다. 블록을 수정하면 정상 작동할 것입니다.',
      {
        autoClose: 3000,
      },
    );
  }, []);

  useEffect(() => {
    const listener = (e: MessageEvent) => {
      setCodeContext(e.data);
    };
    channel.addEventListener('message', listener);
    return () => channel.removeEventListener('message', listener);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <>loading</>;
  } else {
    return <IframeContainer srcDoc={codeContext}></IframeContainer>;
  }
}

const IframeContainer = styled.iframe`
  width: 100dvw;
  height: 100dvh;
  border: none;
`;
