// utils/blocks/initializer.ts
import * as Blockly from 'blockly/core';
import blocks from './blocks';

export default function BlocksInitializer() {
  blocks.forEach((block) => {
    Blockly.Blocks[block.type] = {
      init() {
        this.jsonInit(block);
      },
    };
  });
}
