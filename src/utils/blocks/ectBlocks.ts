import { EctBlockTypes } from './types';

const category = {
  class: '클래스, 아이디',
  text: '텍스트',
};
const colour = {
  class: 234,
  text: 43234,
};

export default [
  {
    type: EctBlockTypes.Class,
    message0: `class="%1" %2`,
    args0: [
      {
        type: 'field_input',
        name: 'CLASS',
        text: '',
      },
      {
        type: 'input_value',
        name: 'NEXT',
      },
    ],
    output: null,
    colour: colour.class,
    category: category.class,
  },
  {
    type: EctBlockTypes.Id,
    message0: `id="%1" %2`,
    args0: [
      {
        type: 'field_input',
        name: 'ID',
        text: '',
      },
      {
        type: 'input_value',
        name: 'NEXT',
      },
    ],
    output: null,
    colour: colour.class,
    category: category.class,
  },
  {
    type: EctBlockTypes.ClassCss,
    message0: `.%1\n%2`,
    args0: [
      {
        type: 'field_input',
        name: 'CLASS',
        text: '',
      },
      {
        type: 'input_statement',
        name: 'CONTENT',
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: colour.class,
    category: category.class,
  },
  {
    type: EctBlockTypes.IdCss,
    message0: `#%1\n%2`,
    args0: [
      {
        type: 'field_input',
        name: 'CLASS',
        text: '',
      },
      {
        type: 'input_statement',
        name: 'CONTENT',
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: colour.class,
    category: category.class,
  },
  {
    type: EctBlockTypes.Css,
    message0: `%1\n%2`,
    args0: [
      {
        type: 'field_input',
        name: 'ID',
        text: '',
      },
      {
        type: 'input_statement',
        name: 'CONTENT',
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: colour.class,
    category: category.class,
  },
  {
    type: EctBlockTypes.TextBlock,
    message0: `%1`,
    args0: [
      {
        type: 'field_input',
        name: 'CONTENT',
        text: '텍스트',
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: colour.text,
    category: category.text,
  },
];
