// utils/blocks/initializer.ts
import * as Blockly from 'blockly/core';
import htmlBlocks from './htmlBlocks';
import cssBlocks from './cssBlocks';

export default function BlocksInitializer() {
  htmlBlocks.forEach((block) => {
    Blockly.Blocks[block.type] = {
      init() {
        this.jsonInit(block);
      },
    };
  });
  cssBlocks.forEach((block) => {
    Blockly.Blocks[block.type] = {
      init() {
        this.jsonInit(block);
      },
    };
  });
}
