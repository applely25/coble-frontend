'use client';
import { Sidebar } from '@/components/page/mypage';
import { design, flex, font, theme } from '@/styles';
import color from '@/styles/theme';
import { styled } from '@linaria/react';
import Image from 'next/image';
import Input from '@/components/common/Input';
import useInputForm, { PlaceholderKeys } from '@/hooks/useInputForm';
import { useMutation } from '@tanstack/react-query';
import { changePasswordApi } from '@/api/users';
import { error } from 'console';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const inputInitialData: PlaceholderKeys[] = [
  'exist_password',
  'change_password',
];
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
export default function ChangePassword() {
  const { inputValue, onChange, placeholder } = useInputForm(inputInitialData);
  const nav = useRouter();

  const { mutate: changePasswordMutate } = useMutation({
    mutationFn: (data: { exist_password: string; change_password: string }) =>
      changePasswordApi(data.exist_password, data.change_password),
    mutationKey: ['changePassword'],
    onSuccess: (data) => {
      toast('비밀번호가 변경되었습니다. 다시 로그인 해주세요.');
      // todo : 토큰 초기화하기
      nav.push('/login');
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onClickSuccess = () => {
    if (!passwordRegex.test(inputValue.exist_password)) {
      toast('비밀번호가 형식에 맞지 않습니다.');
    } else if (!passwordRegex.test(inputValue.change_password)) {
      toast('비밀번호가 형식에 맞지 않습니다.');
    } else if (!inputValue.exist_password || !inputValue.change_password) {
      toast('비밀번호를 입력해주세요.');
    } else {
      changePasswordMutate(inputValue);
    }
  };

  return (
    <Container>
      <BackgroundImage>
        <Image
          src="/landingBackground.png"
          alt="mypage Background Image"
          layout="fill"
        />
      </BackgroundImage>
      <ContentContainer>
        <SidebarWrapper>
          <Sidebar />
        </SidebarWrapper>
        <ContentChildren>
          <SectionTitle>비밀번호 변경</SectionTitle>
          <Description>
            기존 비밀번호를 입력하여 안전하게 비밀번호를 변경해보세요!
          </Description>
          <ChangeInputContainer>
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
          </ChangeInputContainer>
          <ChangeButtonContainer>
            <ChangePasswordButton onClick={onClickSuccess}>
              완료
            </ChangePasswordButton>
          </ChangeButtonContainer>
        </ContentChildren>
      </ContentContainer>
    </Container>
  );
}

const ChangePasswordButton = styled.button`
  ${design.BUTTON_PRIMARY}
  padding: 16px;
  &:hover {
    background-color: ${theme.blue[100]};
    color: ${theme.blue[500]};
  }
`;

const ChangeInputContainer = styled.div`
  ${flex.COLUMN_FLEX}
  gap: 16px;
  width: 448px;
`;

const ChangeButtonContainer = styled.div`
  ${flex.COLUMN_FLEX}
  margin-top: 50px;
  width: 448px;
`;

const Description = styled.p`
  ${font.B1};
  color: ${color.gray[500]};
  padding-top: 4px;
  margin-bottom: 50px;
`;

const SectionTitle = styled.h2`
  ${font.H1};
  color: ${color.blue[500]};
`;

const Container = styled.div`
  width: 100dvw;
  height: calc(100dvh - 60px);
  margin-top: 60px;
  ${flex.CENTER}
  position: relative;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 385px;
  width: 100dvw;
  filter: blur(20px);
  z-index: -1;
`;

const SidebarWrapper = styled.div`
  width: 250px;
  background-color: ${theme.extra.white};
`;

const ContentContainer = styled.div`
  background-color: ${theme.extra.white};
  width: 70vw;
  height: 70vh;
  border-radius: 16px;
  ${flex.FLEX}
  overflow: hidden;
`;

const ContentChildren = styled.div`
  ${flex.COLUMN_CENTER}
  padding: 32px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
`;
