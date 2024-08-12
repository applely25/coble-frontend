import axios from 'axios';
import { AuthInstance } from '.';
import { Storage } from '@/storage';

interface ILoginResponse {
  nickname: string;
  access_token: string;
  access_exp: string;
  refresh_token: string;
  refresh_exp: string;
}

const base = 'users';

const loginApi = async (
  email: string,
  password: string,
): Promise<ILoginResponse> => {
  const response = await AuthInstance.post(`${base}/signin`, {
    email,
    password,
  });
  return response.data;
};

const sendEmailApi = async (email: string) => {
  const response = await AuthInstance.post(`${base}/mail/send`, {
    email,
  });
  return response.data;
};

const checkVerifyCodeApi = async (email: string, verifyCode: string) => {
  const response = await AuthInstance.post(`${base}/mail/check`, {
    email,
    verify_code: verifyCode,
  });
  return response.data;
};

const signUpApi = async (password: string, nickname: string, email: string) => {
  const response = await AuthInstance.post(`${base}/signup`, {
    password,
    email,
    nickname,
  });
  return response.data;
};

interface IRefreshTokenPromise {
  access_token: string;
  access_exp: string;
  refresh_token: string;
  refresh_exp: string;
}
const BASEURL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

const refreshAccessTokenApi =
  async (): Promise<IRefreshTokenPromise | null> => {
    const refreshToken = Storage.getItem('refresh_token');
    try {
      const response = await axios.post(
        `${BASEURL}${base}/refresh`,
        {},
        {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        },
      );
      return response.data;
    } catch (error) {
      console.error('Failed to refresh access token', error);
      return null;
    }
  };

export {
  loginApi,
  sendEmailApi,
  checkVerifyCodeApi,
  signUpApi,
  refreshAccessTokenApi,
};
