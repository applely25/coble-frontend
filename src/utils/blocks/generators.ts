import { javascriptGenerator, Order } from 'blockly/javascript';
import { CSSBlockTypes, EctBlockTypes, HTMLBlockTypes } from './types';

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
  javascriptGenerator.forBlock[HTMLBlockTypes.DoctypeHTML] = (
    block,
    generator,
  ) => {
    return `<!DOCTYPE html>`;
  };
  javascriptGenerator.forBlock[HTMLBlockTypes.Html] = (block, generator) => {
    const lang = block.getFieldValue('lang');
    const content = generator.statementToCode(block, 'CONTENT');
    return `<html lang=${lang}>${content}</html>`;
  };
  javascriptGenerator.forBlock[HTMLBlockTypes.Head] = (block, generator) => {
    const content = generator.statementToCode(block, 'CONTENT');
    return `<head>${content}</head>`;
  };
  javascriptGenerator.forBlock[HTMLBlockTypes.Body] = (block, generator) => {
    const content = generator.statementToCode(block, 'CONTENT');
    return `<body>${content}</body>`;
  };
  javascriptGenerator.forBlock[HTMLBlockTypes.Meta] = (block, generator) => {
    const content = block.getFieldValue('ATTRIBUTES');
    return `<meta ${content}/>`;
  };
  javascriptGenerator.forBlock[HTMLBlockTypes.Title] = (block, generator) => {
    const content = block.getFieldValue('TITLE');
    return `<title>${content}</title>`;
  };
  javascriptGenerator.forBlock[HTMLBlockTypes.Style] = (block, generator) => {
    const content = generator.statementToCode(block, 'CONTENT');
    return `<style>${content}</style>`;
  };
  javascriptGenerator.forBlock[HTMLBlockTypes.Div] = (block, generator) => {
    const id = generator.valueToCode(block, 'id', 0);
    const content = generator.statementToCode(block, 'CONTENT');
    return `<div${id}>${content}</div>`;
  };
  javascriptGenerator.forBlock[HTMLBlockTypes.Section] = (block, generator) => {
    const id = generator.valueToCode(block, 'id', 0);
    const content = generator.statementToCode(block, 'CONTENT');
    return `<section${id}>${content}</section>`;
  };
  javascriptGenerator.forBlock[HTMLBlockTypes.Article] = (block, generator) => {
    const id = generator.valueToCode(block, 'id', 0);
    const content = generator.statementToCode(block, 'CONTENT');
    return `<article${id}>${content}</article%id>`;
  };
  javascriptGenerator.forBlock[HTMLBlockTypes.Header] = (block, generator) => {
    const id = generator.valueToCode(block, 'id', 0);
    const content = generator.statementToCode(block, 'CONTENT');
    return `<header${id}>${content}</header>`;
  };
  javascriptGenerator.forBlock[HTMLBlockTypes.Footer] = (block, generator) => {
    const id = generator.valueToCode(block, 'id', 0);
    const content = generator.statementToCode(block, 'CONTENT');
    return `<footer${id}>${content}</footer>`;
  };
  javascriptGenerator.forBlock[HTMLBlockTypes.Nav] = (block, generator) => {
    const id = generator.valueToCode(block, 'id', 0);
    const content = generator.statementToCode(block, 'CONTENT');
    return `<nav${id}>${content}</nav>`;
  };
  javascriptGenerator.forBlock[HTMLBlockTypes.P] = (block, generator) => {
    const id = generator.valueToCode(block, 'id', 0);
    const content = block.getFieldValue('CONTENT');
    return `<p${id}>${content}</p>`;
  };
  javascriptGenerator.forBlock[HTMLBlockTypes.Blockquote] = (
    block,
    generator,
  ) => {
    const id = generator.valueToCode(block, 'id', 0);
    const content = block.getFieldValue('CONTENT');
    return `<blockquote${id}>${content}</blockquote>`;
  };
  javascriptGenerator.forBlock[HTMLBlockTypes.Hr] = (block, generator) => {
    const id = generator.valueToCode(block, 'id', 0);
    return `<hr${id}/>`;
  };
  javascriptGenerator.forBlock[HTMLBlockTypes.Ul] = (block, generator) => {
    const id = generator.valueToCode(block, 'id', 0);
    const content = generator.statementToCode(block, 'CONTENT');
    return `<ul${id}>${content}</ul>`;
  };
  javascriptGenerator.forBlock[HTMLBlockTypes.Ol] = (block, generator) => {
    const content = generator.statementToCode(block, 'CONTENT');
    const id = generator.valueToCode(block, 'id', 0);
    return `<ol${id}>${content}</ol>`;
  };
  javascriptGenerator.forBlock[HTMLBlockTypes.Li] = (block, generator) => {
    const id = generator.valueToCode(block, 'id', 0);
    const content = generator.statementToCode(block, 'CONTENT');
    return `<li${id}>${content}</li>`;
  };
  javascriptGenerator.forBlock[HTMLBlockTypes.Dl] = (block, generator) => {
    const id = generator.valueToCode(block, 'id', 0);
    const content = generator.statementToCode(block, 'CONTENT');
    return `<dl${id}>${content}</dl>`;
  };
  javascriptGenerator.forBlock[HTMLBlockTypes.Dt] = (block, generator) => {
    const id = generator.valueToCode(block, 'id', 0);
    const content = generator.statementToCode(block, 'CONTENT');
    return `<dt${id}>${content}</dt>`;
  };
  javascriptGenerator.forBlock[HTMLBlockTypes.Dd] = (block, generator) => {
    const id = generator.valueToCode(block, 'id', 0);
    const content = generator.statementToCode(block, 'CONTENT');
    return `<dd${id}>${content}</dd>`;
  };
  javascriptGenerator.forBlock[HTMLBlockTypes.A] = (block, generator) => {
    const id = generator.valueToCode(block, 'id', 0);
    const href = block.getFieldValue('HREF');
    const content = generator.statementToCode(block, 'CONTENT');
    return `<a href="${href}"${id}>${content}</a>`;
  };
  javascriptGenerator.forBlock[HTMLBlockTypes.Button] = (block, generator) => {
    const id = generator.valueToCode(block, 'id', 0);
    const content = generator.statementToCode(block, 'CONTENT');
    return `<button${id}>${content}</button>`;
  };
  javascriptGenerator.forBlock[HTMLBlockTypes.Form] = (block, generator) => {
    const id = generator.valueToCode(block, 'id', 0);
    const content = generator.statementToCode(block, 'CONTENT');
    return `<form${id}>${content}</form>`;
  };
  javascriptGenerator.forBlock[HTMLBlockTypes.Fieldset] = (
    block,
    generator,
  ) => {
    const id = generator.valueToCode(block, 'id', 0);
    const content = generator.statementToCode(block, 'CONTENT');
    return `<fieldset${id}>${content}</fieldset>`;
  };
  javascriptGenerator.forBlock[HTMLBlockTypes.Legend] = (block, generator) => {
    const id = generator.valueToCode(block, 'id', 0);
    const content = generator.statementToCode(block, 'CONTENT');
    return `<legend${id}>${content}</legend>`;
  };
  javascriptGenerator.forBlock[HTMLBlockTypes.Label] = (block, generator) => {
    const id = generator.valueToCode(block, 'id', 0);
    const content = block.getFieldValue('LABEL');
    return `<label${id}>${content}</label>`;
  };
  javascriptGenerator.forBlock[HTMLBlockTypes.Input] = (block, generator) => {
    const id = generator.valueToCode(block, 'id', 0);
    return `<input${id}/>`;
  };
  javascriptGenerator.forBlock[HTMLBlockTypes.Textarea] = (
    block,
    generator,
  ) => {
    const id = generator.valueToCode(block, 'id', 0);
    return `<textarea${id}/>`;
  };
  javascriptGenerator.forBlock[HTMLBlockTypes.Select] = (block, generator) => {
    const id = generator.valueToCode(block, 'id', 0);
    const content = generator.statementToCode(block, 'CONTENT');
    return `<select${id}>${content}</select>`;
  };
  javascriptGenerator.forBlock[HTMLBlockTypes.Select] = (block, generator) => {
    const id = generator.valueToCode(block, 'id', 0);
    const content = generator.statementToCode(block, 'CONTENT');
    return `<option${id}>${content}</option>`;
  };
  javascriptGenerator.forBlock[HTMLBlockTypes.Video] = (block, generator) => {
    const id = generator.valueToCode(block, 'id', 0);
    const content = generator.statementToCode(block, 'CONTENT');
    return `<video${id}>${content}</video>`;
  };
  javascriptGenerator.forBlock[HTMLBlockTypes.Source] = (block, generator) => {
    const id = generator.valueToCode(block, 'id', 0);
    const src = block.getFieldValue('SRC');
    return `<source src="${src}"${id}/>`;
  };
  javascriptGenerator.forBlock[HTMLBlockTypes.Audio] = (block, generator) => {
    const content = generator.statementToCode(block, 'CONTENT');
    const id = generator.valueToCode(block, 'id', 0);
    return `<audio${id}>${content}</audio>`;
  };
  javascriptGenerator.forBlock[HTMLBlockTypes.Img] = (block, generator) => {
    const id = generator.valueToCode(block, 'id', 0);
    const src = block.getFieldValue('SRC');
    return `<img src="${src}"${id}/>`;
  };
  javascriptGenerator.forBlock[EctBlockTypes.Class] = (block, generator) => {
    const classText = block.getFieldValue('CLASS');
    const nextBlock = generator.valueToCode(block, 'NEXT', 0);
    return [` class="${classText}"${nextBlock}`, 0];
  };
  javascriptGenerator.forBlock[EctBlockTypes.Id] = (block, generator) => {
    const classText = block.getFieldValue('ID');
    const nextBlock = generator.valueToCode(block, 'NEXT', 0);
    return [` id="${classText}"${nextBlock}`, 0];
  };
  javascriptGenerator.forBlock[EctBlockTypes.ClassCss] = (block, generator) => {
    const classText = block.getFieldValue('CLASS');
    const content = generator.statementToCode(block, 'CONTENT');
    return `.${classText}{${content}}`;
  };
  javascriptGenerator.forBlock[EctBlockTypes.Id] = (block, generator) => {
    const classText = block.getFieldValue('CLASS');
    const content = generator.statementToCode(block, 'CONTENT');
    return `#${classText}{${content}}`;
  };
  javascriptGenerator.forBlock[EctBlockTypes.Css] = (block, generator) => {
    const classText = block.getFieldValue('ID');
    const content = generator.statementToCode(block, 'CONTENT');
    return `${classText}{${content}}`;
  };
  javascriptGenerator.forBlock[EctBlockTypes.TextBlock] = (
    block,
    generator,
  ) => {
    const classText = block.getFieldValue('CONTENT');
    return `${classText}`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.FontFamily] = (
    block,
    generator,
  ) => {
    const classText = block.getFieldValue('CONTENT');
    return `font-family: ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.FontSize] = (block, generator) => {
    const classText = block.getFieldValue('CONTENT');
    return `font-size : ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.FontWeight] = (
    block,
    generator,
  ) => {
    const classText = block.getFieldValue('CONTENT');
    return `font-weight : ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.FontStyle] = (
    block,
    generator,
  ) => {
    const classText = block.getFieldValue('CONTENT');
    return `font-style : ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.TextAlign] = (
    block,
    generator,
  ) => {
    const classText = block.getFieldValue('CONTENT');
    return `text-align : ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.TextDecoration] = (
    block,
    generator,
  ) => {
    const classText = block.getFieldValue('CONTENT');
    return `text-decoration : ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.TextTransform] = (
    block,
    generator,
  ) => {
    const classText = block.getFieldValue('CONTENT');
    return `text-transform : ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.LineHeight] = (
    block,
    generator,
  ) => {
    const classText = block.getFieldValue('CONTENT');
    return `line-height : ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.LetterSpacing] = (
    block,
    generator,
  ) => {
    const classText = block.getFieldValue('CONTENT');
    return `letter-spacing : ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.WordSpacing] = (
    block,
    generator,
  ) => {
    const classText = block.getFieldValue('CONTENT');
    return `word-spacing : ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.Color] = (block, generator) => {
    const classText = block.getFieldValue('CONTENT');
    return `color : ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.ColorPicker] = (
    block,
    generator,
  ) => {
    const classText = block.getFieldValue('CONTENT');
    return `color : ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.Width] = (block, generator) => {
    const classText = block.getFieldValue('CONTENT');
    return `width : ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.Height] = (block, generator) => {
    const classText = block.getFieldValue('CONTENT');
    return `height : ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.Margin] = (block, generator) => {
    const classText = block.getFieldValue('CONTENT');
    return `margin : ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.Padding] = (block, generator) => {
    const classText = block.getFieldValue('CONTENT');
    return `padding : ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.Border] = (block, generator) => {
    const classText = block.getFieldValue('CONTENT');
    return `border : ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.BoxSizing] = (
    block,
    generator,
  ) => {
    const classText = block.getFieldValue('CONTENT');
    return `box-sizing : ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.BorderWidth] = (
    block,
    generator,
  ) => {
    const classText = block.getFieldValue('CONTENT');
    return `border-width : ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.BorderStyle] = (
    block,
    generator,
  ) => {
    const classText = block.getFieldValue('CONTENT');
    return `border-style : ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.BorderColor] = (
    block,
    generator,
  ) => {
    const classText = block.getFieldValue('CONTENT');
    return `border-color : ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.BorderColorPicker] = (
    block,
    generator,
  ) => {
    const classText = block.getFieldValue('CONTENT');
    return `border-color : ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.BorderRadius] = (
    block,
    generator,
  ) => {
    const classText = block.getFieldValue('CONTENT');
    return `border-radius : ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.BackgroundColor] = (
    block,
    generator,
  ) => {
    const classText = block.getFieldValue('CONTENT');
    return `background-color : ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.BackgroundColorPicker] = (
    block,
    generator,
  ) => {
    const classText = block.getFieldValue('CONTENT');
    return `background-color : ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.BackgroundImage] = (
    block,
    generator,
  ) => {
    const classText = block.getFieldValue('CONTENT');
    return `background-image : ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.BackgroundSize] = (
    block,
    generator,
  ) => {
    const classText = block.getFieldValue('CONTENT');
    return `background-size : ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.BackgroundRepeat] = (
    block,
    generator,
  ) => {
    const classText = block.getFieldValue('CONTENT');
    return `background-repeat : ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.BackgroundPosition] = (
    block,
    generator,
  ) => {
    const classText = block.getFieldValue('CONTENT');
    return `background-position : ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.BackgroundAttachment] = (
    block,
    generator,
  ) => {
    const classText = block.getFieldValue('CONTENT');
    return `background-attachment : ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.Display] = (block, generator) => {
    const classText = block.getFieldValue('CONTENT');
    return `display : ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.Position] = (block, generator) => {
    const classText = block.getFieldValue('CONTENT');
    return `position : ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.Top] = (block, generator) => {
    const classText = block.getFieldValue('CONTENT');
    return `top : ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.Bottom] = (block, generator) => {
    const classText = block.getFieldValue('CONTENT');
    return `bottom : ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.Left] = (block, generator) => {
    const classText = block.getFieldValue('CONTENT');
    return `left : ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.Right] = (block, generator) => {
    const classText = block.getFieldValue('CONTENT');
    return `right : ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.ZIndex] = (block, generator) => {
    const classText = block.getFieldValue('CONTENT');
    return `z-index : ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.Flex] = (block, generator) => {
    const classText = block.getFieldValue('CONTENT');
    return `flex : ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.FlexDirection] = (
    block,
    generator,
  ) => {
    const classText = block.getFieldValue('CONTENT');
    return `flex-direction : ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.JustifyContent] = (
    block,
    generator,
  ) => {
    const classText = block.getFieldValue('CONTENT');
    return `justify-content : ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.AlignItems] = (
    block,
    generator,
  ) => {
    const classText = block.getFieldValue('CONTENT');
    return `align-items : ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.GridTemplateColumns] = (
    block,
    generator,
  ) => {
    const classText = block.getFieldValue('CONTENT');
    return `grid-template-columns : ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.GridTemplateRows] = (
    block,
    generator,
  ) => {
    const classText = block.getFieldValue('CONTENT');
    return `grid-template-rows : ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.GridGap] = (block, generator) => {
    const classText = block.getFieldValue('CONTENT');
    return `grid-gap : ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.Transition] = (
    block,
    generator,
  ) => {
    const classText = block.getFieldValue('CONTENT');
    return `transition : ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.TransitionProperty] = (
    block,
    generator,
  ) => {
    const classText = block.getFieldValue('CONTENT');
    return `transition-property : ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.TransitionDuration] = (
    block,
    generator,
  ) => {
    const classText = block.getFieldValue('CONTENT');
    return `transition-duration : ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.TransitionTimingFunction] = (
    block,
    generator,
  ) => {
    const classText = block.getFieldValue('CONTENT');
    return `transition-timing-function : ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.Animation] = (
    block,
    generator,
  ) => {
    const classText = block.getFieldValue('CONTENT');
    return `animation : ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.AnimationName] = (
    block,
    generator,
  ) => {
    const classText = block.getFieldValue('CONTENT');
    return `animation-name : ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.AnimationDuration] = (
    block,
    generator,
  ) => {
    const classText = block.getFieldValue('CONTENT');
    return `animation-duration : ${classText};`;
  };
  javascriptGenerator.forBlock[CSSBlockTypes.AnimationTimingFunction] = (
    block,
    generator,
  ) => {
    const classText = block.getFieldValue('CONTENT');
    return `animation-timing-function : ${classText};`;
  };
};

export default registerGenerators;
