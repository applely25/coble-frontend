import SearchIcon from '@/assets/icon/Search';
import Dropdown from '@/components/common/DropDown';
import { flex, theme } from '@/styles';
import { styled } from '@linaria/react';

const Quiz = () => {
  return (
    <Wrapper>
      <Header>header</Header>
      <Container>
        <QuizTitleContainer>
          <QuizTitle>퀴즈 풀기 📣</QuizTitle>
          <QuizDescription>하루에 3개씩 퀴즈를 풀어보아요!</QuizDescription>
        </QuizTitleContainer>
        <SearchWrapper>
          <SearchInput type="text" placeholder="검색어를 입력해주세요" />
          <SearchIcon />
        </SearchWrapper>
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

  width: 25vw;
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

  /* @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  } */
`;
