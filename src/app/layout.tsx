import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ReactQueryProviders from '@/providers/ReactQueryProviders';
import JotaiProviders from '@/providers/JotaiProviders';
import { Header } from '@/components/common';
import { styled } from '@linaria/react';
import { flex } from '@/styles';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Coble',
  description: '블록 코딩으로 교육을! Coble',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <ReactQueryProviders>
          <JotaiProviders>
            <MainLayout>
              <Header />
              {children}
            </MainLayout>
          </JotaiProviders>
        </ReactQueryProviders>
      </body>
    </html>
  );
}

const MainLayout = styled.div`
  ${flex.COLUMN_FLEX}
`;
