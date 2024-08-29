import { Html } from 'next/document';
import { HTMLBlockTypes } from './types';

/*
type : HTMLBlockTypes.블록 타입
message0 : 블록의 텍스트  (%1, %2... 변수 이용시 사용)
args0 : 블록의 인자들 [{ type : 타입, name : 변수 이름 }]
colour : 블록 색상
previousStatement : 이전 블록의 종류 (null : 없음) -> 블록을 연결할 수 있는지 여부 (단순히 아무거나 연경 가능하면 null)
nextStatement : 다음 블록의 종류 (null : 없음) -> 블록을 연결할 수 있는지 여부 (단순히 아무거나 연경 가능하면 null)
category:'html' -> 블록 카테고리
output: 'Number' -> 연결 블록 타입

---
블록 인자 타입
- field_input : 텍스트 입력
- input_statement : 블록 입력
- field_dropdown : 드롭다운
  - options : 드롭다운 옵션들 [['옵션1', 'OPTION1'], ['옵션2', 'OPTION2']]
- field_checkbox : 체크박스
- field_image : 이미지
  - src : 이미지 경로, width : 이미지 너비, height : 이미지 높이, alt : 대체 텍스트
- field_number : 숫자 입력
  - value: 값 , min : 최소값, max : 최대값, precision : 소수점 자리수
- input_value : 블록 입력
  - id, class 등을 활용할 때 이용할 예정

---
참고 자료 : https://developers.google.com/blockly/guides/create-custom-blocks/fields/built-in-fields/overview?hl=ko&_gl=1*tce58i*_up*MQ..*_ga*MTYxNTg4NzI5Mi4xNzE5NDQ5NTY1*_ga_R5G2Y6GLVC*MTcxOTQ0OTU2NS4xLjEuMTcxOTQ0OTU2NS4wLjAuMA..
*/

