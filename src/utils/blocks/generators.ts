import { javascriptGenerator } from 'blockly/javascript';
import { HTMLBlockTypes } from './types';

/*
블록 함수 기본 특
javascriptGenerator.forBlock[type] = function(block, generator) {
  return '코드';
}

블록 안에 text 
- type : field_input
- block.getFieldValue(name)

블록 안에 블록
- type : input_statement
- generator.statementToCode(block, name)

*/
const registerGenerators = () => {
  javascriptGenerator.forBlock[HTMLBlockTypes.Html] = function (
    block,
    generator,
  ) {
    const content = block.getFieldValue('TEXT') || '';
    const content2 = block.getFieldValue('TEXT2') || '';
    return `<html>${content} - ${content2}</html>`;
  };
};

export default registerGenerators;
