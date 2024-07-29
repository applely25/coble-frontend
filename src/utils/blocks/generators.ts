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
  javascriptGenerator.forBlock[CSSBlockTypes.Display] = (block, generator) => {
    const value = block.getFieldValue('VALUE');
    return `<style>display: ${value};</style>`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.Position] = (block, generator) => {
    const value = block.getFieldValue('VALUE');
    return `<style>position: ${value};</style>`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.Top] = (block, generator) => {
    const value = block.getFieldValue('VALUE');
    return `<style>top: ${value};</style>`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.Right] = (block, generator) => {
    const value = block.getFieldValue('VALUE');
    return `<style>right: ${value};</style>`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.Bottom] = (block, generator) => {
    const value = block.getFieldValue('VALUE');
    return `<style>bottom: ${value};</style>`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.Left] = (block, generator) => {
    const value = block.getFieldValue('VALUE');
    return `<style>left: ${value};</style>`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.ZIndex] = (block, generator) => {
    const value = block.getFieldValue('VALUE');
    return `<style>z-index: ${value};</style>`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.Flex] = (block, generator) => {
    const value = block.getFieldValue('VALUE');
    return `<style>flex: ${value};</style>`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.FlexDirection] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `<style>flex-direction: ${value};</style>`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.JustifyContent] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `<style>justify-content: ${value};</style>`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.AlignItems] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `<style>align-items: ${value};</style>`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.GridTemplateColumns] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `<style>grid-template-columns: ${value};</style>`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.GridTemplateRows] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `<style>grid-template-rows: ${value};</style>`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.GridGap] = (block, generator) => {
    const value = block.getFieldValue('VALUE');
    return `<style>grid-gap: ${value};</style>`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.Width] = (block, generator) => {
    const value = block.getFieldValue('VALUE');
    return `<style>width: ${value};</style>`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.Height] = (block, generator) => {
    const value = block.getFieldValue('VALUE');
    return `<style>height: ${value};</style>`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.Margin] = (block, generator) => {
    const value = block.getFieldValue('VALUE');
    return `<style>margin: ${value};</style>`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.Padding] = (block, generator) => {
    const value = block.getFieldValue('VALUE');
    return `<style>padding: ${value};</style>`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.Border] = (block, generator) => {
    const value = block.getFieldValue('VALUE');
    return `<style>border: ${value};</style>`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.BoxSizing] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `<style>box-sizing: ${value};</style>`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.BorderWidth] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `<style>border-width: ${value};</style>`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.BorderStyle] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `<style>border-style: ${value};</style>`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.BorderColor] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `<style>border-color: ${value};</style>`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.BorderRadius] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `<style>border-radius: ${value};</style>`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.BackgroundColor] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `<style>background-color: ${value};</style>`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.BackgroundImage] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `<style>background-image: ${value};</style>`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.BackgroundSize] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `<style>background-size: ${value};</style>`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.BackgroundRepeat] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `<style>background-repeat: ${value};</style>`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.BackgroundPosition] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `<style>background-position: ${value};</style>`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.BackgroundAttachment] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `<style>background-attachment: ${value};</style>`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.FontFamily] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `<style>font-family: ${value};</style>`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.FontSize] = (block, generator) => {
    const value = block.getFieldValue('VALUE');
    return `<style>font-size: ${value};</style>`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.FontWeight] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `<style>font-weight: ${value};</style>`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.FontStyle] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `<style>font-style: ${value};</style>`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.FontVariant] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `<style>font-variant: ${value};</style>`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.TextAlign] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `<style>text-align: ${value};</style>`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.TextDecoration] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `<style>text-decoration: ${value};</style>`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.TextTransform] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `<style>text-transform: ${value};</style>`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.LineHeight] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `<style>line-height: ${value};</style>`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.LetterSpacing] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `<style>letter-spacing: ${value};</style>`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.WordSpacing] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `<style>word-spacing: ${value};</style>`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.Color] = (block, generator) => {
    const value = block.getFieldValue('VALUE');
    return `<style>color: ${value};</style>`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.Transition] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `<style>transition: ${value};</style>`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.TransitionProperty] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `<style>transition-property: ${value};</style>`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.TransitionDuration] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `<style>transition-duration: ${value};</style>`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.TransitionTimingFunction] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `<style>transition-timing-function: ${value};</style>`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.Animation] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `<style>animation: ${value};</style>`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.AnimationName] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `<style>animation-name: ${value};</style>`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.AnimationDuration] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `<style>animation-duration: ${value};</style>`;
  };

  javascriptGenerator.forBlock[CSSBlockTypes.AnimationTimingFunction] = (
    block,
    generator,
  ) => {
    const value = block.getFieldValue('VALUE');
    return `<style>animation-timing-function: ${value};</style>`;
  };
};

export default registerGenerators;
