import axios, { AxiosError, AxiosInstance } from 'axios';
import { refreshAccessTokenApi } from './users';
import { Storage } from '@/storage';

const baseUrl = `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}`;

export const AuthInstance: AxiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
});

AuthInstance.interceptors.request.use(
  (config) => {
    const accessToken = Storage.getItem('access_token');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

AuthInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<AxiosError>) => {
    if (axios.isAxiosError(error) && error.response) {
      const { message } = error.response.data;
      if (message === '로그인이 필요합니다.') {
        const newAccessToken = await refreshAccessTokenApi();
        if (newAccessToken && error.config) {
          Storage.setItem('access_token', newAccessToken.access_token);
          Storage.setItem('refresh_token', newAccessToken.refresh_token);
          error.config.headers['Authorization'] =
            `Bearer ${newAccessToken.access_token}`;
          return AuthInstance.request(error.config);
        } else {
          // 갱신 실패 시 로그인 페이지로 이동
          window.location.href = '/login';
        }
      }
    } else {
      throw error;
    }
  },
);
