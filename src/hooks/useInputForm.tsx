'use client';

import { useState } from 'react';

const placeholder = {
  email: '이메일을 입력해주세요.',
  password: '비밀번호를 입력해주세요.',
  password_check: '비밀번호를 한 번 더 입력해주세요.',
  nickname: '닉네임을 입력해주세요.',
  verify_code: '인증번호 4자리를 입력해주세요.',
  title: 'COBLE',
  description: '웹 블록코딩 서비스',
  image: '',
};

export type PlaceholderKeys = keyof typeof placeholder;

const arrayToJsonObject = (
  array: PlaceholderKeys[],
): Record<PlaceholderKeys, string> => {
  return array.reduce(
    (acc, key) => {
      acc[key] = '';
      return acc;
    },
    {} as Record<PlaceholderKeys, string>,
  );
};

const useInputForm = (initialData: PlaceholderKeys[]) => {
  const [inputValue, setInputValue] = useState(arrayToJsonObject(initialData));

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const onChangeOne = (name: string, value: string) => {
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };
  return { inputValue, onChange, placeholder, onChangeOne };
};

export default useInputForm;
