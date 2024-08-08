import axios, { AxiosError, AxiosInstance } from 'axios';

const baseUrl = 'http://localhost:8080';

export const AuthInstance: AxiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
});

AuthInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('access_token');
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
        localStorage.removeItem('access_token');
        window.location.href = '/login';
      }
    } else {
      throw error;
    }
  },
);
