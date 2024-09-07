'use client';

import { projectDetailApi } from '@/api/project';
import { flex, font, theme } from '@/styles';
import { styled } from '@linaria/react';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import useBeautifyHtml from '@/hooks/useBeautifulHtml';
import { a11yLight, CodeBlock } from 'react-code-blocks';
import { useEffect, useState } from 'react';
import * as Blockly from 'blockly/core';
import { BlocksInitializer, registerGenerators } from '@/utils/blocks';
import { javascriptGenerator } from 'blockly/javascript';
import axios from 'axios';
import { SizeUpIcon } from '@/assets/icon';
import { css } from '@emotion/react';

export default function Project() {
  const { projectId } = useParams();
  const [iframeContent, setIframeContent] =
    useState<Blockly.WorkspaceSvg | null>(null);
  const [code, setCode] = useState<string>('');

  const { data } = useQuery({
    queryKey: ['projectDetailApi'],
    queryFn: () => projectDetailApi(Number(projectId)),
  });

  useEffect(() => {
    BlocksInitializer();
    registerGenerators();

    if (data) {
      const getData = async () => {
        const { data: res } = await axios.get(data.project_url);

        const parser = new DOMParser();
        const xmlDom = parser.parseFromString(res, 'text/xml');

        const workspace = new Blockly.Workspace();
        Blockly.Xml.domToWorkspace(xmlDom.documentElement, workspace);

        javascriptGenerator.addReservedWords('code');
        const generatedCode = javascriptGenerator.workspaceToCode(workspace);

        setCode(generatedCode);
      };
      getData();
    }
  }, [data?.project_url]);

  const { beautifiedHtml } = useBeautifyHtml(code, setCode);
  const [sizeUp, setSizeUp] = useState(false);
  return (
    <Conatienr>
      <div>
        <Title>{data?.title}</Title>
        <TitleContainer>
          <Description>{data?.description}</Description>
          <ButtonLabel onClick={() => {}}>
            <SizeUpIcon size={16} />
          </ButtonLabel>
        </TitleContainer>
        <CodeIframe srcDoc={code} sizeUp={sizeUp} />
      </div>
      <div>
        <Title>{data?.title} 코드</Title>
        <Description>{data?.title} 코드를 확인해보세요!</Description>
        <PrettyCodeContainer>
          <CodeBlock
            text={beautifiedHtml}
            language="html"
            showLineNumbers={true}
            theme={a11yLight}
          />
        </PrettyCodeContainer>
      </div>
    </Conatienr>
  );
}

const Conatienr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  margin: 70px auto;
  width: 60vw;
  > div {
    display: flex;
    flex-direction: column;
  }
`;

const TitleContainer = styled.div`
  ${flex.BETWEEN}
  margin-bottom: 10px;
`;
const Title = styled.h1`
  ${font.H1}
  color:${theme.blue[500]};
`;

const Description = styled.p`
  ${font.H5}
  color:${theme.gray[700]};
`;

const CodeIframe = styled.iframe<{ sizeUp: boolean }>`
  width: 60vw;
  aspect-ratio: 16/9;
`;

const PrettyCodeContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 10px 0px 10px 0px;
  > span {
    font-size: 1.4rem !important;
    background-color: ${theme.blue[50]} !important;
  }
`;

const ButtonLabel = styled.button`
  ${flex.CENTER}
  width: 32px;
  height: 32px;
  background-color: ${theme.blue[400]};
  border-radius: 50%;
`;
