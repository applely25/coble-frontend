'use client';
import { Sidebar } from '@/components/page/mypage';
import { flex, font, theme } from '@/styles';
import color from '@/styles/theme';
import { styled } from '@linaria/react';
import Image from 'next/image';
import Input from '@/components/common/Input';

export default function ChangePassword() {
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
        <ContentChildren>
          <SectionTitle>비밀번호 변경</SectionTitle>
          <Description>
            기존 비밀번호를 입력하여 안전하게 비밀번호를 변경해보세요!
          </Description>
          {/* <Input
              name={key}
              value={inputValue[key]}
              placeholder={placeholder[key]}
              key={key}
              type={key}
              onChange={onChange}
            /> */}
        </ContentChildren>
      </ContentContainer>
    </Container>
  );
}

const Description = styled.p`
  ${font.B1};
  color: ${color.gray[500]};
  padding-top: 4px;
  margin-bottom: 50px;
`;

const SectionTitle = styled.h2`
  ${font.H1};
  color: ${color.blue[500]};
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

const ContentWrapper = styled.div`
  display: flex;
  width: 70vw;
  height: 70vh;
  border-radius: 16px;
  /* overflow: hidden; */
`;

const SidebarWrapper = styled.div`
  width: 250px;
  background-color: ${theme.extra.white};
`;

const ContentContainer = styled.div`
  background-color: ${theme.extra.white};
  width: 70vw;
  height: 70vh;
  border-radius: 16px;
  ${flex.FLEX}
  overflow: hidden;
`;

const ContentChildren = styled.div`
  ${flex.COLUMN_CENTER}
  padding: 32px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
`;
