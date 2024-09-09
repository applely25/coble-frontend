'use client';
import { quizListApi } from '@/api/quiz';
import SearchIcon from '@/assets/icon/Search';
import Dropdown, { ItemType, QuizType } from '@/components/common/DropDown';
import { flex, font, theme } from '@/styles';
import { styled } from '@linaria/react';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Link from 'next/link';

const Quiz = () => {
  const [state, setState] = useState<ItemType>();
  const [type, setType] = useState<QuizType>();
  const [currentPage, setCurrentPage] = useState(0);

  const { data: quizList } = useQuery({
    queryKey: ['quizListApi', currentPage, state, type],
    queryFn: () =>
      quizListApi({
        status: state?.value,
        type: type?.value,
        page: currentPage,
        size: 12,
      }),
  });

  useEffect(() => {
    setCurrentPage(0);
  }, [type, state]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value - 1);
  };

  return (
    <Wrapper>
      <Header>header</Header>
      <Container>
        <QuizTitleContainer>
          <QuizTitle>퀴즈 풀기 📣</QuizTitle>
          <QuizDescription>하루에 3개씩 퀴즈를 풀어보아요!</QuizDescription>
        </QuizTitleContainer>
        <FilterWrapper>
          {/* <SearchWrapper>
            <SearchInput type="text" placeholder="검색어를 입력해주세요" />
            <SearchIcon />
          </SearchWrapper> */}
          <div></div>
          <DropdownWrapper>
            <Dropdown
              describe="상태"
              items={[
                { text: '푼 퀴즈', value: true },
                { text: '안 푼 퀴즈', value: false },
              ]}
              val={state}
              setVal={setState}
            />
            <Dropdown
              describe="종류"
              items={[
                { text: 'OX 퀴즈', value: 'OX' },
                { text: '객관식 퀴즈', value: 'MULTIPLE_CHOICE' },
              ]}
              val={type}
              setVal={setType}
            />
          </DropdownWrapper>
        </FilterWrapper>
        <QuizGrid>
          {quizList?.quiz_list.map((quiz, index) => (
            <QuizCard key={quiz.id} href={`/quizdetail/${quiz.id}`}>
              <QuizContainer>
                <QuizCardTextContainer>
                  <QuizCardTitle>{quiz.title}</QuizCardTitle>
                  <QuizCardState>{quiz.quiz_status}</QuizCardState>
                </QuizCardTextContainer>
                <QuizChip>
                  <QuizTypeText>
                    {quiz.quiz_type === 'OX' ? 'O/X' : '객관식'} 퀴즈
                  </QuizTypeText>
                </QuizChip>
              </QuizContainer>
            </QuizCard>
          ))}
        </QuizGrid>
        <PaginationContianer>
          {quizList?.total_pages ? (
            <Pagination
              count={quizList?.total_pages}
              page={currentPage + 1}
              onChange={handleChange}
            />
          ) : (
            <></>
          )}
        </PaginationContianer>
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

const PaginationContianer = styled.div`
  width: 100%;
  ${flex.CENTER}
  margin-top: 28px;
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

const QuizCard = styled(Link)`
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
