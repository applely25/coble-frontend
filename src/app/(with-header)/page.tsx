'use client';
import { MainContainer, PopularProject } from '@/components/page/home';
import { userContext } from '@/context';
import { flex } from '@/styles';
import { styled } from '@linaria/react';
import { useAtom } from 'jotai';

export default function Home() {
  const [user] = useAtom(userContext);
  return (
    <Layout>
      <MainContainer />
      {user.isLogin && <PopularProject />}
    </Layout>
  );
}
const Layout = styled.div`
  ${flex.COLUMN_FLEX}
`;
