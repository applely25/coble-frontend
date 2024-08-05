'use client';

import { channel } from '@/context/broadCastChannel';
import { styled } from '@linaria/react';
import { useEffect, useState } from 'react';

export default function Preview() {
  const [codeContext, setCodeContext] = useState('');

  useEffect(() => {
    const listener = (e: MessageEvent) => {
      setCodeContext(e.data);
      console.log('get', e);
    };
    channel.addEventListener('message', listener);
    return () => channel.removeEventListener('message', listener);
  }, []);

  return <IframeContainer srcDoc={codeContext}></IframeContainer>;
}

const IframeContainer = styled.iframe`
  width: 100dvw;
  height: 100dvh;
  padding: 100px;
`;
