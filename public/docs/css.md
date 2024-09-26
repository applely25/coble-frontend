# CSS 개발 문서

## 1. 소개

CSS(Cascading Style Sheets)는 웹 페이지의 스타일과 레이아웃을 정의하는 데 사용되는 스타일시트 언어입니다. CSS를 사용하면 HTML 요소의 색상, 글꼴, 여백, 배치 등을 쉽게 조정할 수 있습니다.

## 2. 기본 문법

CSS는 선택자(selector)와 선언(declaration) 블록으로 구성됩니다.

### 2.1 선택자

선택자는 스타일을 적용할 HTML 요소를 지정합니다.

- **요소 선택자**: `div`, `p`, `h1` 등
- **클래스 선택자**: `.classname` (점으로 시작)
- **ID 선택자**: `#idname` (해시로 시작)

### 2.2 선언 블록

선언 블록은 중괄호 `{}` 안에 스타일 속성과 값을 포함합니다.

```css
selector {
  property: value;
}
```

## 3. 스타일 속성

### 3.1 텍스트 관련

- `color`: 글자 색상
- `font-size`: 글자 크기
- `font-weight`: 글자 두께

### 3.2 박스 모델

- `margin`: 요소 외부의 여백
- `padding`: 요소 내부의 여백
- `border`: 요소의 테두리

### 3.3 배치

- `display`: 요소의 박스 모델 처리 방식
- `position`: 요소의 위치 설정
- `float`: 요소를 왼쪽 또는 오른쪽으로 띄우기

## 4. 반응형 디자인

미디어 쿼리를 사용하여 다양한 화면 크기에 맞춰 스타일을 조정할 수 있습니다.

```css
@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```

## 5. CSS 프리프로세서

### 5.1 SASS

SASS는 CSS의 확장 언어로, 변수, 중첩, 믹스인 등을 지원합니다.

### 5.2 LESS

LESS는 CSS에 비슷한 기능을 추가하여 코드의 재사용성을 높입니다.

## 6. 최적화

CSS 파일을 최적화하여 페이지 로딩 속도를 개선할 수 있습니다.

- **미니파이(minify)**: 공백, 주석 제거
- **CSS Sprites**: 여러 이미지를 하나의 이미지로 결합하여 요청 수 감소

## 7. 참고 자료

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [W3Schools CSS Tutorial](https://www.w3schools.com/css/)

## 8. 결론

CSS는 웹 개발에서 중요한 역할을 하며, 이를 통해 사용자 경험을 개선할 수 있습니다. 지속적으로 학습하고 새로운 기술을 익히는 것이 중요합니다.
