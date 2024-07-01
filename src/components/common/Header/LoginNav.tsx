'use client';

import useUser from '@/hooks/useUser';
import { design, font, theme } from '@/styles';
import { styled } from '@linaria/react';
import Link from 'next/link';

const LoginNav = () => {
  const { isLoggedIn } = useUser();

  return (
    <>
      {isLoggedIn ? (
        <UserName href="/mypage">jyk1029 님</UserName>
      ) : (
        <LoginButton href="/login">로그인</LoginButton>
      )}
    </>
  );
};

const LoginButton = styled(Link)`
  ${design.BUTTON}
`;

const UserName = styled(Link)`
  ${font.B1}
  color:${theme.gray[800]}
`;

export default LoginNav;
