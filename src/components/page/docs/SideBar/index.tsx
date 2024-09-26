import React, { useState } from 'react';
import styled from 'styled-components';
import documents from '../../../../constants/docs';
import color from '@/styles/theme';
import { useRouter } from 'next/navigation';

interface SidebarProps {
  onSelect: (path: string) => void;
}

function Sidebar({ onSelect }: SidebarProps) {
  const [activeId, setActiveId] = useState<number>();
  const router = useRouter();

  const handleClick = (docId: number, docPath: string) => {
    setActiveId(docId);
    onSelect(`/docs/${docPath}`);
    router.push(`/docs?page=${docId}`);
  };

  return (
    <SideBar>
      {documents.map((doc) => (
        <SidebarButton
          key={doc.id}
          isActive={activeId === doc.id}
          onClick={() => handleClick(doc.id, doc.docs)}
        >
          {doc.title}
        </SidebarButton>
      ))}
    </SideBar>
  );
}

const SideBar = styled.aside`
  width: 306px;
  border: 1px solid ${color.gray[100]};
  background-color: ${color.extra.white};
  padding: 10px;
  border-radius: 8px 0px 0px 8px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  overflow: auto;
`;

const SidebarButton = styled.div<{ isActive: boolean }>`
  width: 100%;
  background: ${(props) =>
    props.isActive ? color.blue[100] : color.extra.white};
  border: none;
  border-radius: 16px;
  width: 274px;
  text-align: left;
  padding: 16px;
  cursor: pointer;
  font-size: 16px;
  color: #333;
  &:hover {
    background-color: ${(props) =>
      props.isActive ? color.blue[100] : color.blue[50]};
  }
`;

export default Sidebar;
