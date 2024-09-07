'use client';
import { Sidebar } from '@/components/page/mypage';
import { flex, theme } from '@/styles';
import { styled } from '@linaria/react';
import Image from 'next/image';

export default function DeleteAccount() {
  return (
    <Container>
      <BackgroundImage>
        <Image
          src="/landingBackground.png"
          alt="mypage Background Image"
          layout="fill"
        />
      </BackgroundImage>
      <ContentContainer>
        <SidebarWrapper>
          <Sidebar />
        </SidebarWrapper>
        <ContentChildren></ContentChildren>
      </ContentContainer>
    </Container>
  );
}

const SidebarWrapper = styled.div`
  width: 250px;
  background-color: ${theme.extra.white};
`;

const Container = styled.div`
  width: 100dvw;
  height: calc(100dvh - 60px);
  margin-top: 60px;
  ${flex.CENTER}
  position: relative;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 385px;
  width: 100dvw;
  filter: blur(20px);
  z-index: -1;
`;

const ContentContainer = styled.div`
  background-color: ${theme.extra.white};
  width: 70vw;
  height: 70vh;
  border-radius: 16px;
  overflow-y: auto;
  ${flex.FLEX}
`;

const ContentChildren = styled.div`
  flex: 1;
`;
