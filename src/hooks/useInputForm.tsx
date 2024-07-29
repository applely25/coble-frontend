'use client';

import { useState } from 'react';

const arrayToJsonObject = (array: string[]): Record<string, string> => {
  return array.reduce(
    (acc, key) => {
      acc[key] = '';
      return acc;
    },
    {} as Record<string, string>,
  );
};

const useInputForm = (initialData: string[]) => {
  const [inputValue, setInputValue] = useState(arrayToJsonObject(initialData));

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  return { inputValue, onChange };
};

export default useInputForm;
