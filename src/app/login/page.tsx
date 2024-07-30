'use client';
import AuthLayout from '@/components/common/AuthLayout';
import Input from '@/components/common/Input';
import useInputForm, { PlaceholderKeys } from '@/hooks/useInputForm';
import { design, flex, font, theme } from '@/styles';
import { styled } from '@linaria/react';
import Link from 'next/link';

const inputInitialData: PlaceholderKeys[] = ['email', 'password'];
export default function Login() {
  const { inputValue, onChange, placeholder } = useInputForm(inputInitialData);

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
          <LoginButton>로그인</LoginButton>
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
