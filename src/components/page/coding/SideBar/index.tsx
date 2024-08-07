import { DownloadIcon, SizeUpIcon } from '@/assets/icon';
import { channel } from '@/context/broadCastChannel';
import useBeautifyHtml from '@/hooks/useBeautifulHtml';
import { flex, font, theme } from '@/styles';
import { styled } from '@linaria/react';
import { detect } from 'detect-browser';
import { useEffect } from 'react';
import { a11yLight, CodeBlock } from 'react-code-blocks';
import { toast } from 'react-toastify';

const browser = detect();

interface CodePreviewProps {
  code: string;
}

function CodePreview({ code }: CodePreviewProps) {
  const sendCode = () => {
    if (code) channel.postMessage(code);
  };

  useEffect(() => {
    if (browser?.name !== 'safari') {
      sendCode();
    }
  }, [code]);
  const ShowPreview = () => {
    if (browser?.name === 'safari') {
      toast.error(`${browser.name} 브라우저는 해당 기능을 지원하지 않습니다.`);
    } else {
      window.open('http://localhost:3000/preview');
      setTimeout(() => {
        sendCode();
      }, 1000);
    }
  };

  return (
    <TabContainer>
      <Label>미리보기</Label>
      <CodeIframeContainer>
        <CodeIframe srcDoc={code}></CodeIframe>
        <ButtonLabel onClick={ShowPreview}>
          <SizeUpIcon />
        </ButtonLabel>
      </CodeIframeContainer>
    </TabContainer>
  );
}

interface PrettyCodeProps {
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
}

function PrettyCode({ code, setCode }: PrettyCodeProps) {
  const { beautifiedHtml } = useBeautifyHtml(code, setCode);

  return (
    <TabContainer>
      <Label>코드</Label>
      <CodeContainer>
        <PrettyCodeContainer>
          <CodeBlock
            text={beautifiedHtml}
            language="html"
            showLineNumbers={true}
            theme={a11yLight}
          />
        </PrettyCodeContainer>
        <ButtonLabel>
          <DownloadIcon />
        </ButtonLabel>
      </CodeContainer>
    </TabContainer>
  );
}

export { CodePreview, PrettyCode };

const CodeIframeContainer = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  border: 1px solid ${theme.blue[150]};
  border-radius: 16px;
  position: relative;
`;

const TabContainer = styled.div`
  ${flex.COLUMN_FLEX}
  gap:8px;
  height: 100%;
`;

const CodeIframe = styled.iframe`
  aspect-ratio: 16 / 9;
  border-radius: 16px;
  width: 100%;
  border: none;
`;

const Label = styled.p`
  ${font.C1}
  padding: 6px 16px;
  border-radius: 16px;
  background-color: ${theme.blue[400]};
  opacity: 50%;
  color: ${theme.extra.white};
  width: fit-content;
`;

const ButtonLabel = styled.button`
  ${flex.CENTER}
  width: 40px;
  height: 40px;
  background-color: ${theme.blue[400]};
  border-radius: 50%;
  position: absolute;
  bottom: 8px;
  right: 8px;
  z-index: 10;
`;

const CodeContainer = styled.div`
  width: 100%;
  flex: 1;
  background-color: ${theme.blue[50]};
  border-radius: 16px;
  position: relative;
`;
const PrettyCodeContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0px 10px 0px;
  > span {
    font-size: 1.4rem !important;
    background-color: ${theme.blue[50]} !important;
  }
`;
