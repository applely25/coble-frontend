'use client';

import { EyeIcon } from '@/assets/icon';
import { PlaceholderKeys } from '@/hooks/useInputForm';
import { flex, font, theme } from '@/styles';
import { styled } from '@linaria/react';
import { useState } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: PlaceholderKeys;
  design?: 'DEFAULT' | 'LABEL';
}

const Input = ({
  value,
  placeholder,
  type,
  onChange,
  design = 'DEFAULT',
  ...props
}: InputProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isPassword: boolean = type === 'password' || type === 'password_check';

  if (design === 'LABEL') {
    const labelTitle =
      type === 'title' ? '제목' : type === 'describe' ? '한 줄 소개' : '';

    return (
      <LabelContainer>
        <label htmlFor={labelTitle}>{labelTitle}</label>
        <input
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          min={1000}
          max={9999}
          {...props}
          id={labelTitle}
        />
      </LabelContainer>
    );
  } else {
    return (
      <Container>
        <input
          type={
            !isPassword
              ? type === 'verify_code'
                ? 'number'
                : 'text'
              : isOpen
                ? 'text'
                : 'password'
          }
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          min={1000}
          max={9999}
          {...props}
        />
        {isPassword && (
          <button onClick={() => setIsOpen(!isOpen)}>
            <EyeIcon isOpen={isOpen} />
          </button>
        )}
      </Container>
    );
  }
};

const Container = styled.div`
  ${flex.HORIZONTAL}
  border: 1px solid ${theme.gray[300]};
  border-radius: 16px;
  padding: 16px;
  width: 100%;
  > input {
    flex: 1;
    ${font.B1}
    &::placeholder {
      color: ${theme.gray[300]};
    }
  }
  > button {
    ${flex.CENTER}
  }
`;

const LabelContainer = styled.div`
  ${flex.COLUMN_FLEX}
  ${font.B3}
  width: 100%;
  > label {
    color: ${theme.gray[600]};
  }
  > input {
    ${font.B3}
    padding: 8px 0px;
    color: ${theme.gray[950]};
    &::placeholder {
      color: ${theme.gray[300]};
    }
    border-bottom: 1px solid ${theme.gray[200]};
  }
`;

export default Input;
