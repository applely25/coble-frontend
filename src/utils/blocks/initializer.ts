import * as Blockly from 'blockly/core';
import blocks from './blocks';

export default function BlocksInitializer() {
  blocks.forEach((block) => {
    Blockly.Blocks[block.type] = {
      init: function () {
        this.jsonInit(block);
      },
    };
  });
}
