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

  // css
  javascriptGenerator.forBlock[CSSBlockTypes.Display] = (block, generator) => {
    const value = block.getFieldValue('VALUE');
    return `display: ${value};`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.Position] = (block, generator) => {
    const value = block.getFieldValue('VALUE');
    return `position: ${value};`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.Top] = (block, generator) => {
    const value = block.getFieldValue('VALUE');
    return `top: ${value};`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.Right] = (block, generator) => {
    const value = block.getFieldValue('VALUE');
    return `right: ${value};`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.Bottom] = (block, generator) => {
    const value = block.getFieldValue('VALUE');
    return `bottom: ${value};`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.Left] = (block, generator) => {
    const value = block.getFieldValue('VALUE');
    return `left: ${value};`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.ZIndex] = (block, generator) => {
    const value = block.getFieldValue('VALUE');
    return `z-index: ${value};`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.Flex] = (block, generator) => {
    const value = block.getFieldValue('VALUE');
    return `flex: ${value};`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.FlexDirection] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `flex-direction: ${value};`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.JustifyContent] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `justify-content: ${value};`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.AlignItems] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `align-items: ${value};`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.GridTemplateColumns] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `grid-template-columns: ${value};`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.GridTemplateRows] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `grid-template-rows: ${value};`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.GridGap] = (block, generator) => {
    const value = block.getFieldValue('VALUE');
    return `grid-gap: ${value};`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.Width] = (block, generator) => {
    const value = block.getFieldValue('VALUE');
    return `width: ${value};`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.Height] = (block, generator) => {
    const value = block.getFieldValue('VALUE');
    return `height: ${value};`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.Margin] = (block, generator) => {
    const value = block.getFieldValue('VALUE');
    return `margin: ${value};`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.Padding] = (block, generator) => {
    const value = block.getFieldValue('VALUE');
    return `padding: ${value};`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.Border] = (block, generator) => {
    const value = block.getFieldValue('VALUE');
    return `border: ${value};`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.BoxSizing] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `box-sizing: ${value};`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.BorderWidth] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `border-width: ${value};`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.BorderStyle] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `border-style: ${value};`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.BorderColor] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `border-color: ${value};`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.BorderRadius] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `border-radius: ${value};`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.BackgroundColor] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `background-color: ${value};`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.BackgroundImage] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `background-image: ${value};`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.BackgroundSize] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `background-size: ${value};`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.BackgroundRepeat] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `background-repeat: ${value};`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.BackgroundPosition] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `background-position: ${value};`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.BackgroundAttachment] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `background-attachment: ${value};`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.FontFamily] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `font-family: ${value};`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.FontSize] = (block, generator) => {
    const value = block.getFieldValue('VALUE');
    return `font-size: ${value};`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.FontWeight] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `font-weight: ${value};`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.FontStyle] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `font-style: ${value};`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.FontVariant] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `font-variant: ${value};`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.TextAlign] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `text-align: ${value};`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.TextDecoration] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `text-decoration: ${value};`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.TextTransform] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `text-transform: ${value};`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.LineHeight] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `line-height: ${value};`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.LetterSpacing] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `letter-spacing: ${value};`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.WordSpacing] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `word-spacing: ${value};`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.Color] = (block, generator) => {
    const value = block.getFieldValue('VALUE');
    return `color: ${value};`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.Transition] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `transition: ${value};`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.TransitionProperty] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `transition-property: ${value};`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.TransitionDuration] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `transition-duration: ${value};`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.TransitionTimingFunction] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `transition-timing-function: ${value};`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.Animation] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `animation: ${value};`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.AnimationName] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `animation-name: ${value};`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.AnimationDuration] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `animation-duration: ${value};`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.AnimationTimingFunction] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `animation-timing-function: ${value};`;
  };
};

export default registerGenerators;
