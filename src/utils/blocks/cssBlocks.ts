import { CSSBlockTypes } from './types';

export default [
  // CSS Block
  {
    type: CSSBlockTypes.Display,
    message0: 'display %1',
    args0: [
      {
        type: 'field_dropdown',
        name: 'VALUE',
        options: [
          ['block', 'block'],
          ['inline', 'inline'],
          ['flex', 'flex'],
          ['grid', 'grid'],
          ['none', 'none'],
        ],
      },
    ],
    colour: 200,
    previousStatement: CSSBlockTypes.Styles,
    nextStatement: CSSBlockTypes.Styles,
    category: '디스플레이',
  },
  {
    type: CSSBlockTypes.Position,
    message0: 'position %1',
    args0: [
      {
        type: 'field_dropdown',
        name: 'VALUE',
        options: [
          ['static', 'static'],
          ['relative', 'relative'],
          ['absolute', 'absolute'],
          ['fixed', 'fixed'],
          ['sticky', 'sticky'],
        ],
      },
    ],
    colour: 200,
    previousStatement: CSSBlockTypes.Styles,
    nextStatement: CSSBlockTypes.Styles,
    category: '위치',
  },
  {
    type: CSSBlockTypes.Top,
    message0: 'top %1',
    args0: [
      {
        type: 'field_input',
        name: 'VALUE',
        text: '0px',
      },
    ],
    colour: 200,
    previousStatement: CSSBlockTypes.Position,
    nextStatement: CSSBlockTypes.Position,
    category: '위치',
  },
  {
    type: CSSBlockTypes.Right,
    message0: 'right %1',
    args0: [
      {
        type: 'field_input',
        name: 'VALUE',
        text: '0px',
      },
    ],
    colour: 200,
    previousStatement: CSSBlockTypes.Position,
    nextStatement: CSSBlockTypes.Position,
    category: '위치',
  },
  {
    type: CSSBlockTypes.Bottom,
    message0: 'bottom %1',
    args0: [
      {
        type: 'field_input',
        name: 'VALUE',
        text: '0px',
      },
    ],
    colour: 200,
    previousStatement: CSSBlockTypes.Position,
    nextStatement: CSSBlockTypes.Position,
    category: '위치',
  },
  {
    type: CSSBlockTypes.Left,
    message0: 'left %1',
    args0: [
      {
        type: 'field_input',
        name: 'VALUE',
        text: '0px',
      },
    ],
    colour: 200,
    previousStatement: CSSBlockTypes.Position,
    nextStatement: CSSBlockTypes.Position,
    category: '위치',
  },
  {
    type: CSSBlockTypes.ZIndex,
    message0: 'z-index %1',
    args0: [
      {
        type: 'field_input',
        name: 'VALUE',
        text: 'auto',
      },
    ],
    colour: 200,
    previousStatement: CSSBlockTypes.Position,
    nextStatement: CSSBlockTypes.Position,
    category: '위치',
  },
  {
    type: CSSBlockTypes.Flex,
    message0: 'flex %1',
    args0: [
      {
        type: 'field_input',
        name: 'VALUE',
        text: '1',
      },
    ],
    colour: 200,
    previousStatement: CSSBlockTypes.Display,
    nextStatement: CSSBlockTypes.Display,
    category: 'Flexbox',
  },
  {
    type: CSSBlockTypes.FlexDirection,
    message0: 'flex-direction %1',
    args0: [
      {
        type: 'field_dropdown',
        name: 'VALUE',
        options: [
          ['row', 'row'],
          ['row-reverse', 'row-reverse'],
          ['column', 'column'],
          ['column-reverse', 'column-reverse'],
        ],
      },
    ],
    colour: 200,
    previousStatement: CSSBlockTypes.Display,
    nextStatement: CSSBlockTypes.Display,
    category: 'Flexbox',
  },
  {
    type: CSSBlockTypes.JustifyContent,
    message0: 'justify-content %1',
    args0: [
      {
        type: 'field_dropdown',
        name: 'VALUE',
        options: [
          ['flex-start', 'flex-start'],
          ['flex-end', 'flex-end'],
          ['center', 'center'],
          ['space-between', 'space-between'],
          ['space-around', 'space-around'],
        ],
      },
    ],
    colour: 200,
    previousStatement: CSSBlockTypes.Display,
    nextStatement: CSSBlockTypes.Display,
    category: 'Flexbox',
  },
  {
    type: CSSBlockTypes.AlignItems,
    message0: 'align-items %1',
    args0: [
      {
        type: 'field_dropdown',
        name: 'VALUE',
        options: [
          ['flex-start', 'flex-start'],
          ['flex-end', 'flex-end'],
          ['center', 'center'],
          ['baseline', 'baseline'],
          ['stretch', 'stretch'],
        ],
      },
    ],
    colour: 200,
    previousStatement: CSSBlockTypes.Display,
    nextStatement: CSSBlockTypes.Display,
    category: 'Flexbox',
  },
  {
    type: CSSBlockTypes.GridTemplateColumns,
    message0: 'grid-template-columns %1',
    args0: [
      {
        type: 'field_input',
        name: 'VALUE',
        text: '1fr 1fr',
      },
    ],
    colour: 200,
    previousStatement: CSSBlockTypes.Display,
    nextStatement: CSSBlockTypes.Display,
    category: 'Grid',
  },
  {
    type: CSSBlockTypes.GridTemplateRows,
    message0: 'grid-template-rows %1',
    args0: [
      {
        type: 'field_input',
        name: 'VALUE',
        text: '1fr 1fr',
      },
    ],
    colour: 200,
    previousStatement: CSSBlockTypes.Display,
    nextStatement: CSSBlockTypes.Display,
    category: 'Grid',
  },
  {
    type: CSSBlockTypes.GridGap,
    message0: 'grid-gap %1',
    args0: [
      {
        type: 'field_input',
        name: 'VALUE',
        text: '10px',
      },
    ],
    colour: 200,
    previousStatement: CSSBlockTypes.Display,
    nextStatement: CSSBlockTypes.Display,
    category: 'Grid',
  },
  {
    type: CSSBlockTypes.Width,
    message0: 'width %1',
    args0: [
      {
        type: 'field_input',
        name: 'VALUE',
        text: 'auto',
      },
    ],
    colour: 200,
    previousStatement: CSSBlockTypes.Styles,
    nextStatement: CSSBlockTypes.Styles,
    category: '크기',
  },
  {
    type: CSSBlockTypes.Height,
    message0: 'height %1',
    args0: [
      {
        type: 'field_input',
        name: 'VALUE',
        text: 'auto',
      },
    ],
    colour: 200,
    previousStatement: CSSBlockTypes.Styles,
    nextStatement: CSSBlockTypes.Styles,
    category: '크기',
  },
  {
    type: CSSBlockTypes.Margin,
    message0: 'margin %1',
    args0: [
      {
        type: 'field_input',
        name: 'VALUE',
        text: '0',
      },
    ],
    colour: 200,
    previousStatement: CSSBlockTypes.Styles,
    nextStatement: CSSBlockTypes.Styles,
    category: '여백',
  },
  {
    type: CSSBlockTypes.Padding,
    message0: 'padding %1',
    args0: [
      {
        type: 'field_input',
        name: 'VALUE',
        text: '0',
      },
    ],
    colour: 200,
    previousStatement: CSSBlockTypes.Styles,
    nextStatement: CSSBlockTypes.Styles,
    category: '여백',
  },
  {
    type: CSSBlockTypes.Border,
    message0: 'border %1 %2 %3 %4',
    args0: [
      {
        type: 'field_input',
        name: 'WIDTH',
        text: '1px',
      },
      {
        type: 'field_dropdown',
        name: 'STYLE',
        options: [
          ['solid', 'solid'],
          ['dashed', 'dashed'],
          ['dotted', 'dotted'],
          ['double', 'double'],
          ['groove', 'groove'],
          ['ridge', 'ridge'],
          ['inset', 'inset'],
          ['outset', 'outset'],
          ['none', 'none'],
          ['hidden', 'hidden'],
        ],
      },
      {
        type: 'field_input',
        name: 'COLOR',
        text: 'black',
      },
    ],
    colour: 200,
    previousStatement: CSSBlockTypes.Styles,
    nextStatement: CSSBlockTypes.Styles,
    category: '테두리',
  },
  {
    type: CSSBlockTypes.BoxSizing,
    message0: 'box-sizing %1',
    args0: [
      {
        type: 'field_dropdown',
        name: 'VALUE',
        options: [
          ['content-box', 'content-box'],
          ['border-box', 'border-box'],
        ],
      },
    ],
    colour: 200,
    previousStatement: CSSBlockTypes.Styles,
    nextStatement: CSSBlockTypes.Styles,
    category: '테두리',
  },
  {
    type: CSSBlockTypes.BorderWidth,
    message0: 'border-width %1',
    args0: [
      {
        type: 'field_input',
        name: 'VALUE',
        text: '1px',
      },
    ],
    colour: 200,
    previousStatement: CSSBlockTypes.Border,
    nextStatement: CSSBlockTypes.Border,
    category: '테두리',
  },
  {
    type: CSSBlockTypes.BorderStyle,
    message0: 'border-style %1',
    args0: [
      {
        type: 'field_dropdown',
        name: 'VALUE',
        options: [
          ['solid', 'solid'],
          ['dashed', 'dashed'],
          ['dotted', 'dotted'],
          ['double', 'double'],
          ['groove', 'groove'],
          ['ridge', 'ridge'],
          ['inset', 'inset'],
          ['outset', 'outset'],
          ['none', 'none'],
          ['hidden', 'hidden'],
        ],
      },
    ],
    colour: 200,
    previousStatement: CSSBlockTypes.Border,
    nextStatement: CSSBlockTypes.Border,
    category: '테두리',
  },
  {
    type: CSSBlockTypes.BorderColor,
    message0: 'border-color %1',
    args0: [
      {
        type: 'field_input',
        name: 'VALUE',
        text: 'black',
      },
    ],
    colour: 200,
    previousStatement: CSSBlockTypes.Border,
    nextStatement: CSSBlockTypes.Border,
    category: '테두리',
  },
  {
    type: CSSBlockTypes.BorderRadius,
    message0: 'border-radius %1',
    args0: [
      {
        type: 'field_input',
        name: 'VALUE',
        text: '0px',
      },
    ],
    colour: 200,
    previousStatement: CSSBlockTypes.Border,
    nextStatement: CSSBlockTypes.Border,
    category: '테두리',
  },
];
