import * as Blockly from 'blockly/core';
import blocks from '@/utils/blocks/blocks';
import { styled } from '@linaria/react';
import { BlocklyWorkspace } from 'react-blockly';

const categorizedBlocks = blocks.reduce((acc: any, block: any) => {
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

interface BlocklyProps {
  setWorkspace: React.Dispatch<
    React.SetStateAction<Blockly.WorkspaceSvg | null>
  >;
}
const BlocklySpace = ({ setWorkspace }: BlocklyProps) => (
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

const BlocklyContainer = styled.div`
  height: 90vh;
  width: 100%;
`;
const BlocklyWorkspaceContainer = styled(BlocklyWorkspace)`
  height: 100%;
  width: 100%;
`;

export default BlocklySpace;
