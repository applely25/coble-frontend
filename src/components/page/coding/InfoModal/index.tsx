'use client';
import { styled } from '@linaria/react';
import { useState } from 'react';
import { flex, theme } from '@/styles';

import useInputForm, { PlaceholderKeys } from '@/hooks/useInputForm';
import CheckModal from '@/components/common/CheckModal';
import Input from '@/components/common/Input';
import { AddPhotoIcon } from '@/assets/icon';

const inputInitialData: PlaceholderKeys[] = ['title', 'describe'];

export default function InfoModal() {
  const { placeholder, inputValue, onChange } = useInputForm(inputInitialData);

  const [isOpen, setIsOpen] = useState<boolean>(true);

  const cancelButton = {
    title: '취소하기',
    onClick: () => {},
  };

  const approveButton = {
    title: '저장하기',
    onClick: () => {
      setIsOpen(false);
    },
  };

  return (
    <>
      {isOpen && (
        <CheckModal cancelButton={cancelButton} approveButton={approveButton}>
          <ImageContainer>
            <AddPhotoIcon />
            <input type="file" />
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

const Image = styled.image`
  height: 200px;
  aspect-ratio: 16/9;
`;

const InputContainer = styled.div`
  ${flex.COLUMN_FLEX}
  gap: 20px;
`;
