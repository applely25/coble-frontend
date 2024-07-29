import { javascriptGenerator } from 'blockly/javascript';
import { CSSBlockTypes, HTMLBlockTypes } from './types';

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
- input_value -> generator.valueToCode(block, name)
*/

const registerGenerators = () => {
  javascriptGenerator.forBlock[HTMLBlockTypes.Html] = (block, generator) => {
    const content = generator.statementToCode(block, 'CONTENT');
    return `<html>${content}</html>`;
  };

  javascriptGenerator.forBlock[HTMLBlockTypes.Head] = (block, generator) => {
    const content = generator.statementToCode(block, 'CONTENT');
    return `<head>${content}</head>`;
  };

  javascriptGenerator.forBlock[HTMLBlockTypes.Meta] = (block, generator) => {
    const attributes = block.getFieldValue('ATTRIBUTES');
    return `<meta ${attributes}>`;
  };

  javascriptGenerator.forBlock[HTMLBlockTypes.Title] = (block, generator) => {
    const text = block.getFieldValue('TEXT');
    return `<title>${text}</title>`;
  };

  javascriptGenerator.forBlock[HTMLBlockTypes.Link] = (block, generator) => {
    const attributes = block.getFieldValue('ATTRIBUTES');
    return `<link ${attributes}>`;
  };

  javascriptGenerator.forBlock[HTMLBlockTypes.Body] = (block, generator) => {
    const content = generator.statementToCode(block, 'CONTENT');
    return `<body>${content}</body>`;
  };

  javascriptGenerator.forBlock[HTMLBlockTypes.Div] = (block, generator) => {
    const attributes = block.getFieldValue('ATTRIBUTES');
    const content = generator.statementToCode(block, 'CONTENT');
    return `<div ${attributes}>${content}</div>`;
  };

  javascriptGenerator.forBlock[HTMLBlockTypes.Section] = (block, generator) => {
    const attributes = block.getFieldValue('ATTRIBUTES');
    const content = generator.statementToCode(block, 'CONTENT');
    return `<section ${attributes}>${content}</section>`;
  };

  javascriptGenerator.forBlock[HTMLBlockTypes.Article] = (block, generator) => {
    const attributes = block.getFieldValue('ATTRIBUTES');
    const content = generator.statementToCode(block, 'CONTENT');
    return `<article ${attributes}>${content}</article>`;
  };

  javascriptGenerator.forBlock[HTMLBlockTypes.Header] = (block, generator) => {
    const attributes = block.getFieldValue('ATTRIBUTES');
    const content = generator.statementToCode(block, 'CONTENT');
    return `<header ${attributes}>${content}</header>`;
  };

  javascriptGenerator.forBlock[HTMLBlockTypes.Footer] = (block, generator) => {
    const attributes = block.getFieldValue('ATTRIBUTES');
    const content = generator.statementToCode(block, 'CONTENT');
    return `<footer ${attributes}>${content}</footer>`;
  };

  javascriptGenerator.forBlock[HTMLBlockTypes.Nav] = (block, generator) => {
    const attributes = block.getFieldValue('ATTRIBUTES');
    const content = generator.statementToCode(block, 'CONTENT');
    return `<nav ${attributes}>${content}</nav>`;
  };

  javascriptGenerator.forBlock[HTMLBlockTypes.P] = (block, generator) => {
    const text = block.getFieldValue('TEXT');
    return `<p>${text}</p>`;
  };

  javascriptGenerator.forBlock[HTMLBlockTypes.Pre] = (block, generator) => {
    const text = block.getFieldValue('TEXT');
    return `<pre>${text}</pre>`;
  };

  javascriptGenerator.forBlock[HTMLBlockTypes.Hr] = (block, generator) =>
    `<hr>`;

  javascriptGenerator.forBlock[HTMLBlockTypes.Ul] = (block, generator) => {
    const items = generator.statementToCode(block, 'ITEMS');
    return `<ul>${items}</ul>`;
  };

  javascriptGenerator.forBlock[HTMLBlockTypes.Ol] = (block, generator) => {
    const items = generator.statementToCode(block, 'ITEMS');
    return `<ol>${items}</ol>`;
  };

  javascriptGenerator.forBlock[HTMLBlockTypes.Li] = (block, generator) => {
    const text = block.getFieldValue('TEXT');
    return `<li>${text}</li>`;
  };

  javascriptGenerator.forBlock[HTMLBlockTypes.Dl] = (block, generator) => {
    const items = generator.statementToCode(block, 'ITEMS');
    return `<dl>${items}</dl>`;
  };

  javascriptGenerator.forBlock[HTMLBlockTypes.Dt] = (block, generator) => {
    const text = block.getFieldValue('TEXT');
    return `<dt>${text}</dt>`;
  };

  javascriptGenerator.forBlock[HTMLBlockTypes.Dd] = (block, generator) => {
    const text = block.getFieldValue('TEXT');
    return `<dd>${text}</dd>`;
  };

  javascriptGenerator.forBlock[HTMLBlockTypes.A] = (block, generator) => {
    const href = block.getFieldValue('HREF');
    const content = generator.statementToCode(block, 'CONTENT');
    return `<a href="${href}">${content}</a>`;
  };

  javascriptGenerator.forBlock[HTMLBlockTypes.Button] = (block, generator) => {
    const text = block.getFieldValue('TEXT');
    return `<button>${text}</button>`;
  };

  javascriptGenerator.forBlock[HTMLBlockTypes.Form] = (block, generator) => {
    const attributes = block.getFieldValue('ATTRIBUTES');
    const content = generator.statementToCode(block, 'CONTENT');
    return `<form ${attributes}>${content}</form>`;
  };

  javascriptGenerator.forBlock[HTMLBlockTypes.Fieldset] = (
    block,
    generator,
  ) => {
    const content = generator.statementToCode(block, 'CONTENT');
    return `<fieldset>${content}</fieldset>`;
  };

  javascriptGenerator.forBlock[HTMLBlockTypes.Legend] = (block, generator) => {
    const text = block.getFieldValue('TEXT');
    return `<legend>${text}</legend>`;
  };

  javascriptGenerator.forBlock[HTMLBlockTypes.Label] = (block, generator) => {
    const forValue = block.getFieldValue('FOR');
    const content = generator.statementToCode(block, 'CONTENT');
    return `<label for="${forValue}">${content}</label>`;
  };

  javascriptGenerator.forBlock[HTMLBlockTypes.Input] = (block, generator) => {
    const attributes = block.getFieldValue('ATTRIBUTES');
    return `<input ${attributes}>`;
  };

  javascriptGenerator.forBlock[HTMLBlockTypes.Textarea] = (
    block,
    generator,
  ) => {
    const attributes = block.getFieldValue('ATTRIBUTES');
    return `<textarea ${attributes}></textarea>`;
  };

  javascriptGenerator.forBlock[HTMLBlockTypes.Select] = (block, generator) => {
    const attributes = block.getFieldValue('ATTRIBUTES');
    const options = generator.statementToCode(block, 'OPTIONS');
    return `<select ${attributes}>${options}</select>`;
  };

  javascriptGenerator.forBlock[HTMLBlockTypes.Option] = (block, generator) => {
    const text = block.getFieldValue('TEXT');
    return `<option>${text}</option>`;
  };

  javascriptGenerator.forBlock[HTMLBlockTypes.Video] = (block, generator) => {
    const attributes = block.getFieldValue('ATTRIBUTES');
    return `<video ${attributes}></video>`;
  };

  javascriptGenerator.forBlock[HTMLBlockTypes.Audio] = (block, generator) => {
    const attributes = block.getFieldValue('ATTRIBUTES');
    return `<audio ${attributes}></audio>`;
  };

  javascriptGenerator.forBlock[HTMLBlockTypes.Embed] = (block, generator) => {
    const attributes = block.getFieldValue('ATTRIBUTES');
    return `<embed ${attributes}>`;
  };
};

export default registerGenerators;