const category = {
  default: 'html 기본 구조',
  layout: '레이아웃과 구조',
  text: '텍스트 콘텐츠',
  list: '목록',
  act: '상호작용 및 네비게이션',
  embed: '미디어와 임베디드 콘텐츠',
};
const colour = {
  default: 43.29,
  layout: 28.84,
  text: 14.27,
  list: 104.29,
  act: 143.94,
  embed: 100.8,
};
export default [
  {
    type: HTMLBlockTypes.DoctypeHTML,
    message0: `<!DOCTYPE html> \n`,
    nextStatement: null,
    category: category.default,
    colour: colour.default,
  },
  {
    type: HTMLBlockTypes.Html,
    message0: `<html lang="%1">\n%2</html>`,
    args0: [
      {
        type: 'field_dropdown',
        name: 'lang',
        options: [
          ['en', 'en'],
          ['ko', 'ko'],
        ],
      },
      {
        type: 'input_statement',
        name: 'CONTENT',
      },
    ],
    previousStatement: null,
    colour: colour.default,
    category: category.default,
  },
  {
    type: HTMLBlockTypes.Head,
    message0: `<head>\n%1</head>`,
    args0: [
      {
        type: 'input_statement',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.default,
    category: category.default,
  },
  {
    type: HTMLBlockTypes.Body,
    message0: `<body>\n%1</body>`,
    args0: [
      {
        type: 'input_statement',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.default,
    category: category.default,
  },
  {
    type: HTMLBlockTypes.Meta,
    message0: '<meta %1 />',
    args0: [
      {
        type: 'field_input',
        name: 'ATTRIBUTES',
        text: 'charset="UTF-8"',
      },
    ],
    colour: colour.default,
    previousStatement: null,
    nextStatement: null,
    category: category.default,
  },
  {
    type: HTMLBlockTypes.Title,
    message0: '<title> %1 </title>',
    args0: [
      {
        type: 'field_input',
        name: 'TITLE',
        text: 'COBLE 블록코딩',
      },
    ],
    colour: colour.default,
    previousStatement: null,
    nextStatement: null,
    category: category.default,
  },
  {
    type: HTMLBlockTypes.Style,
    message0: `<style>\n%1</style>`,
    args0: [
      {
        type: 'input_statement',
        name: 'CONTENT',
      },
    ],
    nextStatement: null,
    previousStatement: null,
    colour: colour.default,
    category: category.default,
  },
  {
    type: HTMLBlockTypes.Div,
    message0: `<div%1>\n %2</div>`,
    args0: [
      {
        type: 'input_value',
        name: 'id',
      },
      {
        type: 'input_statement',
        name: 'CONTENT',
      },
    ],
    colour: colour.layout,
    previousStatement: null,
    nextStatement: null,
    category: category.layout,
  },
  {
    type: HTMLBlockTypes.Section,
    message0: `<section%1>\n %2</section>`,
    args0: [
      {
        type: 'input_value',
        name: 'id',
      },
      {
        type: 'input_statement',
        name: 'CONTENT',
      },
    ],
    colour: colour.layout,
    previousStatement: null,
    nextStatement: null,
    category: category.layout,
  },
  {
    type: HTMLBlockTypes.Article,
    message0: `<article%1>\n %2</article>`,
    args0: [
      {
        type: 'input_value',
        name: 'id',
      },
      {
        type: 'input_statement',
        name: 'CONTENT',
      },
    ],
    colour: colour.layout,
    previousStatement: null,
    nextStatement: null,
    category: category.layout,
  },
  {
    type: HTMLBlockTypes.Header,
    message0: `<header%1>\n %2</header>`,
    args0: [
      {
        type: 'input_value',
        name: 'id',
      },
      {
        type: 'input_statement',
        name: 'CONTENT',
      },
    ],
    colour: colour.layout,
    previousStatement: null,
    nextStatement: null,
    category: category.layout,
  },
  {
    type: HTMLBlockTypes.Footer,
    message0: `<footer%1>\n %2</footer>`,
    args0: [
      {
        type: 'input_value',
        name: 'id',
      },
      {
        type: 'input_statement',
        name: 'CONTENT',
      },
    ],
    colour: colour.layout,
    previousStatement: null,
    nextStatement: null,
    category: category.layout,
  },
  {
    type: HTMLBlockTypes.Nav,
    message0: `<nav%1>\n %2</nav>`,
    args0: [
      {
        type: 'input_value',
        name: 'id',
      },
      {
        type: 'input_statement',
        name: 'CONTENT',
      },
    ],
    colour: colour.layout,
    previousStatement: null,
    nextStatement: null,
    category: category.layout,
  },
  {
    type: HTMLBlockTypes.P,
    message0: `<p %1>%2</p>`,
    args0: [
      {
        type: 'input_value',
        name: 'id',
      },
      {
        type: 'field_input',
        name: 'CONTENT',
        text: '문단',
      },
    ],
    colour: colour.text,
    previousStatement: null,
    nextStatement: null,
    category: category.text,
  },
  {
    type: HTMLBlockTypes.Blockquote,
    message0: `<blockquote%1>%2</blockquote>`,
    args0: [
      {
        type: 'input_value',
        name: 'id',
      },
      {
        type: 'field_input',
        name: 'CONTENT',
        text: '인용문',
      },
    ],
    colour: colour.text,
    previousStatement: null,
    nextStatement: null,
    category: category.text,
  },
  {
    type: HTMLBlockTypes.Hr,
    message0: `<hr%1/>`,
    args0: [
      {
        type: 'input_value',
        name: 'id',
      },
    ],
    colour: colour.text,
    previousStatement: null,
    nextStatement: null,
    category: category.text,
  },
  {
    type: HTMLBlockTypes.Ul,
    message0: `<ul%1>\n %2</ul>`,
    args0: [
      {
        type: 'input_value',
        name: 'id',
      },
      {
        type: 'input_statement',
        name: 'CONTENT',
      },
    ],
    colour: colour.list,
    previousStatement: null,
    nextStatement: null,
    category: category.list,
  },
  {
    type: HTMLBlockTypes.Ol,
    message0: `<ol%1>\n %2</ol>`,
    args0: [
      {
        type: 'input_value',
        name: 'id',
      },
      {
        type: 'input_statement',
        name: 'CONTENT',
      },
    ],
    colour: colour.list,
    previousStatement: null,
    nextStatement: null,
    category: category.list,
  },
  {
    type: HTMLBlockTypes.Li,
    message0: `<li%1>\n %2</li>`,
    args0: [
      {
        type: 'input_value',
        name: 'id',
      },
      {
        type: 'input_statement',
        name: 'CONTENT',
      },
    ],
    colour: colour.list,
    previousStatement: null,
    nextStatement: null,
    category: category.list,
  },
  {
    type: HTMLBlockTypes.Dl,
    message0: `<dl%1>\n %2</dl>`,
    args0: [
      {
        type: 'input_value',
        name: 'id',
      },
      {
        type: 'input_statement',
        name: 'CONTENT',
      },
    ],
    colour: colour.list,
    previousStatement: null,
    nextStatement: null,
    category: category.list,
  },
  {
    type: HTMLBlockTypes.Dt,
    message0: `<dt%1>\n %2</dt>`,
    args0: [
      {
        type: 'input_value',
        name: 'id',
      },
      {
        type: 'input_statement',
        name: 'CONTENT',
      },
    ],
    colour: colour.list,
    previousStatement: null,
    nextStatement: null,
    category: category.list,
  },
  {
    type: HTMLBlockTypes.Dd,
    message0: `<dd%1>\n %2</dd>`,
    args0: [
      {
        type: 'input_value',
        name: 'id',
      },
      {
        type: 'input_statement',
        name: 'CONTENT',
      },
    ],
    colour: colour.list,
    previousStatement: null,
    nextStatement: null,
    category: category.list,
  },
  {
    type: HTMLBlockTypes.A,
    message0: `<a href="%1" %2>\n %3</a>`,
    args0: [
      {
        type: 'field_input',
        name: 'HREF',
        text: 'https://github.com',
      },
      {
        type: 'input_value',
        name: 'id',
      },
      {
        type: 'input_statement',
        name: 'CONTENT',
      },
    ],
    colour: colour.act,
    previousStatement: null,
    nextStatement: null,
    category: category.act,
  },
  {
    type: HTMLBlockTypes.Button,
    message0: `<button%1>\n %2</button>`,
    args0: [
      {
        type: 'input_value',
        name: 'id',
      },
      {
        type: 'input_statement',
        name: 'CONTENT',
      },
    ],
    colour: colour.act,
    previousStatement: null,
    nextStatement: null,
    category: category.act,
  },
  {
    type: HTMLBlockTypes.Form,
    message0: `<form%1>\n %2</form>`,
    args0: [
      {
        type: 'input_value',
        name: 'id',
      },
      {
        type: 'input_statement',
        name: 'CONTENT',
      },
    ],
    colour: colour.act,
    previousStatement: null,
    nextStatement: null,
    category: category.act,
  },
  {
    type: HTMLBlockTypes.Fieldset,
    message0: `<fieldset%1>\n %2</fieldset>`,
    args0: [
      {
        type: 'input_value',
        name: 'id',
      },
      {
        type: 'input_statement',
        name: 'CONTENT',
      },
    ],
    colour: colour.act,
    previousStatement: null,
    nextStatement: null,
    category: category.act,
  },
  {
    type: HTMLBlockTypes.Legend,
    message0: `<legend%1>\n %2</legend>`,
    args0: [
      {
        type: 'input_value',
        name: 'id',
      },
      {
        type: 'input_statement',
        name: 'CONTENT',
      },
    ],
    colour: colour.act,
    previousStatement: null,
    nextStatement: null,
    category: category.act,
  },
  {
    type: HTMLBlockTypes.Label,
    message0: `<label%1>%2</label>`,
    args0: [
      {
        type: 'input_value',
        name: 'id',
      },
      {
        type: 'field_input',
        name: 'LABEL',
        text: '라벨',
      },
    ],
    colour: colour.act,
    previousStatement: null,
    nextStatement: null,
    category: category.act,
  },
  {
    type: HTMLBlockTypes.Input,
    message0: `<input%1 />`,
    args0: [
      {
        type: 'input_value',
        name: 'id',
      },
    ],
    colour: colour.act,
    previousStatement: null,
    nextStatement: null,
    category: category.act,
  },
  {
    type: HTMLBlockTypes.Textarea,
    message0: `<textarea %1/>`,
    args0: [
      {
        type: 'input_value',
        name: 'id',
      },
    ],
    colour: colour.act,
    previousStatement: null,
    nextStatement: null,
    category: category.act,
  },
  {
    type: HTMLBlockTypes.Select,
    message0: `<select%1>\n %2</select>`,
    args0: [
      {
        type: 'input_value',
        name: 'id',
      },
      {
        type: 'input_statement',
        name: 'CONTENT',
      },
    ],
    colour: colour.act,
    previousStatement: null,
    nextStatement: null,
    category: category.act,
  },
  {
    type: HTMLBlockTypes.Option,
    message0: `<option%1>\n%2</option>`,
    args0: [
      {
        type: 'input_value',
        name: 'id',
      },
      {
        type: 'input_statement',
        name: 'CONTENT',
      },
    ],
    colour: colour.act,
    previousStatement: null,
    nextStatement: null,
    category: category.act,
  },
  {
    type: HTMLBlockTypes.Video,
    message0: `<video%1>\n%2</video>`,
    args0: [
      {
        type: 'input_value',
        name: 'id',
      },
      {
        type: 'input_statement',
        name: 'CONTENT',
      },
    ],
    colour: colour.embed,
    previousStatement: null,
    nextStatement: null,
    category: category.embed,
  },
  {
    type: HTMLBlockTypes.Source,
    message0: `<source src="%1" %2/>`,
    args0: [
      {
        type: 'field_input',
        name: 'SRC',
        text: 'url',
      },
      {
        type: 'input_value',
        name: 'id',
      },
    ],
    colour: colour.embed,
    previousStatement: null,
    nextStatement: null,
    category: category.embed,
  },
  {
    type: HTMLBlockTypes.Audio,
    message0: `<audio %1>\n%2</audio>`,
    args0: [
      {
        type: 'input_value',
        name: 'id',
      },
      {
        type: 'input_statement',
        name: 'CONTENT',
      },
    ],
    colour: colour.embed,
    previousStatement: null,
    nextStatement: null,
    category: category.embed,
  },
  {
    type: HTMLBlockTypes.Img,
    message0: `<img src="%1" %2/>`,
    args0: [
      {
        type: 'field_input',
        name: 'SRC',
        text: 'https://placehold.co/100',
      },
      {
        type: 'input_value',
        name: 'id',
      },
    ],
    colour: colour.embed,
    previousStatement: null,
    nextStatement: null,
    category: category.embed,
  },
];
