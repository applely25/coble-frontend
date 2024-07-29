'use client';

import { EyeIcon } from '@/assets/icon';
import { flex, font, theme } from '@/styles';
import { styled } from '@linaria/react';
import { useState } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({
  value,
  placeholder,
  type,
  onChange,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isPassword: boolean = type === 'password';

  return (
    <Container>
      <input
        type={!isPassword ? 'text' : isOpen ? 'text' : 'password'}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
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
  width: 448px;
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
