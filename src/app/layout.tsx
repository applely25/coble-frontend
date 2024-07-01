import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ReactQueryProviders from '@/providers/ReactQueryProviders';
import JotaiProviders from '@/providers/JotaiProviders';

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
          <JotaiProviders>{children}</JotaiProviders>
        </ReactQueryProviders>
      </body>
    </html>
  );
}
