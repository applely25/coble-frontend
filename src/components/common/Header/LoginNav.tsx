'use client';

import { TOKEN } from '@/constants';
import { userContext } from '@/context';
import { Storage } from '@/storage';
import { design, font, theme } from '@/styles';
import { styled } from '@linaria/react';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { useEffect } from 'react';

const LoginNav = () => {
  const [user, setUser] = useAtom(userContext);

  useEffect(() => {
    const refreshCookie = Storage.getItem('access_token');
    if (!refreshCookie) setUser({ ...user, isLogin: false });
  }, []);

  return (
    <>
      {user.isLogin ? (
        <UserName href="/project">{user.id} 님</UserName>
      ) : (
        <LoginButton href="/login">로그인</LoginButton>
      )}
    </>
  );
};

const LoginButton = styled(Link)`
  ${design.BUTTON_WHITE}

  transition: background-color 0.2s, color 0.2s;
  &:hover {
    background-color: ${theme.blue[500]};
    color: ${theme.blue[50]};
  }
`;

const UserName = styled(Link)`
  ${font.B1}
  color:${theme.gray[800]}
`;

export default LoginNav;
