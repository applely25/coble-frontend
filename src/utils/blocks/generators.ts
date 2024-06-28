import { javascriptGenerator } from 'blockly/javascript';
import { HTMLBlockTypes } from './types';

/*
블록 함수 기본 특
javascriptGenerator.forBlock[type] = function(block, generator) {
  - 블록의 변수를 가져옴
  - 블록의 변수를 이용하여 코드 생성
  - return '코드';
}

- field_input -> block.getFieldValue(name)
- input_statement -> generator.statementToCode(block, name)
- field_dropdown -> block.getFieldValue(name)
- field_checkbox -> block.getFieldValue(name)
- field_image -> block.getFieldValue(name)
- field_number -> block.getFieldValue(name)

*/

const registerGenerators = () => {
  javascriptGenerator.forBlock[HTMLBlockTypes.Html] = (block, generator) => {
    const content = generator.statementToCode(block, 'CONTENT');
    return `<html>${content}</html>`;
  };
};

export default registerGenerators;
