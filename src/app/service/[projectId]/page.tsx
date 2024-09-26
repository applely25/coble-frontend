'use client';

import { projectDetailApi } from '@/api/project';
import { flex, font, theme } from '@/styles';
import { styled } from '@linaria/react';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import useBeautifyHtml from '@/hooks/useBeautifulHtml';
import { a11yLight, CodeBlock } from 'react-code-blocks';
import { useEffect, useState } from 'react';
import * as Blockly from 'blockly/core';
import { BlocksInitializer, registerGenerators } from '@/utils/blocks';
import { javascriptGenerator } from 'blockly/javascript';
import axios, { AxiosError } from 'axios';
import { Heart } from '@/assets/icon';
import { likesApi } from '@/api/likes';
import { ErrorResponse } from '@/api';
import { toast } from 'react-toastify';
import { NONEXML } from '@/constants';

export default function Project() {
  const { projectId } = useParams();
  const [code, setCode] = useState<string>('');
  const queryClient = useQueryClient();

  const { data, refetch } = useQuery({
    queryKey: ['projectDetailApi'],
    queryFn: () => projectDetailApi(Number(projectId)),
  });

  useEffect(() => {
    refetch();
  }, [projectId]);

  const { mutate: likeMutate } = useMutation({
    mutationKey: ['likeApi'],
    mutationFn: likesApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projectDetailApi'] });
    },
    onError: (error) => {
      const axiosError = error as AxiosError<ErrorResponse>;
      const message =
        axiosError.response?.data?.message || 'An unknown error occurred';
      toast.error(message);
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
      const getDefaultData = async () => {
        const res = NONEXML;
        const parser = new DOMParser();
        const xmlDom = parser.parseFromString(res, 'text/xml');

        const workspace = new Blockly.Workspace();
        Blockly.Xml.domToWorkspace(xmlDom.documentElement, workspace);

        // JavaScript 코드를 생성
        javascriptGenerator.addReservedWords('code');
        const generatedCode = javascriptGenerator.workspaceToCode(workspace);

        setCode(generatedCode);
      };
      if (data.project_url.split('/')[3]) getData();
      else {
        getDefaultData();
      }
    }
  }, [data?.project_url]);

  const { beautifiedHtml } = useBeautifyHtml(code, setCode);
  const [sizeUp, setSizeUp] = useState(false);

  return <CodeIframe srcDoc={code} sizeUp={sizeUp} />;
}

const CodeIframe = styled.iframe<{ sizeUp: boolean }>`
  width: 100vw;
  height: 100vh;
`;
