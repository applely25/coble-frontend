import { atomWithStorage } from 'jotai/utils';

export const userContext = atomWithStorage(
  "user",
  { id: '', isLogin: false },
);
