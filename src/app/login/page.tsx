'use client';
import Input from '@/components/common/Input';
import useInputForm from '@/hooks/useInputForm';
import { flex } from '@/styles';
import { styled } from '@linaria/react';

export default function Login() {
  const initialData: string[] = ['email', 'password'];
  const { inputValue, onChange } = useInputForm(initialData);

  return (
    <Layout>
      {initialData.map((key) => (
        <Input
          value={inputValue[key]}
          onChange={onChange}
          name={key}
          key={key}
        />
      ))}
    </Layout>
  );
}

const Layout = styled.div`
  width: 100dvw;
  height: 100dvh;

  ${flex.CENTER}
`;
