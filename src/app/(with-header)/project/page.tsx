'use client';
import { Sidebar } from '@/components/page/mypage';
import { flex, font, theme } from '@/styles';
import color from '@/styles/theme';
import { styled } from '@linaria/react';
import Image from 'next/image';

export default function Project() {
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
        <Sidebar />
        <ContentChildren>
          <MainTitle>진행 중인 프로젝트</MainTitle>
          <Description>
            자신이 만들고 있는 프로젝트들을 확인해보세요!
          </Description>
          <ProjectContainer>
            <ProjectInProgressCard>
              <ProjectImage />
            </ProjectInProgressCard>
          </ProjectContainer>
        </ContentChildren>
      </ContentContainer>
    </Container>
  );
}

const ProjectImage = styled.image`
  width: 300px;
  height: 168px;
  src: '/landingBackground.png';
  alt: 'project image';
  border-radius: 32px;
`;

const ProjectInProgressCard = styled.div`
  ${flex.FLEX};
  width: 324px;
  height: 242px;
  border-radius: 12px;
  background-color: ${color.blue[50]};
  padding: 12px;
`;

const ProjectContainer = styled.div`
  margin-top: 10px;
  overflow-x: auto;
  width: 100%;
`;

const Description = styled.p`
  ${font.B1}
  color: ${color.gray[500]};
`;

const MainTitle = styled.span`
  ${font.H5}
  color: ${color.blue[500]};
  ${flex.FLEX}
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
  height: 100%;
  margin: 32px 0px 0px 32px;
`;
