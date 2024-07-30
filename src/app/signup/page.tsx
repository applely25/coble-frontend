'use client';
import AuthLayout from '@/components/common/AuthLayout';
import Input from '@/components/common/Input';
import useInputForm, { PlaceholderKeys } from '@/hooks/useInputForm';
import { design, flex, font, theme } from '@/styles';
import { styled } from '@linaria/react';
import Link from 'next/link';
import { useState } from 'react';

const inputInitialData: PlaceholderKeys[] = [
  'email',
  'verify_code',
  'password',
  'password_check',
  'nickname',
];
export default function Signup() {
  const { inputValue, onChange, placeholder } = useInputForm(inputInitialData);
  const [isVerifyCheck, setIsVerifyCheck] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  const onClickVerifyCheck = () => {
    // 서버 요청
    // 성공시, setIsVerifyCheck(true)
  };

  return (
    <Layout>
      <AuthLayout title="회원가입">
        {page === 1 && (
          <>
            <AuthChildrenContainer>
              <EmailInput>
                <Input
                  name={inputInitialData[0]}
                  value={inputValue[inputInitialData[0]]}
                  placeholder={placeholder[inputInitialData[0]]}
                  type={inputInitialData[0]}
                  onChange={onChange}
                  readOnly={isVerifyCheck}
                />
                {!isVerifyCheck && <button>인증하기</button>}
              </EmailInput>
              {isVerifyCheck && (
                <Input
                  name={inputInitialData[1]}
                  value={inputValue[inputInitialData[1]]}
                  placeholder={placeholder[inputInitialData[1]]}
                  type={inputInitialData[1]}
                  onChange={onChange}
                />
              )}
            </AuthChildrenContainer>
            <AuthChildrenContainer>
              <LoginButton
                disabled={
                  isVerifyCheck &&
                  !(inputValue[inputInitialData[1]].length === 4)
                }
                onClick={() => setPage(2)}
              >
                다음
              </LoginButton>
            </AuthChildrenContainer>
            <GoLogin>
              이미 회원가입하셨나요? <Link href="/login">로그인하기</Link>
            </GoLogin>
          </>
        )}
        {page === 2 && (
          <>
            <AuthChildrenContainer>
              <Input
                name={inputInitialData[2]}
                value={inputValue[inputInitialData[2]]}
                placeholder={placeholder[inputInitialData[2]]}
                type={inputInitialData[2]}
                onChange={onChange}
              />
              <Input
                name={inputInitialData[3]}
                value={inputValue[inputInitialData[3]]}
                placeholder={placeholder[inputInitialData[3]]}
                type={inputInitialData[3]}
                onChange={onChange}
              />
              <Input
                name={inputInitialData[4]}
                value={inputValue[inputInitialData[4]]}
                placeholder={placeholder[inputInitialData[4]]}
                type={inputInitialData[4]}
                onChange={onChange}
              />
            </AuthChildrenContainer>
            <ButtonContainer>
              <ConsentContainer>
                <input type="checkbox" name="" id="" />
                <p>
                  <Link href="/">개인정보처리방침</Link> 및{' '}
                  <Link href="/">이용약관</Link> 동의
                </p>
              </ConsentContainer>
              <LoginButton>회원가입</LoginButton>
            </ButtonContainer>
          </>
        )}
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

const EmailInput = styled.div`
  ${flex.FLEX}
  gap: 10px;

  > button {
    ${design.BUTTON_WHITE}
    min-width: fit-content;
  }
`;

const ButtonContainer = styled.div`
  ${flex.COLUMN_VERTICAL}
  gap: 10px;
  width: 100%;
  > button {
    width: 100%;
  }
`;

const ConsentContainer = styled.div`
  ${flex.VERTICAL}
  gap: 4px;
  > input {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 1px solid ${theme.gray[500]};
    appearance: none;
    cursor: pointer;
    transition: background 0.2s;
    &:hover {
      background-color: ${theme.blue[200]};
      background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
      border: none;
    }
    &:checked {
      background-color: ${theme.blue[500]};
      border: none;
      background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    }
  }
  > p {
    ${font.C2}
    color: ${theme.gray[500]};
    > a {
      text-decoration: underline;
    }
  }
`;

const LoginButton = styled.button`
  ${design.BUTTON_PRIMARY}
  padding: 16px;
  &:hover {
    background-color: ${theme.blue[100]};
    color: ${theme.blue[500]};
  }
  &:disabled {
    background-color: ${theme.gray[300]};
    color: ${theme.extra.white};
  }
`;

const GoLogin = styled.p`
  ${font.B1}
  >a {
    color: ${theme.blue[500]};
    text-decoration: underline;
  }
`;
