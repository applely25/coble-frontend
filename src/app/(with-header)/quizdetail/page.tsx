'use client';
import { styled } from '@linaria/react';
import { design, flex, font } from '@/styles';
import color from '@/styles/theme';
import { useState } from 'react';

// interface IQuizdetailProps {
//   type: 'OX' | 'MULTIPLE_CHOICE';
//   status: 'CORRECT' | 'WRONG';
// }

const OXdummyList = [
  {
    type: 'OX',
    quiz_list: [
      {
        content: 'CSS는 뭐다',
        answer: true,
      },
      {
        content: 'HTML은 언어다',
        answer: true,
      },
      {
        content: 'HTML은 언어다',
        answer: true,
      },
    ],
  },
];

const MultipledummyList = {
  type: 'MULTIPLE_CHOICE',
  quiz_list: [
    {
      content: '올바른 것은?',
      answer: 1,
      choice_list: [
        {
          number: 1,
          text: '이건 맞다',
        },
        {
          number: 2,
          text: '이건 아니다',
        },
        {
          number: 3,
          text: '이건 아니다',
        },
        {
          number: 4,
          text: '이건 아니다',
        },
      ],
    },
  ],
};

const Quizdetail = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  return OXdummyList[0].type === 'OX' ? (
    <Wrapper>
      <Header>header</Header>
      <Container>
        <QuizDetailContainer>
          <QuizSubject>CSS 관련 퀴즈</QuizSubject>
          <QuizTitle>CSS의 풀네임으로 올바른 것은?</QuizTitle>
        </QuizDetailContainer>
        <OXContainer>
          <OXCardContainer
            isActive={activeIndex === 0}
            onClick={() => handleCardClick(0)}
            color={color.gray[200]}
            activeBackgroundColor="#FBFBFB" // O 카드 선택 시 색상
            activeColor={color.blue[500]}
          >
            O
          </OXCardContainer>
          <OXCardContainer
            isActive={activeIndex === 1}
            onClick={() => handleCardClick(1)}
            color={color.gray[200]} // X 카드 색상
            activeBackgroundColor="#FBFBFB" // X 카드 선택 시 색상
            activeColor={color.extra.red}
          >
            X
          </OXCardContainer>
        </OXContainer>
        <button>답변 제출하기</button>
      </Container>
    </Wrapper>
  ) : (
    <Wrapper>
      <Header>header</Header>
      <Container>
        <QuizDetailContainer>
          <QuizSubject>CSS 관련 퀴즈</QuizSubject>
          <QuizTitle>다른 질문 제목을 여기에 입력하세요</QuizTitle>
        </QuizDetailContainer>
        <MultipleChoiceContainer>
          {MultipledummyList.quiz_list[0].choice_list.map((v, index) => (
            <MultipleChoiceCardContainer
              key={v.number}
              isActive={activeIndex === index}
              onClick={() => handleCardClick(index)}
            >
              <MultipleChoiceNumber>{v.number}</MultipleChoiceNumber>
              <MultipleChoiceText>{v.text}</MultipleChoiceText>
            </MultipleChoiceCardContainer>
          ))}
        </MultipleChoiceContainer>
        <button>답변 제출하기</button>
      </Container>
    </Wrapper>
  );
};

const MultipleChoiceCardContainer = styled.div<{ isActive: boolean }>`
  ${flex.COLUMN_CENTER};
  border: 2px solid ${color.blue[200]};
  border-radius: 32px;
  width: 100%;
  height: 186px;
  background-color: ${(props) =>
    props.isActive ? color.blue[100] : color.extra.white};
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const MultipleChoiceContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 28px;
  grid-row-gap: 16px;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const MultipleChoiceNumber = styled.span`
  ${font.H1};
  color: ${color.blue[300]};
`;

const MultipleChoiceText = styled.p`
  ${font.H3};
  color: ${color.blue[300]};
`;

const OXCardContainer = styled.div<{
  isActive: boolean;
  color: string;
  activeBackgroundColor: string;
  activeColor: string;
}>`
  font-size: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 400px;
  border: 1px solid ${color.gray[100]};
  border-radius: 17px;
  background-color: ${(props) =>
    props.isActive ? props.activeBackgroundColor : props.activeBackgroundColor};
  color: ${(props) => (props.isActive ? props.activeColor : props.color)};
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const OXContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
`;

const QuizDetailContainer = styled.div`
  ${flex.COLUMN_FLEX};
  margin-bottom: 65px;
`;

const QuizTitle = styled.p`
  ${font.H2};
  ${flex.COLUMN_FLEX};
  color: ${color.blue[500]};
`;

const QuizSubject = styled.p`
  ${font.H5};
  ${flex.COLUMN_FLEX};
`;

const Header = styled.div`
  ${flex.CENTER};
  width: 100%;
  padding: 20px;
`;

const Wrapper = styled.div`
  ${flex.COLUMN_FLEX};
  width: 100%;
  height: 100vh;
  padding: 20px;
`;

const Container = styled.div`
  ${flex.COLUMN_FLEX};
  width: 100%;
  padding-top: 2%;
  padding-left: 10%;
  padding-right: 10%;

  > button {
    display: inline-block;
    border-radius: 16px;
    ${design.BUTTON_WHITE};
    padding: 16px;
    display: flex;
    max-width: 170px;
    justify-content: center;
    align-items: center;
    margin: 113px auto 0;
  }
`;

export default Quizdetail;
