'use client';
import { Sidebar } from '@/components/page/mypage';
import useInputForm, { PlaceholderKeys } from '@/hooks/useInputForm';
import { design, flex, font, theme } from '@/styles';
import color from '@/styles/theme';
import { styled } from '@linaria/react';
import Image from 'next/image';
import Input from '@/components/common/Input';
import { useMutation } from '@tanstack/react-query';
import { deleteUserApi } from '@/api/users';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import DeleteModal from '@/components/page/mypage/DeleteModal';
import { useState } from 'react';
import { Storage } from '@/storage';
import { useAtom } from 'jotai';
import { userContext } from '@/context';

const inputInitialData: PlaceholderKeys[] = ['password'];
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
export default function DeleteAccount() {
  const { inputValue, onChange, placeholder } = useInputForm(inputInitialData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const nav = useRouter();
  const [, setUser] = useAtom(userContext);


  const { mutate: deleteUserMutate } = useMutation({
    mutationFn: (data: { password: string }) => deleteUserApi(data.password),
    mutationKey: ['deleteUser'],
    onSuccess: () => {
      toast('회원탈퇴가 완료되었습니다.');
      Storage.delItem('access_token')
      Storage.delItem('refresh_token')
      setUser({id:'', isLogin:false})
      nav.push('/');
    },
  });

  const cancelButton = {
    title: '취소하기',
    onClick: () => {
      setIsModalOpen(false);
    },
  };

  const onClickModal = () => {
    setIsModalOpen(true);
  };

  const approveButton = {
    title: '탈퇴하기',
    onClick: () => {
      if (!inputValue.password) {
        toast('비밀번호를 입력해주세요.');
      } else if (!passwordRegex.test(inputValue.password)) {
        toast('비밀번호가 형식에 맞지 않습니다.');
      } else {
        deleteUserMutate(inputValue);
      }
    },
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
          <SectionTitle>회원탈퇴</SectionTitle>
          <Description>비밀번호 입력 후 탈퇴할 수 있습니다.</Description>
          <DeleteInputContainer>
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
          </DeleteInputContainer>
          <DeleteButtonContainer>
            <DeleteButton onClick={onClickModal}>회원 탈퇴하기</DeleteButton>
          </DeleteButtonContainer>
        </ContentChildren>
      </ContentContainer>
      {isModalOpen && (
        <DeleteModal
          children={
            <ModalContainer>
              <SectionTitle>회원탈퇴</SectionTitle>
              <Description>
                계정 탈퇴 후, 복구할 수 없습니다. 탈퇴하시겠습니까?
              </Description>
            </ModalContainer>
          }
          cancelButton={cancelButton}
          approveButton={approveButton}
        />
      )}
    </Container>
  );
}

const ModalContainer = styled.div`
  ${flex.COLUMN_CENTER};
  gap: 24px;
`;

const DeleteInputContainer = styled.div`
  ${flex.COLUMN_FLEX}
  width: 448px;
`;

const DeleteButton = styled.button`
  width: 448px;
  padding: 4px 16px;
  border-radius: 16px;
  border: 1px solid ${theme.extra.red};
  color: ${theme.extra.red};
  transition:
    background-color 0.2s,
    color 0.2s;
  padding: 16px;
  ${font.B1}

  &:hover {
    background-color: ${theme.extra.red};
    color: ${theme.extra.white};
  }
`;

const DeleteButtonContainer = styled.div`
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
  color: ${color.extra.red};
`;

const SidebarWrapper = styled.div`
  width: 250px;
  background-color: ${theme.extra.white};
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

const ContentContainer = styled.div`
  background-color: ${theme.extra.white};
  width: 70vw;
  height: 70vh;
  border-radius: 16px;
  overflow-y: auto;
  ${flex.FLEX}
`;

const ContentChildren = styled.div`
  ${flex.COLUMN_CENTER}
  padding: 32px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
`;
