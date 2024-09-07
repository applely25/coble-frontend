'use client';
import { PopularProjectArticle } from '@/components/common';
import { Sidebar } from '@/components/page/mypage';
import { flex, font, theme } from '@/styles';
import color from '@/styles/theme';
import { styled } from '@linaria/react';
import Image from 'next/image';

const inProgressProjectArticles = [
  {
    imageSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeUMCgm6_KLvyfUutoOdxQ1ifOP5IDd1Iuaw&s',
    title1: 'XQUARE',
    description: 'DSM 프로젝트 통합 서비스',
    isLiked: false,
  },
  {
    imageSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeUMCgm6_KLvyfUutoOdxQ1ifOP5IDd1Iuaw&s',
    title1: 'XQUARE',
    description: 'DSM 프로젝트 통합 서비스',
    isLiked: false,
  },
  {
    imageSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeUMCgm6_KLvyfUutoOdxQ1ifOP5IDd1Iuaw&s',
    title1: 'XQUARE',
    description: 'DSM 프로젝트 통합 서비스',
    isLiked: false,
  },
  {
    imageSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeUMCgm6_KLvyfUutoOdxQ1ifOP5IDd1Iuaw&s',
    title1: 'XQUARE',
    description: 'DSM 프로젝트 통합 서비스',
    isLiked: false,
  },
];

const heartProjectArticles = [
  {
    imageSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeUMCgm6_KLvyfUutoOdxQ1ifOP5IDd1Iuaw&s',
    title1: 'XQUARE',
    description: 'DSM 프로젝트 통합 서비스',
    isLiked: false,
  },
  {
    imageSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeUMCgm6_KLvyfUutoOdxQ1ifOP5IDd1Iuaw&s',
    title1: 'XQUARE',
    description: 'DSM 프로젝트 통합 서비스',
    isLiked: false,
  },
  {
    imageSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeUMCgm6_KLvyfUutoOdxQ1ifOP5IDd1Iuaw&s',
    title1: 'XQUARE',
    description: 'DSM 프로젝트 통합 서비스',
    isLiked: false,
  },
  {
    imageSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeUMCgm6_KLvyfUutoOdxQ1ifOP5IDd1Iuaw&s',
    title1: 'XQUARE',
    description: 'DSM 프로젝트 통합 서비스',
    isLiked: false,
  },
];

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
          <SectionTitle>진행 중인 프로젝트</SectionTitle>
          <Description>
            자신이 만들고 있는 프로젝트들을 확인해보세요!
          </Description>
          <ScrollableProjectList>
            {inProgressProjectArticles.map((article, index) => (
              <PopularProjectArticle
                key={index}
                imageSrc={article.imageSrc}
                title1={article.title1}
                description={article.description}
                isLiked={article.isLiked}
              />
            ))}
          </ScrollableProjectList>
          <SectionTitle>좋아요 누른 프로젝트</SectionTitle>
          <Description>
            자신이 좋아요 누른 프로젝트들을 확인해보세요!
          </Description>
          <ScrollableProjectList>
            {heartProjectArticles.map((article, index) => (
              <PopularProjectArticle
                key={index}
                imageSrc={article.imageSrc}
                title1={article.title1}
                description={article.description}
                isLiked={article.isLiked}
              />
            ))}
          </ScrollableProjectList>
        </ContentChildren>
      </ContentContainer>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: calc(100vh - 60px);
  margin-top: 60px;
  ${flex.CENTER}
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 385px;
  width: 100vw;
  filter: blur(20px);
  z-index: -1;
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
  ${flex.COLUMN_FLEX}
  padding: 32px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
`;

const SectionTitle = styled.h2`
  ${font.H5};
  color: ${color.blue[500]};
`;

const Description = styled.p`
  ${font.B1};
  color: ${color.gray[500]};
  margin-bottom: 16px;
`;

const ScrollableProjectList = styled.div`
  ${flex.FLEX}
  gap: 16px;
  overflow-x: auto;
  padding: 0 8px;
  margin-bottom: 16px;

  &::-webkit-scrollbar-thumb {
    background-color: ${color.gray[300]};
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${color.gray[100]};
  }
`;
