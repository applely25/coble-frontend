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
import { AxiosError } from 'axios';
import { ErrorResponse } from '@/api';
import { toast } from 'react-toastify';

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
      const file = e.target.files[0];
      setImageFile(file);
      setImageSrc(URL.createObjectURL(file)); // 미리보기용 URL 생성
    }
  };

  const { mutate: projectSaveMutate } = useMutation({
    mutationFn: projectSaveApi,
    mutationKey: ['projectSaveApi'],
    onSuccess: ({ data }) => {
      router.push(`/coding/${data}`);
      setIsOpen(false);
    },
    onError: (error) => {
      const axiosError = error as AxiosError<ErrorResponse>;
      const message =
        axiosError.response?.data?.message || 'An unknown error occurred';
      toast.error(message);
    },
  });

  return (
    <>
      {isOpen && (
        <CheckModal cancelButton={cancelButton} approveButton={approveButton}>
          <FormContainer>
            <ImageContainer>
              {imageSrc && (
                <ImageView src={imageSrc} alt="미리보기 이미지" fill />
              )}
              {/* 파일 선택 버튼은 계속 렌더링 */}
              <input type="file" onChange={onChangeFile} />
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
  position: relative;
  > input {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
`;

const ImageView = styled(Image)`
  border-radius: 16px;
  object-fit: cover;
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
