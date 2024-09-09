'use client';

import { projectDetailApi } from '@/api/project';
import { flex, font, theme } from '@/styles';
import { styled } from '@linaria/react';

import {
  useQuery,
  useMutation,
  QueryClient,
  useQueryClient,
} from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import useBeautifyHtml from '@/hooks/useBeautifulHtml';
import { a11yLight, CodeBlock } from 'react-code-blocks';
import { useEffect, useState } from 'react';
import * as Blockly from 'blockly/core';
import { BlocksInitializer, registerGenerators } from '@/utils/blocks';
import { javascriptGenerator } from 'blockly/javascript';
import axios from 'axios';
import { Heart, SizeUpIcon } from '@/assets/icon';
import { css } from '@emotion/react';
import { likesApi } from '@/api/likes';

export default function Project() {
  const { projectId } = useParams();
  const [iframeContent, setIframeContent] =
    useState<Blockly.WorkspaceSvg | null>(null);
  const [code, setCode] = useState<string>('');
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ['projectDetailApi'],
    queryFn: () => projectDetailApi(Number(projectId)),
  });

  const { mutate: likeMutate } = useMutation({
    mutationKey: ['likeApi'],
    mutationFn: likesApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projectDetailApi'] });
    },
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

        // JavaScript 코드를 생성
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
        <TitleContainer>
          <Title>{data?.title}</Title>
          <div>
            <button onClick={() => likeMutate(Number(projectId))}>
              <Heart isLiked={data?.like_status} />
            </button>
            <span>{data?.like_count}</span>
          </div>
        </TitleContainer>
        <TitleContainer>
          <Description>{data?.description}</Description>
          {/* <ButtonLabel onClick={() => {setSizeUp(true)}}>
            <SizeUpIcon size={16} />
          </ButtonLabel> */}
        </TitleContainer>
        <CodeIframe srcDoc={code} sizeUp={sizeUp} />
      </div>
      <div>
        <Title>{data?.title} 코드</Title>
        <Description>{data?.title} 코드를 확인해보세요!</Description>
        <PrettyCodeContainer>
          <CodeBlock
            text={
              beautifiedHtml.length
                ? beautifiedHtml
                : '코드가 존재하지 않습니다.'
            }
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
    ${flex.COLUMN_FLEX}
  }
`;

const TitleContainer = styled.div`
  ${flex.BETWEEN}
  margin-bottom: 10px;
  > div {
    ${flex.CENTER}
    gap: 4px;
    > button {
      ${flex.CENTER}
    }
    > span {
      ${font.B2}
    }
  }
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
