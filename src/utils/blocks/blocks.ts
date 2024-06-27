import { HTMLBlockTypes } from './types';
// {
//   type: BlockTypes.Head,
//   message0: 'Head %1',
//   args0: [{ type: 'input_statement', name: 'CONTENT' }],
//   colour: 20,
//   previousStatement: null,
//   nextStatement: null,
// },

export default [
  {
    type: HTMLBlockTypes.Html,
    message0: 'HTML %1 %2',
    args0: [
      { type: 'field_input', name: 'TEXT' },
      { type: 'field_input', name: 'TEXT2' },
    ],
    colour: 0,
    previousStatement: null,
    nextStatement: null,
  },
];
