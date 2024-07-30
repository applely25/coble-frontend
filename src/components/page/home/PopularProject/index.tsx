import { PopularProjectArticle } from '@/components/common';
import { design, flex, font, theme } from '@/styles';
import { styled } from '@linaria/react';
import Link from 'next/link';

export default function PopularProject() {
  return (
    <Container>
      <TitleContainer>
        <h1>인기 프로젝트</h1>
        <p>
          공유된 프로젝트들 중 <span>인기 프로젝트를 확인</span>해보세요!
        </p>
      </TitleContainer>
      <PopularProjectContainer>
        <PopularProjectArticle />
        <PopularProjectArticle />
        <PopularProjectArticle />
        <PopularProjectArticle />
        <PopularProjectArticle />
        <PopularProjectArticle />
      </PopularProjectContainer>
      <MoreProjectButton href="/">더 많은 프로젝트 보러가기</MoreProjectButton>
    </Container>
  );
}

const Container = styled.div`
  min-height: calc(100dvh - 60px);
  padding: 100px 5vw;
  ${flex.COLUMN_CENTER}
  gap: 30px;
`;

const TitleContainer = styled.div`
  text-align: center;
  ${font.B2}
  > h1 {
    ${font.H2}
    color:${theme.blue[500]}
  }
  span {
    color: ${theme.blue[500]};
  }
`;

const PopularProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const MoreProjectButton = styled(Link)`
  ${design.BUTTON_WHITE}
  ${font.B3}
  border-color: ${theme.blue[300]};
  color: ${theme.blue[300]};
`;
