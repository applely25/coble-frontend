'use client';
import { projectType } from '@/api/project';
import { Heart } from '@/assets/icon';
import { DefaultProfileImage } from '@/assets/image';
import { flex, font, theme } from '@/styles';
import { styled } from '@linaria/react';
import { useRouter } from 'next/navigation';

export default function PopularProjectArticle({
  id,
  image,
  profile,
  title,
  description,
  like_status,
  is_mine,
}: projectType) {
  const nav = useRouter();
  return (
    <Container
      onClick={() =>
        is_mine ? nav.push(`/coding/${id}`) : nav.push(`/project/${id}`)
      }
    >
      <TitleImage>
        <img src={image} alt="landing" />
      </TitleImage>
      <Description>
        <ProfileImage src={profile || DefaultProfileImage.src} alt="" />
        <TitleContainer>
          <p>{title}</p>
          <p>{description}</p>
        </TitleContainer>
        <Heart isLiked={like_status} />
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
