import * as S from './style';
import * as Blockly from 'blockly/core';
import blocks from '@/utils/blocks/blocks';

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

export const BlocklyWorkspace = ({ setWorkspace }: BlocklyProps) => {
  return (
    <S.BlocklyContainer>
      <S.BlocklyWorkspaceContainer
        className={'testBlockly'}
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
    </S.BlocklyContainer>
  );
};
