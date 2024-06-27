import { HTMLBlockTypes } from './types';

/*
type : HTMLBlockTypes.블록 타입
message0 : 블록의 텍스트  (%1, %2... 변수 이용시 사용)
args0 : 블록의 인자들 [{ type : 타입, name : 변수 이름 }]
colour : 블록 색상
previousStatement : 이전 블록의 종류 (null : 없음) -> 블록을 연결할 수 있는지 여부 (단순히 아무거나 연경 가능하면 null)
nextStatement : 다음 블록의 종류 (null : 없음) -> 블록을 연결할 수 있는지 여부 (단순히 아무거나 연경 가능하면 null)

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


---
참고 자료 : https://developers.google.com/blockly/guides/create-custom-blocks/fields/built-in-fields/overview?hl=ko&_gl=1*tce58i*_up*MQ..*_ga*MTYxNTg4NzI5Mi4xNzE5NDQ5NTY1*_ga_R5G2Y6GLVC*MTcxOTQ0OTU2NS4xLjEuMTcxOTQ0OTU2NS4wLjAuMA..
*/

export default [];
