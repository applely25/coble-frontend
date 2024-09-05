'use client';
import { styled } from '@linaria/react';
import { useState } from 'react';
import { flex, theme } from '@/styles';

import useInputForm, { PlaceholderKeys } from '@/hooks/useInputForm';
import CheckModal from '@/components/common/CheckModal';
import Input from '@/components/common/Input';
import { AddPhotoIcon } from '@/assets/icon';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { projectSaveApi } from '@/api/project';
import Image from 'next/image';

const inputInitialData: PlaceholderKeys[] = ['title', 'description'];

export default function InfoModal() {
  const { placeholder, inputValue, onChange } = useInputForm(inputInitialData);
  const [imageFile, setImageFile] = useState<File>();
  const [imageSrc, setImageSrc] = useState('');
  const router = useRouter();

  const nav = useRouter();

  const [isOpen, setIsOpen] = useState<boolean>(true);

  const cancelButton = {
    title: '취소하기',
    onClick: () => {
      nav.push('/');
    },
  };

  const approveButton = {
    title: '저장하기',
    onClick: () => {
      if (!inputValue.title || !inputValue.description || !imageFile)
        alert('내용을 입력해주세요');
      else {
        projectSaveMutate({ ...inputValue, image: imageFile });
      }
    },
  };

  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImageFile(e.target.files[0]);
    }
  };

  const { mutate: projectSaveMutate } = useMutation({
    mutationFn: projectSaveApi,
    mutationKey: ['projectSaveApi'],
    onSuccess: ({ data }) => {
      router.push(`/coding/${data}`);
      setIsOpen(false);
    },
  });

  return (
    <>
      {isOpen && (
        <CheckModal cancelButton={cancelButton} approveButton={approveButton}>
          <FormContainer>
            <ImageContainer>
              <AddPhotoIcon />
              <input type="file" onChange={onChangeFile} />
              {/* <ImageView
              src="/landingBackground.png"
              alt="landing"
              width={355}
              height={200}
              /> */}
            </ImageContainer>
            <InputContainer>
              {inputInitialData.map((key) => (
                <Input
                  design="LABEL"
                  name={key}
                  value={inputValue[key]}
                  placeholder={placeholder[key]}
                  key={key}
                  type={key}
                  onChange={onChange}
                />
              ))}
            </InputContainer>
          </FormContainer>
        </CheckModal>
      )}
    </>
  );
}

const ImageContainer = styled.label`
  height: 200px;
  aspect-ratio: 16/9;
  background-color: ${theme.gray[50]};
  border-radius: 16px;
  ${flex.CENTER}
  cursor: pointer;
  > input {
    display: none;
  }
`;

const ImageView = styled(Image)`
  /* height: 200px;
  width: 355px;
  aspect-ratio: 16/9; */
`;

const InputContainer = styled.div`
  ${flex.COLUMN_FLEX}
  gap: 20px;
`;

const FormContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 16px;
`;
