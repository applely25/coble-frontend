import { AuthInstance } from '.';

const base = 'quizzes';

export type QuizTypeEnum = 'OX' | 'MULTIPLE_CHOICE';
interface Iquiz {
  id: number;
  title: string;
  quiz_status: boolean;
  quiz_type: QuizTypeEnum;
}
interface IreQuizList {
  quiz_list: Iquiz[];
  total_elements: number;
  page_number: number;
  size: number;
  last: boolean;
  total_pages: number;
}
interface IquizList {
  status?: boolean;
  type?: QuizTypeEnum;
  page: number;
  size: number;
}
const quizListApi = async ({
  status,
  type,
  page,
  size,
}: IquizList): Promise<IreQuizList> => {
  const { data } = await AuthInstance.get(
    `${base}/list?${status !== undefined ? `status=${status}&` : ''}${type !== undefined ? `type=${type}&` : ''}page=${page}&size=${size}`,
  );
  return data;
};

interface ChoiceTyps {
  number: number;
  text: string;
}
interface QuizType {
  content: string;
  ox_answer: boolean;
  multiple_answer: number;
  choice_list: ChoiceTyps[];
}
interface IresQuizDetail {
  quiz_type: QuizTypeEnum;
  quiz_title: string;
  quiz_list: QuizType[];
}

const quizDetailApi = async (quizId: number): Promise<IresQuizDetail> => {
  const { data } = await AuthInstance.get(`${base}/answer/${quizId}`);

  return data;
};

const quizSolveApi = async (quizId: number) => {
  const { data } = await AuthInstance.post(`${base}/solve/${quizId}`);

  return data;
};

export { quizListApi, quizDetailApi, quizSolveApi };
