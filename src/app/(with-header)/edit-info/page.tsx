'use client';
import { DefaultProfileImage } from '@/assets/image';
import { Sidebar } from '@/components/page/mypage';
import { design, flex, font, theme } from '@/styles';
import color from '@/styles/theme';
import { styled } from '@linaria/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import axios from 'axios';
import useInputForm, { PlaceholderKeys } from '@/hooks/useInputForm';
import Input from '@/components/common/Input';
import { useMutation } from '@tanstack/react-query';
import { editInfoApi } from '@/api/users';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export default function EditInfo() {
  const inputInitialData: PlaceholderKeys[] = ['edit_nickname'];
  const { inputValue, onChange, placeholder } = useInputForm(inputInitialData);
  const fileInput = useRef<HTMLInputElement | null>(null);
  const [imageFile, setImageFile] = useState<File>();
  const nav = useRouter();

  const handleClick = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };

  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImageFile(e.target.files[0]);
    }
  };

  const { mutate: editInfoMutate } = useMutation({
    mutationFn: editInfoApi,
    mutationKey: ['editInfoApi'],
    onSuccess: ({ data }) => {
      toast('정보가 수정되었습니다.');
      nav.push('/');
    },
  });

  const onClickSuccess = () => {
    if (!inputValue.edit_nickname || !imageFile) toast('내용을 입력해주세요.');
    else {
      editInfoMutate({ ...inputValue, profile: imageFile });
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
          <SectionTitle>정보 수정</SectionTitle>
          <Description>닉네임과 프로필을 수정해보세요!</Description>
          <ProfileContainer>
            <ProfileImage src={DefaultProfileImage.src} alt="" />
            <ProfileWrapper>
              <ChangeProfileText onClick={handleClick}>
                프로필 변경
              </ChangeProfileText>
              <HiddenInput
                type="file"
                accept="image/jpg, image/jpeg, image/png"
                ref={fileInput}
                onChange={onChangeFile}
              />
            </ProfileWrapper>
          </ProfileContainer>
          <EditInputContainer>
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
          </EditInputContainer>
          <EditInfoButtonContainer>
            <EditInfoButton onClick={onClickSuccess}>완료</EditInfoButton>
          </EditInfoButtonContainer>
        </ContentChildren>
      </ContentContainer>
    </Container>
  );
}

const EditInputContainer = styled.div`
  ${flex.COLUMN_FLEX}
  width: 448px;
  margin-top: 25px;
`;

const ProfileWrapper = styled.div`
  ${flex.CENTER}
`;

const HiddenInput = styled.input`
  display: none;
`;

const EditInfoButton = styled.button`
  ${design.BUTTON_PRIMARY}
  padding: 16px;
  &:hover {
    background-color: ${theme.blue[100]};
    color: ${theme.blue[500]};
  }
`;

const EditInfoButtonContainer = styled.div`
  ${flex.COLUMN_FLEX}
  margin-top: 50px;
  width: 448px;
`;

const ChangeProfileText = styled.span`
  ${font.B3}
  color: ${theme.extra.black};
  text-decoration: underline;
  cursor: pointer;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const ProfileContainer = styled.div`
  ${flex.COLUMN_CENTER}
  gap: 8px;
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
