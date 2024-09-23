'use client';
import { styled } from '@linaria/react';
import Sidebar from '@/components/page/docs/SideBar';
import ReactMarkdown from 'react-markdown';
import { useState, useEffect } from 'react';
import { flex, font, theme } from '@/styles';
import remarkGfm from 'remark-gfm';

export default function Docs() {
  const [selectedDocContent, setSelectedDocContent] = useState<string>('');
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    if (selectedDocContent) {
      fetch(selectedDocContent)
        .then((response) => response.text())
        .then((text) => setMarkdown(text));
    }
  }, [selectedDocContent]);

  return (
    <Wrapper>
      <Container>
        <Title>개발 문서 📄</Title>
        <Subtitle>문서를 확인하여 손쉽게 프로젝트를 만들어보세요!</Subtitle>
        <Content>
          <Sidebar onSelect={setSelectedDocContent} />
          <DocViewer>
            {markdown ? (
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {markdown}
              </ReactMarkdown>
            ) : (
              <p>문서를 선택해주세요.</p>
            )}
          </DocViewer>
        </Content>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  width: 1074px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.p`
  margin-top: 74px;
  font-size: 44px;
  font-weight: bold;
  margin-bottom: 8px;
  color: ${theme.blue[500]};
`;

const Subtitle = styled.p`
  margin-top: 10px;
  font-size: 25px;
  color: ${theme.extra.black};
`;

const Content = styled.div`
  ${flex.FLEX}
`;

const DocViewer = styled.div`
  padding: 20px;
  background-color: ${theme.extra.white};
  border-radius: 0px 8px 8px 0px;
  min-height: 400px;
  width: 768px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;
