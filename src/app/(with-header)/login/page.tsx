'use client';
import { loginApi } from '@/api/users';
import AuthLayout from '@/components/common/AuthLayout';
import Input from '@/components/common/Input';
import useInputForm, { PlaceholderKeys } from '@/hooks/useInputForm';
import { design, flex, font, theme } from '@/styles';
import { styled } from '@linaria/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useAtom } from 'jotai';
import { userContext } from '@/context';
import { Storage } from '@/storage';

const inputInitialData: PlaceholderKeys[] = ['email', 'password'];
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
export default function Login() {
  const { inputValue, onChange, placeholder } = useInputForm(inputInitialData);
  const nav = useRouter();
  const [, setUser] = useAtom(userContext);

  const { mutate: loginMutate } = useMutation({
    mutationFn: (data: { email: string; password: string }) =>
      loginApi(data.email, data.password),
    mutationKey: ['login'],
    onSuccess: (data) => {
      Storage.setItem('access_token', data.access_token);
      Storage.setItem('refresh_token', data.refresh_token);
      setUser({ id: data.nickname, isLogin: true });
      nav.push('/');
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onClickLogin = () => {
    if (!inputValue.email || !inputValue.password) {
      toast('아이디와 비밀번호를 입력해주세요.');
    } else if (!emailRegex.test(inputValue.email)) {
      toast('이메일이 형식에 맞지 않습니다.');
    } else if (!passwordRegex.test(inputValue.password)) {
      toast('비밀번호가 형식에 맞지 않습니다.');
    } else {
      loginMutate(inputValue);
    }
  };

  return (
    <Layout>
      <AuthLayout title="로그인">
        <AuthChildrenContainer>
          {inputInitialData.map((key) => (
            <Input
              name={key}
              value={inputValue[key]}
              placeholder={placeholder[key]}
              key={key}
              type={key}
              onChange={onChange}
            />
          ))}
        </AuthChildrenContainer>
        <AuthChildrenContainer>
          <LoginButton onClick={onClickLogin}>로그인</LoginButton>
        </AuthChildrenContainer>
        <GoLogin>
          회원이 아니신가요? <Link href="/signup">회원가입하기</Link>
        </GoLogin>
      </AuthLayout>
    </Layout>
  );
}

const Layout = styled.div`
  width: 100dvw;
  height: 100dvh;

  ${flex.CENTER}
`;

const AuthChildrenContainer = styled.div`
  ${flex.COLUMN_FLEX}
  gap: 16px;
  width: 100%;
`;

const LoginButton = styled.button`
  ${design.BUTTON_PRIMARY}
  padding: 16px;
  &:hover {
    background-color: ${theme.blue[100]};
    color: ${theme.blue[500]};
  }
`;

const GoLogin = styled.p`
  ${font.B1}
  >a {
    color: ${theme.blue[500]};
    text-decoration: underline;
  }
`;
