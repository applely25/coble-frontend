'use client';
import { Heart } from '@/assets/icon';
import { DefaultProfileImage } from '@/assets/image';
import { flex, font, theme } from '@/styles';
import { styled } from '@linaria/react';

export default function PopularProjectArticle() {
  return (
    <Container>
      <TitleImage>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeUMCgm6_KLvyfUutoOdxQ1ifOP5IDd1Iuaw&s"
          alt="landing"
        />
      </TitleImage>
      <Description>
        <ProfileImage src={DefaultProfileImage.src} alt="" />
        <TitleContainer>
          <p>XQUARE</p>
          <p>DSM 프로젝트 통합 서비스</p>
        </TitleContainer>
        <Heart isLiked={false} />
      </Description>
    </Container>
  );
}

const Container = styled.div`
  ${flex.COLUMN_VERTICAL}
  gap: 12px;
  padding: 8px;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

const TitleImage = styled.div`
  width: 300px;
  border-radius: 32px;
  overflow: hidden;
  > img {
    width: 100%;
    aspect-ratio: 16 / 9;
  }
`;

const Description = styled.div`
  ${flex.BETWEEN}
  width: 255px;
  gap: 8px;
`;

const ProfileImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

const TitleContainer = styled.div`
  flex: 1;
  ${flex.COLUMN_FLEX}
  ${font.C1}
  > p:first-child {
    ${font.B4}
    color:${theme.gray[500]}
  }
`;
