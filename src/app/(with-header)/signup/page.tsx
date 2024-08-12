'use client';
import { sendEmailApi, checkVerifyCodeApi, signUpApi } from '@/api/users';
import AuthLayout from '@/components/common/AuthLayout';
import Input from '@/components/common/Input';
import useInputForm, { PlaceholderKeys } from '@/hooks/useInputForm';
import { design, flex, font, theme } from '@/styles';
import { styled } from '@linaria/react';
import { useMutation } from '@tanstack/react-query';
import { error } from 'console';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';

const inputInitialData: PlaceholderKeys[] = [
  'email',
  'verify_code',
  'password',
  'password_check',
  'nickname',
];
const verifyCodeRegex = /^(\d{4})$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
export default function Signup() {
  const { inputValue, onChange, placeholder } = useInputForm(inputInitialData);
  const [isVerifyCheck, setIsVerifyCheck] = useState<boolean>(false);
  const [isPrivacyCheck, setIsPrivacyCheck] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const nav = useRouter();

  const { mutate: sendEmailMutate } = useMutation({
    mutationFn: (data: { email: string }) => sendEmailApi(data.email),
    mutationKey: ['sendEmail'],
    onSuccess: () => {
      setIsVerifyCheck(true);
    },
    onError: (error) => {
      console.log(error);
      toast.error('오류가 발생했습니다. 관리자에게 문의해주세요.');
    },
  });

  const { mutate: checkVerifyCodeMutate } = useMutation({
    mutationFn: (data: { email: string; verifyCode: string }) =>
      checkVerifyCodeApi(data.email, data.verifyCode),
    mutationKey: ['checkVerifyCode'],
    onSuccess: () => {
      setPage(2);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const { mutate: signUpMutate } = useMutation({
    mutationFn: (data: { password: string; nickname: string; email: string }) =>
      signUpApi(data.password, data.nickname, data.email),
    mutationKey: ['signUp'],
    onSuccess: () => {
      toast('회원가입에 성공하였습니다.');
      nav.push('/login');
    },
    onError: (error) => {
      console.log(error);
      toast.error('오류가 발생했습니다. 관리자에게 문의해주세요.');
    },
  });

  const onClickVerifyCheck = () => {
    if (!emailRegex.test(inputValue.email)) {
      toast('이메일이 형식에 맞지 않습니다.');
    }else{
      toast('인증번호가 발송되었습니다.');
      sendEmailMutate({ email: inputValue.email });
    }
  };

  const onClickNext = () => {
    if (!emailRegex.test(inputValue.email)) {
      toast('이메일이 형식에 맞지 않습니다.');
    } else if (!verifyCodeRegex.test(inputValue.verify_code)) {
      toast('인증번호가 형식에 맞지 않습니다.');
    } else {
      checkVerifyCodeMutate({
        email: inputValue.email,
        verifyCode: inputValue.verify_code,
      });
    }
  };

  const onClickSignUp = () => {
    if (inputValue.password != inputValue.password_check) {
      toast('비밀번호가 일치하지 않습니다.');
    } else if (!passwordRegex.test(inputValue.password)) {
      toast('비밀번호가 형식에 맞지 않습니다.');
    } else if (!isPrivacyCheck) {
      toast('개인정보 처리 방침에 동의해 주세요.');
    } else {
      signUpMutate({
        password: inputValue.password,
        nickname: inputValue.nickname,
        email: inputValue.email,
      });
    }
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
                {!isVerifyCheck && (
                  <button onClick={onClickVerifyCheck}>인증하기</button>
                )}
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
                  !isVerifyCheck || !(inputValue['verify_code'].length === 4)
                }
                onClick={onClickNext}
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
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={isPrivacyCheck}
                  onChange={() => setIsPrivacyCheck(!isPrivacyCheck)}
                />
                <p>
                  <Link href="/">개인정보처리방침</Link> 및{' '}
                  <Link href="/">이용약관</Link> 동의
                </p>
              </ConsentContainer>
              <LoginButton
                onClick={onClickSignUp}
                disabled={
                  !inputValue[inputInitialData[2]] ||
                  !inputValue[inputInitialData[3]] ||
                  !inputValue[inputInitialData[4]] ||
                  !isPrivacyCheck
                }
              >
                회원가입
              </LoginButton>
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
