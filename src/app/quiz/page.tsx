'use client';
import SearchIcon from '@/assets/icon/Search';
import Dropdown, { ItemType } from '@/components/common/DropDown';
import { flex, font, theme } from '@/styles';
import { styled } from '@linaria/react';
import { useState } from 'react';

// TODO: 조회 기능 구현 시 삭제
const quizData = [
  { title: 'CSS 관련 퀴즈', state: '푼 퀴즈', type: 'O/X 퀴즈' },
  { title: 'JavaScript 관련 퀴즈', state: '안 푼 퀴즈', type: '객관식 퀴즈' },
  { title: 'HTML 관련 퀴즈', state: '푼 퀴즈', type: 'O/X 퀴즈' },
];
const Quiz = () => {
  const [state, setState] = useState<ItemType>();
  const [type, setType] = useState<ItemType>();
  return (
    <Wrapper>
      <Header>header</Header>
      <Container>
        <QuizTitleContainer>
          <QuizTitle>퀴즈 풀기 📣</QuizTitle>
          <QuizDescription>하루에 3개씩 퀴즈를 풀어보아요!</QuizDescription>
        </QuizTitleContainer>
        <FilterWrapper>
          <SearchWrapper>
            <SearchInput type="text" placeholder="검색어를 입력해주세요" />
            <SearchIcon />
          </SearchWrapper>
          <DropdownWrapper>
            <Dropdown
              describe="상태"
              items={[{ text: '푼 퀴즈' }, { text: '안 푼 퀴즈' }]}
              val={state}
              setVal={setState}
            />
            <Dropdown
              describe="종류"
              items={[{ text: 'OX 퀴즈' }, { text: '객관식 퀴즈' }]}
              val={type}
              setVal={setType}
            />
          </DropdownWrapper>
        </FilterWrapper>
        <QuizGrid>
          {quizData.map((quiz, index) => (
            <QuizCard key={index}>
              <QuizContainer>
                <QuizCardTextContainer>
                  <QuizCardTitle>{quiz.title}</QuizCardTitle>
                  <QuizCardState>{quiz.state}</QuizCardState>
                </QuizCardTextContainer>
                <QuizChip>
                  <QuizTypeText>{quiz.type}</QuizTypeText>
                </QuizChip>
              </QuizContainer>
            </QuizCard>
          ))}
        </QuizGrid>
      </Container>
    </Wrapper>
  );
};

export default Quiz;

const Header = styled.div`
  ${flex.CENTER}
  width: 100%;
  padding: 20px;
`;

const QuizGrid = styled.div`
  display: grid;
  margin-top: 28px;
  gap: 24px;
  grid-template-columns: repeat(3, 1fr);
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 770px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const QuizContainer = styled.div`
  ${flex.BETWEEN}
  height: 100%
`;

const QuizTypeText = styled.p`
  ${font.C1}
  color: ${theme.extra.white};
`;

const QuizChip = styled.div`
  ${flex.CENTER}
  width: 78px;
  height: 30px;
  background-color: ${theme.blue[200]};

  border: 1px solid ${theme.blue[200]};
  border-radius: 16px;
  margin-right: 24px;
`;

const QuizCardTextContainer = styled.div`
  ${flex.COLUMN_FLEX};
  margin-left: 24px;
`;

const QuizCardTitle = styled.p`
  ${font.B1};
`;

const QuizCardState = styled.p`
  ${font.C1};
  ${theme.gray[600]}
`;

const QuizCard = styled.div`
  width: 100%;
  min-width: 200px;
  height: 90px;

  border: 1px solid ${theme.blue[150]};
  border-radius: 32px;
`;

const FilterWrapper = styled.div`
  ${flex.BETWEEN}
  @media screen and (max-width: 770px) {
    ${flex.COLUMN_FLEX}
    gap: 10px;
  }
`;

const DropdownWrapper = styled.div`
  ${flex.FLEX}
  gap: 16px;
`;

const QuizTitleContainer = styled.div`
  ${flex.COLUMN_FLEX}
  margin-bottom: 52px;
`;

const QuizTitle = styled.p`
  font-size: 44px;
  font-weight: bold;
  margin-bottom: 8px;
  color: ${theme.blue[500]};
`;

const QuizDescription = styled.p`
  font-size: 25px;
  font-weight: 400;
  color: ${theme.extra.black};
`;

const SearchWrapper = styled.div`
  ${flex.VERTICAL}
  ${flex.BETWEEN}
  border: 1px solid ${theme.gray[300]};
  border-radius: 24px;
  padding: 10px 32px 10px 32px;

  width: 100%;
  max-width: 354px;
  /* width: 25vw; */
`;

const SearchInput = styled.input`
  font-size: 16px;

  ::placeholder {
    color: ${theme.gray[300]};
  }
`;

const Wrapper = styled.div`
  ${flex.COLUMN_FLEX}
  width: 100%;
  height: 100vh;
  padding: 20px;
`;

const Container = styled.div`
  ${flex.COLUMN_FLEX}
  width: 100%;
  padding-top: 2%;
  padding-left: 10%;
  padding-right: 10%;
`;
