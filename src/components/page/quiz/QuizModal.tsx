import { quizSolveApi } from '@/api/quiz';
import { CorrectImage, WrongImage } from '@/assets/image';
import CheckModal from '@/components/common/CheckModal';
import { font, theme } from '@/styles';
import { styled } from '@linaria/react';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

interface IQuizModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setQuizNumber: React.Dispatch<React.SetStateAction<number>>;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
  isLastQuiz: boolean;
  isSuccess: boolean;
  quizId: number;
}

const QuizModal = ({
  isOpen,
  setIsOpen,
  setQuizNumber,
  setActiveIndex,
  isLastQuiz,
  isSuccess,
  quizId,
}: IQuizModalProps) => {
  const nav = useRouter();

  const { mutate: quizSolveMutate } = useMutation({
    mutationFn: quizSolveApi,
    mutationKey: ['quizSolveApi'],
    onSuccess: () => {
      toast('문제를 무사히 풀었습니다!');
      nav.push('/quiz');
    },
  });

  if (isSuccess) {
    const CorrectApproveButton = {
      title: isLastQuiz ? '다른 퀴즈 풀어보기' : '다음 퀴즈 풀기',
      onClick: () => {
        if (isLastQuiz) {
          quizSolveMutate(quizId);
        } else {
          setActiveIndex(null);
          setIsOpen(false);
          setQuizNumber((prev) => prev + 1);
        }
      },
    };
    return (
      <>
        {isOpen && (
          <CheckModal approveButton={CorrectApproveButton}>
            <ModalContainer>
              <IsSuccessImage src={CorrectImage.src} />
              <h2 style={{ color: theme.extra.green }}>정답입니다</h2>
              <p>
                {isLastQuiz
                  ? `마지막 문제 정답을 맞혔습니다.\n다른 퀴즈도 한 번 도전해보세요!`
                  : `정답을 맞혔습니다!\n다음 퀴즈로 넘어갑니다.`}
              </p>
            </ModalContainer>
          </CheckModal>
        )}
      </>
    );
  } else {
    const WrongCancelButton = {
      title: '다시 풀기',
      onClick: () => setIsOpen(false),
    };
    const WrongApproveButton = {
      title: isLastQuiz ? '다른 퀴즈 풀어보기' : '다음 퀴즈 풀기',
      onClick: () => {
        if (isLastQuiz) {
          quizSolveMutate(quizId);
        } else {
          setActiveIndex(null);
          setIsOpen(false);
          setQuizNumber((prev) => prev + 1);
        }
      },
    };
    return (
      <>
        {isOpen && (
          <CheckModal
            cancelButton={WrongCancelButton}
            approveButton={WrongApproveButton}
          >
            <ModalContainer>
              <IsSuccessImage src={WrongImage.src} />
              <h2 style={{ color: theme.extra.red }}>오답입니다</h2>
              <p>
                {isLastQuiz
                  ? `마지막 정답을 맞히지 못했습니다.\n다음 퀴즈를 보러 가시겠습니까?`
                  : `아쉽게도 정답을 맞히지 못했습니다.\n다음 퀴즈를 풀러 가시겠습니까?`}
              </p>
            </ModalContainer>
          </CheckModal>
        )}
      </>
    );
  }
};

export default QuizModal;
const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  > h2 {
    ${font.H2}
  }
  > p {
    ${font.H5}
    color: ${theme.gray[600]};
    white-space: pre-wrap;
    text-align: center;
  }
`;
const IsSuccessImage = styled.img`
  width: 150px;
  height: 150px;
`;
