import { CSSBlockTypes } from './types';
import { registerFieldColour } from '@blockly/field-colour';

const category = {
  text: '텍스트 스타일링',
  box: '박스 모델',
  layout: '레이아웃',
  color: '색상 및 배경',
  animation: '애니메이션 및 트랜지션',
};
const colour = {
  text: 194.4,
  box: 216,
  layout: 320.48,
  color: 295.2,
  animation: 280.82,
};

registerFieldColour();

export default [
  {
    type: CSSBlockTypes.FontFamily,
    message0: `font-family: %1`,
    args0: [
      {
        type: 'field_input',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.text,
    category: category.text,
  },
  {
    type: CSSBlockTypes.FontSize,
    message0: `font-size: %1`,
    args0: [
      {
        type: 'field_input',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.text,
    category: category.text,
  },
  {
    type: CSSBlockTypes.FontWeight,
    message0: `font-weight: %1`,
    args0: [
      {
        type: 'field_input',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.text,
    category: category.text,
  },
  {
    type: CSSBlockTypes.FontStyle,
    message0: `font-style: %1`,
    args0: [
      {
        type: 'field_input',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.text,
    category: category.text,
  },
  {
    type: CSSBlockTypes.TextAlign,
    message0: `text-align: %1`,
    args0: [
      {
        type: 'field_input',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.text,
    category: category.text,
  },
  {
    type: CSSBlockTypes.TextDecoration,
    message0: `text-decoration: %1`,
    args0: [
      {
        type: 'field_input',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.text,
    category: category.text,
  },
  {
    type: CSSBlockTypes.TextTransform,
    message0: `text-transform: %1`,
    args0: [
      {
        type: 'field_input',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.text,
    category: category.text,
  },
  {
    type: CSSBlockTypes.LineHeight,
    message0: `line-height: %1`,
    args0: [
      {
        type: 'field_input',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.text,
    category: category.text,
  },
  {
    type: CSSBlockTypes.LetterSpacing,
    message0: `letter-spacing: %1`,
    args0: [
      {
        type: 'field_input',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.text,
    category: category.text,
  },
  {
    type: CSSBlockTypes.WordSpacing,
    message0: `word-spacing: %1`,
    args0: [
      {
        type: 'field_input',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.text,
    category: category.text,
  },
  {
    type: CSSBlockTypes.Color,
    message0: `color: %1`,
    args0: [
      {
        type: 'field_input',
        name: 'CONTENT',
        text: '#ffffff',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.text,
    category: category.text,
  },
  {
    type: CSSBlockTypes.ColorPicker,
    message0: `color: %1`,
    args0: [
      {
        type: 'field_colour',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.text,
    category: category.text,
  },
  {
    type: CSSBlockTypes.Width,
    message0: `width: %1`,
    args0: [
      {
        type: 'field_input',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.box,
    category: category.box,
  },
  {
    type: CSSBlockTypes.Height,
    message0: `height: %1`,
    args0: [
      {
        type: 'field_input',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.box,
    category: category.box,
  },
  {
    type: CSSBlockTypes.Margin,
    message0: `margin: %1`,
    args0: [
      {
        type: 'field_input',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.box,
    category: category.box,
  },
  {
    type: CSSBlockTypes.Padding,
    message0: `padding: %1`,
    args0: [
      {
        type: 'field_input',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.box,
    category: category.box,
  },
  {
    type: CSSBlockTypes.Border,
    message0: `border: %1`,
    args0: [
      {
        type: 'field_input',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.box,
    category: category.box,
  },
  {
    type: CSSBlockTypes.BoxSizing,
    message0: `box-sizing: %1`,
    args0: [
      {
        type: 'field_input',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.box,
    category: category.box,
  },
  {
    type: CSSBlockTypes.BorderWidth,
    message0: `border-width: %1`,
    args0: [
      {
        type: 'field_input',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.box,
    category: category.box,
  },
  {
    type: CSSBlockTypes.BorderStyle,
    message0: `border-style: %1`,
    args0: [
      {
        type: 'field_input',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.box,
    category: category.box,
  },
  {
    type: CSSBlockTypes.BorderColor,
    message0: `border-color: %1`,
    args0: [
      {
        type: 'field_input',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.box,
    category: category.box,
  },
  {
    type: CSSBlockTypes.BorderColorPicker,
    message0: `border-color: %1`,
    args0: [
      {
        type: 'field_colour',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.box,
    category: category.box,
  },
  {
    type: CSSBlockTypes.BorderRadius,
    message0: `border-radius: %1`,
    args0: [
      {
        type: 'field_input',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.box,
    category: category.box,
  },
  {
    type: CSSBlockTypes.BackgroundColor,
    message0: `background-color: %1`,
    args0: [
      {
        type: 'field_input',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.color,
    category: category.color,
  },
  {
    type: CSSBlockTypes.BackgroundColorPicker,
    message0: `background-color: %1`,
    args0: [
      {
        type: 'field_colour',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.color,
    category: category.color,
  },
  {
    type: CSSBlockTypes.BackgroundImage,
    message0: `background-image: %1`,
    args0: [
      {
        type: 'field_input',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.color,
    category: category.color,
  },
  {
    type: CSSBlockTypes.BackgroundSize,
    message0: `background-size: %1`,
    args0: [
      {
        type: 'field_input',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.color,
    category: category.color,
  },
  {
    type: CSSBlockTypes.BackgroundRepeat,
    message0: `background-repeat: %1`,
    args0: [
      {
        type: 'field_input',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.color,
    category: category.color,
  },
  {
    type: CSSBlockTypes.BackgroundPosition,
    message0: `background-position: %1`,
    args0: [
      {
        type: 'field_input',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.color,
    category: category.color,
  },
  {
    type: CSSBlockTypes.BackgroundAttachment,
    message0: `background-attachment: %1`,
    args0: [
      {
        type: 'field_input',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.color,
    category: category.color,
  },
  {
    type: CSSBlockTypes.Display,
    message0: `display: %1`,
    args0: [
      {
        type: 'field_input',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.layout,
    category: category.layout,
  },
  {
    type: CSSBlockTypes.Position,
    message0: `position: %1`,
    args0: [
      {
        type: 'field_input',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.layout,
    category: category.layout,
  },
  {
    type: CSSBlockTypes.Top,
    message0: `top: %1`,
    args0: [
      {
        type: 'field_input',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.layout,
    category: category.layout,
  },
  {
    type: CSSBlockTypes.Bottom,
    message0: `bottom: %1`,
    args0: [
      {
        type: 'field_input',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.layout,
    category: category.layout,
  },
  {
    type: CSSBlockTypes.Left,
    message0: `left: %1`,
    args0: [
      {
        type: 'field_input',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.layout,
    category: category.layout,
  },
  {
    type: CSSBlockTypes.Right,
    message0: `right: %1`,
    args0: [
      {
        type: 'field_input',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.layout,
    category: category.layout,
  },
  {
    type: CSSBlockTypes.ZIndex,
    message0: `z-index: %1`,
    args0: [
      {
        type: 'field_input',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.layout,
    category: category.layout,
  },
  {
    type: CSSBlockTypes.Flex,
    message0: `flex: %1`,
    args0: [
      {
        type: 'field_input',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.layout,
    category: category.layout,
  },
  {
    type: CSSBlockTypes.FlexDirection,
    message0: `flex-direction: %1`,
    args0: [
      {
        type: 'field_input',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.layout,
    category: category.layout,
  },
  {
    type: CSSBlockTypes.JustifyContent,
    message0: `justify-content: %1`,
    args0: [
      {
        type: 'field_input',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.layout,
    category: category.layout,
  },
  {
    type: CSSBlockTypes.AlignItems,
    message0: `align-items: %1`,
    args0: [
      {
        type: 'field_input',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.layout,
    category: category.layout,
  },
  {
    type: CSSBlockTypes.GridTemplateColumns,
    message0: `grid-template-columns: %1`,
    args0: [
      {
        type: 'field_input',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.layout,
    category: category.layout,
  },
  {
    type: CSSBlockTypes.GridTemplateRows,
    message0: `grid-template-rows: %1`,
    args0: [
      {
        type: 'field_input',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.layout,
    category: category.layout,
  },
  {
    type: CSSBlockTypes.GridGap,
    message0: `grid-gap: %1`,
    args0: [
      {
        type: 'field_input',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.layout,
    category: category.layout,
  },
  {
    type: CSSBlockTypes.Transition,
    message0: `transition: %1`,
    args0: [
      {
        type: 'field_input',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.animation,
    category: category.animation,
  },
  {
    type: CSSBlockTypes.TransitionProperty,
    message0: `transition-property: %1`,
    args0: [
      {
        type: 'field_input',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.animation,
    category: category.animation,
  },
  {
    type: CSSBlockTypes.TransitionDuration,
    message0: `transition-duration: %1`,
    args0: [
      {
        type: 'field_input',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.animation,
    category: category.animation,
  },
  {
    type: CSSBlockTypes.TransitionTimingFunction,
    message0: `transition-timing-function: %1`,
    args0: [
      {
        type: 'field_input',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.animation,
    category: category.animation,
  },
  {
    type: CSSBlockTypes.Animation,
    message0: `animation: %1`,
    args0: [
      {
        type: 'field_input',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.animation,
    category: category.animation,
  },
  {
    type: CSSBlockTypes.AnimationName,
    message0: `animation-name: %1`,
    args0: [
      {
        type: 'field_input',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.animation,
    category: category.animation,
  },
  {
    type: CSSBlockTypes.AnimationDuration,
    message0: `animation-duration: %1`,
    args0: [
      {
        type: 'field_input',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.animation,
    category: category.animation,
  },
  {
    type: CSSBlockTypes.AnimationTimingFunction,
    message0: `animation-timing-function: %1`,
    args0: [
      {
        type: 'field_input',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.animation,
    category: category.animation,
  },
];
