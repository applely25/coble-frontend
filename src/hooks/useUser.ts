'use client';

import { TOKEN } from '@/constants';
import { userContext } from '@/context';
import { Storage } from '@/storage';
import { useQuery } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import { useEffect } from 'react';

const useUser = () => {
  const [user, setUser] = useAtom(userContext);

  const { data: userInfo } = useQuery({
    queryKey: ['user'],
    queryFn: () => {},
    enabled: !!Storage.getItem(TOKEN.ACCESS),
  });

  useEffect(() => {
    if (userInfo) setUser(userInfo);
  }, [setUser, userInfo]);

  return {
    user,
    isLoggedIn: !!userInfo,
  };
};

export default useUser;
