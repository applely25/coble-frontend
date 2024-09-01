'use client';
import { useEffect, useState } from 'react';
import { styled } from '@linaria/react';
import { flex, theme } from '@/styles';
import Image from 'next/image';

import { AddPhotoIcon } from '@/assets/icon';
import Input from '@/components/common/Input';
import CheckModal from '@/components/common/CheckModal';
import useInputForm, { PlaceholderKeys } from '@/hooks/useInputForm';
import { useMutation, useQuery } from '@tanstack/react-query';
import { projectInfoGetApi, projectInfoUpdateApi } from '@/api/project';
import { toast } from 'react-toastify';
import { useParams } from 'next/navigation';

interface UpdateInfoModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const inputInitialData: PlaceholderKeys[] = ['title', 'description'];

export default function UpdateInfoModal({
  isOpen,
  setIsOpen,
}: UpdateInfoModalProps) {
  const { projectId } = useParams();

  const { placeholder, inputValue, onChange, onChangeOne } =
    useInputForm(inputInitialData);
  const [imageFile, setImageFile] = useState<File>();

  const { data: defaultValue, refetch } = useQuery({
    queryKey: ['projectInfoGetApi'],
    queryFn: () => projectInfoGetApi(Number(projectId)),
  });

  const { mutate: projectInfoUpdateMutate } = useMutation({
    mutationFn: projectInfoUpdateApi,
    mutationKey: ['projectInfoUpdateApi'],
    onSuccess: () => {
      toast.success('프로젝트 정보 수정 성공');
      setIsOpen(false);
    },
    onError: () => {
      toast.error('프로젝트 정보 수정 실패');
      setIsOpen(false);
    },
  });

  const cancelButton = {
    title: '취소하기',
    onClick: () => {
      setIsOpen(false);
    },
  };

  const approveButton = {
    title: '수정하기',
    onClick: () => {
      if (!inputValue.title || !inputValue.description || !imageFile)
        alert('내용을 입력해주세요');
      else {
        projectInfoUpdateMutate({
          ...inputValue,
          image: imageFile,
          projectId: Number(projectId),
        });
      }
    },
  };

  useEffect(() => {
    if (defaultValue) {
      console.log(defaultValue);
      if (defaultValue.image) onChangeOne('image', defaultValue.image);
      if (defaultValue.title) onChangeOne('title', defaultValue.title);
      if (defaultValue.description)
        onChangeOne('description', defaultValue.description);
    }
  }, [defaultValue]);

  useEffect(() => {
    if (isOpen) refetch();
  }, [isOpen]);

  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImageFile(e.target.files[0]);
    }
  };

  return (
    <CheckModal cancelButton={cancelButton} approveButton={approveButton}>
      <ImageContainer>
        <AddPhotoIcon />
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
    </CheckModal>
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
