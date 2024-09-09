'use client';

import * as Blockly from 'blockly/core';
import { styled } from '@linaria/react';
import { BlocklyWorkspace } from 'react-blockly';
import { htmlBlocks, cssBlocks, ectBlocks } from '@/utils/blocks';
import '@/styles/blocklyWorkSpace.css';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { BlocksInitializer, registerGenerators } from '@/utils/blocks';
import { javascriptGenerator } from 'blockly/javascript';
import { supabase } from '@/utils/supabase/supabase';
import { DEFAULTXML } from '@/constants';
import { useQuery,  QueryClient, useQueryClient} from '@tanstack/react-query';
import { projectDetailApi } from '@/api/project';
import axios from 'axios';

interface BlocklyProps {
  workspace: Blockly.WorkspaceSvg | null;
  setWorkspace: React.Dispatch<
    React.SetStateAction<Blockly.WorkspaceSvg | null>
  >;
  type: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  code: string;
  setShare: React.Dispatch<React.SetStateAction<boolean>>;
}
const BlocklySpace = ({
  setWorkspace,
  type,
  workspace,
  setCode,
  code,
  setShare,
}: BlocklyProps) => {
  const { projectId } = useParams();
  const roomId = Array.isArray(projectId) ? projectId[0] : projectId;

  // XML 데이터 (서버에서 받아온 데이터를 대신하여 직접 사용할 수 있습니다)
  const exampleXml = DEFAULTXML;

  const categorizedBlocks = (
    type === 'html'
      ? htmlBlocks
      : type === 'css'
        ? cssBlocks
        : type === 'ect'
          ? ectBlocks
          : []
  ).reduce((acc: any, block: any) => {
    if (!acc[block.category]) {
      acc[block.category] = [];
    }
    acc[block.category].push({ type: block.type, kind: 'block' });
    return acc;
  }, {});

  const toolbox = {
    kind: 'categoryToolbox',
    contents: Object.keys(categorizedBlocks).map((category) => ({
      kind: 'category',
      name: category,
      contents: categorizedBlocks[category],
    })),
  };

  // XML 데이터를 Blockly 작업 공간으로 변환
  const loadWorkspaceFromXml = (xmlText: string) => {
    if (workspace) {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
      const workspaceDom = xmlDoc.documentElement;
      Blockly.Xml.domToWorkspace(workspaceDom, workspace);
    }
  };

  const { data, isError } = useQuery({
    queryKey: ['projectDetailApi', projectId],
    queryFn: () => projectDetailApi(Number(projectId)),
  });

  useEffect(() => {
    if (data) setShare(data.share_status);
  }, [data]);

  useEffect(() => {
    BlocksInitializer();
  }, []);
  const queryClient = useQueryClient();

  useEffect(() => {
    if (data && workspace) {
      if (!data.project_url.split('/')[3]) {
        loadWorkspaceFromXml(exampleXml);
        queryClient.invalidateQueries({ queryKey: ['projectCodeSaveApi'] });
      } else {
        const getData = async () => {
          const { data: res } = await axios.get(data.project_url);
          loadWorkspaceFromXml(res);
          const parser = new DOMParser();
          const xmlDom = parser.parseFromString(res, 'text/xml');
          const workspaceDom = xmlDom.documentElement;
          const newWorkspace = new Blockly.Workspace();
          Blockly.Xml.domToWorkspace(workspaceDom, newWorkspace);

          const updateCode = () => {
            javascriptGenerator.addReservedWords('code');
            const generatedCode =
              javascriptGenerator.workspaceToCode(newWorkspace);
            setCode(generatedCode);
          };
          updateCode();
        };
        getData();
      }
    }
  }, [data, workspace]);

  // 컴포넌트가 처음 렌더링될 때만 XML 데이터를 로드
  useEffect(() => {
    BlocksInitializer();
    registerGenerators();

    if (workspace) {
      const updateCode = () => {
        javascriptGenerator.addReservedWords('code');
        const generatedCode = javascriptGenerator.workspaceToCode(workspace);
        setCode(generatedCode);
      };

      workspace.addChangeListener(updateCode);

      return () => {
        workspace.removeChangeListener(updateCode);
      };
    }
  }, [workspace]);

  /*
  // supabase 연결

  useEffect(() => {
    if (Number(roomId)) {
      // 방의 콘텐츠를 처음 가져오거나 방을 생성
      const createOrFetchRoomContent = async () => {
        const { data, error } = await supabase
          .from('room_content')
          .select('content')
          .eq('room_id', roomId)
          .maybeSingle();

        if (error && error.code === 'PGRST116') {
          // 해당 번호로 만든 방이 없는 경우
          const { error: insertError } = await supabase
            .from('room_content')
            .insert([{ room_id: roomId, content: '' }]);

          if (insertError) {
            console.error('방 생성 실패:', insertError.message);
          } else {
            setCode('');
          }
        } else if (data) {
          // 방이 존재하면 콘텐츠 로드
          setCode(data.content);
        }
      };

      createOrFetchRoomContent();

      // Realtime 구독 설정
      const subscription = supabase
        .channel('public:room_content')
        .on(
          'postgres_changes',
          {
            event: '*',
            schema: 'public',
            table: 'room_content',
            filter: `room_id=eq.${roomId}`,
          },
          (payload) => {
            if (payload.eventType === 'UPDATE') {
              setCode(payload.new.content);
            }
          },
        )
        .subscribe();

      // 컴포넌트 언마운트 시 구독 해제
      return () => {
        supabase.removeChannel(subscription);
      };
    }
  }, [roomId]);

  useEffect(() => {
    if (Number(roomId)) {
      const updateRoomContent = async () => {
        const { error } = await supabase
          .from('room_content')
          .update({ content: code })
          .eq('room_id', roomId);

        if (error) {
          console.error('콘텐츠 업데이트 실패:', error.message);
        }
      };

      updateRoomContent();
    }
  }, [code, roomId]); // code가 변경될 때마다 콘텐츠를 업데이트
  */

  return (
    <BlocklyContainer>
      <BlocklyWorkspaceContainer
        toolboxConfiguration={toolbox}
        workspaceConfiguration={{
          grid: {
            spacing: 20,
            length: 2,
            colour: '#ccc',
            snap: true,
          },
        }}
        onWorkspaceChange={setWorkspace}
      />
    </BlocklyContainer>
  );
};

const BlocklyContainer = styled.div`
  height: calc(100vh - 60px - 94px);
  width: 100%;
`;
const BlocklyWorkspaceContainer = styled(BlocklyWorkspace)`
  height: 100%;
  width: 100%;
`;

export default BlocklySpace;
