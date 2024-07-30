'use client';

import { EyeIcon } from '@/assets/icon';
import { PlaceholderKeys } from '@/hooks/useInputForm';
import { flex, font, theme } from '@/styles';
import { styled } from '@linaria/react';
import { useState } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: PlaceholderKeys;
}

const Input = ({
  value,
  placeholder,
  type,
  onChange,
  ...props
}: InputProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isPassword: boolean = type === 'password' || type === 'password_check';

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

export default Input;
