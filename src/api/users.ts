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

export { loginApi };
