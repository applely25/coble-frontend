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

  const { data: defaultValue, refetch } = useQuery({
    queryKey: ['projectInfoGetApi', projectId],
    queryFn: () => projectInfoGetApi(Number(projectId)),
  });

  const [imageFile, setImageFile] = useState<any>(defaultValue?.image);

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
      if (defaultValue.image) onChangeOne('image', defaultValue.image);
      if (defaultValue.title) onChangeOne('title', defaultValue.title);
      if (defaultValue.description)
        onChangeOne('description', defaultValue.description);
    }
  }, [defaultValue]);

  useEffect(() => {
    if (isOpen) refetch();
  }, [isOpen]);
  const [imagePreview, setImagePreview] = useState<string | null>();

  useEffect(() => {
    if (defaultValue) {
      setImagePreview(defaultValue.image);
    }
  }, [defaultValue]);
  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);

      // 파일의 URL을 생성하여 미리보기 이미지를 설정
      const fileURL = URL.createObjectURL(file);
      setImagePreview(fileURL);
    }
  };

  return (
    <CheckModal cancelButton={cancelButton} approveButton={approveButton}>
      <FormContainer>
        <ImageContainer>
          {imagePreview ? (
            <ImageView
              src={imagePreview}
              alt="미리보기 이미지"
              width={355}
              height={200}
            />
          ) : (
            <AddPhotoIcon />
          )}
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
