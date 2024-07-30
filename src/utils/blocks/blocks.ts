import { HTMLBlockTypes } from './types';
import { CSSBlockTypes } from './types';

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

export default [
  {
    type: HTMLBlockTypes.Html,
    message0: 'html %1',
    args0: [
      {
        type: 'input_statement',
        name: 'CONTENT',
      },
    ],
    colour: 230,
    previousStatement: null,
    nextStatement: null,
    category: 'html 기본 구조',
  },
  {
    type: HTMLBlockTypes.Head,
    message0: 'head %1',
    args0: [
      {
        type: 'input_statement',
        name: 'CONTENT',
      },
    ],
    colour: 230,
    previousStatement: 'html',
    nextStatement: 'html',
    category: 'html 기본 구조',
  },
  {
    type: HTMLBlockTypes.Meta,
    message0: 'meta %1',
    args0: [
      {
        type: 'field_input',
        name: 'ATTRIBUTES',
        text: 'charset="UTF-8"',
      },
    ],
    colour: 230,
    previousStatement: 'head',
    nextStatement: 'head',
    category: 'html 기본 구조',
  },
  {
    type: HTMLBlockTypes.Title,
    message0: 'title %1',
    args0: [
      {
        type: 'field_input',
        name: 'TITLE',
        text: 'Document Title',
      },
    ],
    colour: 230,
    previousStatement: 'head',
    nextStatement: 'head',
    category: 'html 기본 구조',
  },
  {
    type: HTMLBlockTypes.Link,
    message0: 'link %1',
    args0: [
      {
        type: 'field_input',
        name: 'ATTRIBUTES',
        text: 'rel="stylesheet" href="style.css"',
      },
    ],
    colour: 230,
    previousStatement: 'head',
    nextStatement: 'head',
    category: 'html 기본 구조',
  },
  {
    type: HTMLBlockTypes.Body,
    message0: 'body %1',
    args0: [
      {
        type: 'input_statement',
        name: 'CONTENT',
      },
    ],
    colour: 230,
    previousStatement: 'html',
    nextStatement: null,
    category: 'html 기본 구조',
  },
  {
    type: HTMLBlockTypes.Div,
    message0: 'div %1',
    args0: [
      {
        type: 'input_statement',
        name: 'CONTENT',
      },
    ],
    colour: 120,
    previousStatement: 'body',
    nextStatement: 'body',
    category: '레이아웃과 구조 태그',
  },
  {
    type: HTMLBlockTypes.Section,
    message0: 'section %1',
    args0: [
      {
        type: 'input_statement',
        name: 'CONTENT',
      },
    ],
    colour: 120,
    previousStatement: 'body',
    nextStatement: 'body',
    category: '레이아웃과 구조 태그',
  },
  {
    type: HTMLBlockTypes.Article,
    message0: 'article %1',
    args0: [
      {
        type: 'input_statement',
        name: 'CONTENT',
      },
    ],
    colour: 120,
    previousStatement: 'body',
    nextStatement: 'body',
    category: '레이아웃과 구조 태그',
  },
  {
    type: HTMLBlockTypes.Header,
    message0: 'header %1',
    args0: [
      {
        type: 'input_statement',
        name: 'CONTENT',
      },
    ],
    colour: 120,
    previousStatement: 'body',
    nextStatement: 'body',
    category: '레이아웃과 구조 태그',
  },
  {
    type: HTMLBlockTypes.Footer,
    message0: 'footer %1',
    args0: [
      {
        type: 'input_statement',
        name: 'CONTENT',
      },
    ],
    colour: 120,
    previousStatement: 'body',
    nextStatement: 'body',
    category: '레이아웃과 구조 태그',
  },
  {
    type: HTMLBlockTypes.Nav,
    message0: 'nav %1',
    args0: [
      {
        type: 'input_statement',
        name: 'CONTENT',
      },
    ],
    colour: 120,
    previousStatement: 'body',
    nextStatement: 'body',
    category: '레이아웃과 구조 태그',
  },
  {
    type: HTMLBlockTypes.P,
    message0: 'p %1',
    args0: [
      {
        type: 'input_statement',
        name: 'CONTENT',
      },
    ],
    colour: 160,
    previousStatement: [
      'div',
      'section',
      'article',
      'header',
      'footer',
      'nav',
      'body',
    ],
    nextStatement: [
      'div',
      'section',
      'article',
      'header',
      'footer',
      'nav',
      'body',
    ],
    category: '텍스트 콘텐츠 태그',
  },
  {
    type: HTMLBlockTypes.Pre,
    message0: 'pre %1',
    args0: [
      {
        type: 'input_statement',
        name: 'CONTENT',
      },
    ],
    colour: 160,
    previousStatement: [
      'div',
      'section',
      'article',
      'header',
      'footer',
      'nav',
      'body',
    ],
    nextStatement: [
      'div',
      'section',
      'article',
      'header',
      'footer',
      'nav',
      'body',
    ],
    category: '텍스트 콘텐츠 태그',
  },
  {
    type: HTMLBlockTypes.Hr,
    message0: 'hr',
    args0: [],
    colour: 160,
    previousStatement: [
      'div',
      'section',
      'article',
      'header',
      'footer',
      'nav',
      'body',
    ],
    nextStatement: [
      'div',
      'section',
      'article',
      'header',
      'footer',
      'nav',
      'body',
    ],
    category: '텍스트 콘텐츠 태그',
  },
  {
    type: HTMLBlockTypes.Ul,
    message0: 'ul %1',
    args0: [
      {
        type: 'input_statement',
        name: 'CONTENT',
      },
    ],
    colour: 200,
    previousStatement: [
      'div',
      'section',
      'article',
      'header',
      'footer',
      'nav',
      'body',
    ],
    nextStatement: [
      'div',
      'section',
      'article',
      'header',
      'footer',
      'nav',
      'body',
    ],
    category: '목록 태그',
  },
  {
    type: HTMLBlockTypes.Ol,
    message0: 'ol %1',
    args0: [
      {
        type: 'input_statement',
        name: 'CONTENT',
      },
    ],
    colour: 200,
    previousStatement: [
      'div',
      'section',
      'article',
      'header',
      'footer',
      'nav',
      'body',
    ],
    nextStatement: [
      'div',
      'section',
      'article',
      'header',
      'footer',
      'nav',
      'body',
    ],
    category: '목록 태그',
  },
  {
    type: HTMLBlockTypes.Li,
    message0: 'li %1',
    args0: [
      {
        type: 'input_statement',
        name: 'CONTENT',
      },
    ],
    colour: 200,
    previousStatement: ['ul', 'ol', 'dl'],
    nextStatement: ['ul', 'ol', 'dl'],
    category: '목록 태그',
  },
  {
    type: HTMLBlockTypes.Dl,
    message0: 'dl %1',
    args0: [
      {
        type: 'input_statement',
        name: 'CONTENT',
      },
    ],
    colour: 200,
    previousStatement: [
      'div',
      'section',
      'article',
      'header',
      'footer',
      'nav',
      'body',
    ],
    nextStatement: [
      'div',
      'section',
      'article',
      'header',
      'footer',
      'nav',
      'body',
    ],
    category: '목록 태그',
  },
  {
    type: HTMLBlockTypes.Dt,
    message0: 'dt %1',
    args0: [
      {
        type: 'input_statement',
        name: 'CONTENT',
      },
    ],
    colour: 200,
    previousStatement: 'dl',
    nextStatement: 'dl',
    category: '목록 태그',
  },
  {
    type: HTMLBlockTypes.Dd,
    message0: 'dd %1',
    args0: [
      {
        type: 'input_statement',
        name: 'CONTENT',
      },
    ],
    colour: 200,
    previousStatement: 'dl',
    nextStatement: 'dl',
    category: '목록 태그',
  },
  {
    type: HTMLBlockTypes.A,
    message0: 'a %1 %2',
    args0: [
      {
        type: 'field_input',
        name: 'HREF',
        text: 'http://',
      },
      {
        type: 'input_statement',
        name: 'CONTENT',
      },
    ],
    colour: 180,
    previousStatement: [
      'div',
      'section',
      'article',
      'header',
      'footer',
      'nav',
      'body',
    ],
    nextStatement: [
      'div',
      'section',
      'article',
      'header',
      'footer',
      'nav',
      'body',
    ],
    category: '상호작용 및 네비게이션 요소',
  },
  {
    type: HTMLBlockTypes.Button,
    message0: 'button %1',
    args0: [
      {
        type: 'field_input',
        name: 'TEXT',
        text: 'Click Me',
      },
    ],
    colour: 180,
    previousStatement: [
      'div',
      'section',
      'article',
      'header',
      'footer',
      'nav',
      'body',
      'form',
    ],
    nextStatement: [
      'div',
      'section',
      'article',
      'header',
      'footer',
      'nav',
      'body',
      'form',
    ],
    category: '상호작용 및 네비게이션 요소',
  },
  {
    type: HTMLBlockTypes.Form,
    message0: 'form %1',
    args0: [
      {
        type: 'input_statement',
        name: 'CONTENT',
      },
    ],
    colour: 180,
    previousStatement: [
      'div',
      'section',
      'article',
      'header',
      'footer',
      'nav',
      'body',
    ],
    nextStatement: [
      'div',
      'section',
      'article',
      'header',
      'footer',
      'nav',
      'body',
    ],
    category: '상호작용 및 네비게이션 요소',
  },
  {
    type: HTMLBlockTypes.Fieldset,
    message0: 'fieldset %1',
    args0: [
      {
        type: 'input_statement',
        name: 'CONTENT',
      },
    ],
    colour: 180,
    previousStatement: 'form',
    nextStatement: 'form',
    category: '상호작용 및 네비게이션 요소',
  },
  {
    type: HTMLBlockTypes.Legend,
    message0: 'legend %1',
    args0: [
      {
        type: 'field_input',
        name: 'TEXT',
        text: 'Legend',
      },
    ],
    colour: 180,
    previousStatement: 'fieldset',
    nextStatement: 'fieldset',
    category: '상호작용 및 네비게이션 요소',
  },
  {
    type: HTMLBlockTypes.Label,
    message0: 'label %1 %2',
    args0: [
      {
        type: 'field_input',
        name: 'FOR',
        text: 'input_id',
      },
      {
        type: 'input_statement',
        name: 'CONTENT',
      },
    ],
    colour: 180,
    previousStatement: [
      'form',
      'fieldset',
      'div',
      'section',
      'article',
      'header',
      'footer',
      'nav',
      'body',
    ],
    nextStatement: [
      'form',
      'fieldset',
      'div',
      'section',
      'article',
      'header',
      'footer',
      'nav',
      'body',
    ],
    category: '상호작용 및 네비게이션 요소',
  },
  {
    type: HTMLBlockTypes.Input,
    message0: 'input %1',
    args0: [
      {
        type: 'field_input',
        name: 'ATTRIBUTES',
        text: 'type="text" id="input_id" name="input_name"',
      },
    ],
    colour: 180,
    previousStatement: [
      'form',
      'fieldset',
      'div',
      'section',
      'article',
      'header',
      'footer',
      'nav',
      'body',
    ],
    nextStatement: [
      'form',
      'fieldset',
      'div',
      'section',
      'article',
      'header',
      'footer',
      'nav',
      'body',
    ],
    category: '상호작용 및 네비게이션 요소',
  },
  {
    type: HTMLBlockTypes.Textarea,
    message0: 'textarea %1',
    args0: [
      {
        type: 'field_input',
        name: 'ATTRIBUTES',
        text: 'id="textarea_id" name="textarea_name" rows="4" cols="50"',
      },
    ],
    colour: 180,
    previousStatement: [
      'form',
      'fieldset',
      'div',
      'section',
      'article',
      'header',
      'footer',
      'nav',
      'body',
    ],
    nextStatement: [
      'form',
      'fieldset',
      'div',
      'section',
      'article',
      'header',
      'footer',
      'nav',
      'body',
    ],
    category: '상호작용 및 네비게이션 요소',
  },
  {
    type: HTMLBlockTypes.Select,
    message0: 'select %1 %2',
    args0: [
      {
        type: 'field_input',
        name: 'ATTRIBUTES',
        text: 'id="select_id" name="select_name"',
      },
      {
        type: 'input_statement',
        name: 'OPTIONS',
      },
    ],
    colour: 180,
    previousStatement: [
      'form',
      'fieldset',
      'div',
      'section',
      'article',
      'header',
      'footer',
      'nav',
      'body',
    ],
    nextStatement: [
      'form',
      'fieldset',
      'div',
      'section',
      'article',
      'header',
      'footer',
      'nav',
      'body',
    ],
    category: '상호작용 및 네비게이션 요소',
  },
  {
    type: HTMLBlockTypes.Option,
    message0: 'option %1',
    args0: [
      {
        type: 'field_input',
        name: 'TEXT',
        text: 'Option Text',
      },
    ],
    colour: 180,
    previousStatement: 'select',
    nextStatement: 'select',
    category: '상호작용 및 네비게이션 요소',
  },

  {
    type: HTMLBlockTypes.Video,
    message0: 'video %1',
    args0: [
      {
        type: 'field_input',
        name: 'ATTRIBUTES',
        text: 'src="video.mp4" controls',
      },
    ],
    colour: 200,
    previousStatement: [
      'div',
      'section',
      'article',
      'header',
      'footer',
      'nav',
      'body',
    ],
    nextStatement: [
      'div',
      'section',
      'article',
      'header',
      'footer',
      'nav',
      'body',
    ],
    category: '미디어와 임베디드 콘텐츠 태그',
  },
  {
    type: HTMLBlockTypes.Audio,
    message0: 'audio %1',
    args0: [
      {
        type: 'field_input',
        name: 'ATTRIBUTES',
        text: 'src="audio.mp3" controls',
      },
    ],
    colour: 200,
    previousStatement: [
      'div',
      'section',
      'article',
      'header',
      'footer',
      'nav',
      'body',
    ],
    nextStatement: [
      'div',
      'section',
      'article',
      'header',
      'footer',
      'nav',
      'body',
    ],
    category: '미디어와 임베디드 콘텐츠 태그',
  },
  {
    type: HTMLBlockTypes.Embed,
    message0: 'embed %1',
    args0: [
      {
        type: 'field_input',
        name: 'ATTRIBUTES',
        text: 'src="file.swf" width="600" height="400"',
      },
    ],
    colour: 200,
    previousStatement: [
      'div',
      'section',
      'article',
      'header',
      'footer',
      'nav',
      'body',
    ],
    nextStatement: [
      'div',
      'section',
      'article',
      'header',
      'footer',
      'nav',
      'body',
    ],
    category: '미디어와 임베디드 콘텐츠 태그',
  },
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
