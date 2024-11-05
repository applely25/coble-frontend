'use client';
import dynamic from 'next/dynamic';
import React from 'react';

// Viewer 컴포넌트만 동적으로 가져오기
const Viewer = dynamic(
  () => import('@toast-ui/react-editor').then((mod) => mod.Viewer),
  { ssr: false },
);

const DynamicViewer = ({ markdown }: { markdown: string }) => {
  return <Viewer initialValue={markdown} />;
};

export default DynamicViewer;
