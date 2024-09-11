'use client';
import { styled } from '@linaria/react';
import { design, flex, font } from '@/styles';
import color from '@/styles/theme';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { quizDetailApi, QuizTypeEnum } from '@/api/quiz';
import QuizModal from '@/components/page/quiz/QuizModal';

const Quizdetail = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [quizNumber, setQuizNumber] = useState<number>(0);
  const [openQuizModal, setOpenQuizModal] = useState<boolean>(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean>(false);
  const { quizId } = useParams();
  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  const {
    data: quizDetail,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ['quizDetailApi'],
    queryFn: () => quizDetailApi(Number(quizId)),
  });

  const submitOXQuiz = () => {
    if (quizDetail && activeIndex !== null) {
      setOpenQuizModal(true);
      if (quizDetail.quiz_list[quizNumber].ox_answer === (activeIndex === 0))
        setIsCorrectAnswer(true);
      else setIsCorrectAnswer(false);
    }
  };
  const submitChoiceQuiz = () => {
    if (quizDetail && activeIndex !== null) {
      setOpenQuizModal(true);
      if (quizDetail.quiz_list[quizNumber].multiple_answer === activeIndex)
        setIsCorrectAnswer(true);
      else setIsCorrectAnswer(false);
    }
  };
  useEffect(() => {
    refetch();
  }, [quizId]);

  if (isFetching) <p>loading</p>;
  return quizDetail?.quiz_type === 'OX' ? (
    <Wrapper>
      <Container>
        <QuizModal
          isOpen={openQuizModal}
          setIsOpen={setOpenQuizModal}
          setQuizNumber={setQuizNumber}
          isSuccess={isCorrectAnswer}
          setActiveIndex={setActiveIndex}
          isLastQuiz={quizNumber >= quizDetail.quiz_list.length - 1}
          quizId={Number(quizId)}
        />
        <QuizDetailContainer>
          <QuizSubject>{quizDetail.quiz_title}</QuizSubject>
          <QuizTitle>{quizDetail.quiz_list[quizNumber].content}</QuizTitle>
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
        <button onClick={submitOXQuiz}>답변 제출하기</button>
      </Container>
    </Wrapper>
  ) : (
    quizDetail && (
      <Wrapper>
        <Container>
          <QuizModal
            isOpen={openQuizModal}
            setIsOpen={setOpenQuizModal}
            setQuizNumber={setQuizNumber}
            isSuccess={isCorrectAnswer}
            setActiveIndex={setActiveIndex}
            isLastQuiz={quizNumber >= quizDetail.quiz_list.length - 1}
            quizId={Number(quizId)}
          />
          <QuizDetailContainer>
            <QuizSubject>{quizDetail?.quiz_title}</QuizSubject>
            <QuizTitle>{quizDetail?.quiz_list[quizNumber].content}</QuizTitle>
          </QuizDetailContainer>
          <MultipleChoiceContainer>
            {quizDetail?.quiz_list[quizNumber].choice_list.map((v, index) => (
              <MultipleChoiceCardContainer
                key={v.number}
                isActive={activeIndex === v.number}
                onClick={() => handleCardClick(v.number)}
              >
                <MultipleChoiceNumber>{v.number}</MultipleChoiceNumber>
                <MultipleChoiceText>{v.text}</MultipleChoiceText>
              </MultipleChoiceCardContainer>
            ))}
          </MultipleChoiceContainer>
          <button onClick={submitChoiceQuiz}>답변 제출하기</button>
        </Container>
      </Wrapper>
    )
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
  margin-top: 50px;

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
