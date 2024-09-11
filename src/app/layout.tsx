import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ReactQueryProviders from '@/providers/ReactQueryProviders';
import JotaiProviders from '@/providers/JotaiProviders';
import { Header } from '@/components/common';
import { styled } from '@linaria/react';
import { flex } from '@/styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] });

interface PageProps {
  pathname?: string;
}

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
      <head>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
      </head>
      <body className={inter.className}>
        <ReactQueryProviders>
          <JotaiProviders>
            <MainLayout>
              <ToastContainer autoClose={1500} limit={3} />
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
