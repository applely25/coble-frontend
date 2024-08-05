'use client';
import { MainContainer, PopularProject } from '@/components/page/home';
import { flex } from '@/styles';
import { styled } from '@linaria/react';

export default function Home() {
  return (
    <Layout>
      <MainContainer />
      <PopularProject />
    </Layout>
  );
}
const Layout = styled.div`
  ${flex.COLUMN_FLEX}
`;
