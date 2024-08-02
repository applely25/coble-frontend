import { AuthInstance } from '.';

interface ILoginResponse {
  message: string;
  token: string;
}

const loginApi = async (
  email: string,
  password: string,
): Promise<ILoginResponse> => {
  const response = await AuthInstance.post('users/signin', {
    email,
    password,
  });
  return response.data;
};

const sendEmailApi = async (email: string) => {
  const response = await AuthInstance.post('users/mail/send', {
    email,
  });
  return response.data;
};

const checkVerifyCodeApi = async (email: string, verifyCode: string) => {
  const response = await AuthInstance.post('users/email/check', {
    email,
    verifyCode,
  });
  return response.data;
};

const signUpApi = async (password: string, nickname: string, email: string) => {
  const response = await AuthInstance.post('users/signup', {
    password,
    email,
    nickname,
  });
  return response.data;
};

export { loginApi, sendEmailApi, checkVerifyCodeApi, signUpApi };
