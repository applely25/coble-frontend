import { CobleLogo } from '@/assets/icon';
import { userContext } from '@/context';
import useTypeingAnimation from '@/hooks/useTypeingAnimation';
import { design, flex, font, theme } from '@/styles';
import { styled } from '@linaria/react';
import { useAtom } from 'jotai';
import Image from 'next/image';
import Link from 'next/link';

export default function MainContainer() {
  const CobleTitle = useTypeingAnimation({ text: 'CODE BLOCK' });
  const [user] = useAtom(userContext);
  return (
    <Container>
      <BackgroundImage
        src="/landingBackground.png"
        alt="landing"
        layout="fill"
        objectFit="cover"
      />
      <LogoTitle>
        <CobleLogo fill={theme.extra.white} size={100} />
        <div>
          <h1>{CobleTitle}</h1>
          <p>‘코블’ 로 신세계를 경험해보세요!</p>
        </div>
      </LogoTitle>
      {}
      <GoLinkButton href={user.isLogin ? '/coding/new' : '/login'}>
        코딩하러 가기
      </GoLinkButton>
    </Container>
  );
}

const BackgroundImage = styled(Image)`
  z-index: -1;
  filter: blur(5px);
`;

const Container = styled.div`
  height: 100dvh;
  width: 100vw;

  ${flex.COLUMN_CENTER}

  gap: 40px;

  /* 화샇표 after */
  ::after {
    position: absolute;
    left: 50%;
    top: 95%;
    content: '';
    width: 20px;
    height: 20px;
    border-top: 2px solid ${theme.extra.white};
    border-right: 2px solid ${theme.extra.white};

    transform: translate(-50%, -100%) rotate(135deg);
    animation: arrrowUpandDown 1s infinite;
  }

  @keyframes arrrowUpandDown {
    0% {
      transform: translate(-50%, -100%) rotate(135deg);
      opacity: 1;
    }
    50% {
      transform: translate(-50%, -90%) rotate(135deg);
      opacity: 0.4;
    }
    100% {
      transform: translate(-50%, -100%) rotate(135deg);
      opacity: 1;
    }
  }
`;

const LogoTitle = styled.div`
  ${flex.COLUMN_CENTER}
  gap: 20px;
  > div {
    color: ${theme.extra.white};
    ${font.H5}
    text-align: center;
    > h1 {
      font-size: 5rem;
      line-height: 5rem;
    }
  }
`;

const GoLinkButton = styled(Link)`
  ${design.BUTTON_PRIMARY}
  ${font.H4}
  border-radius: 32px;
  padding: 12px 64px;

  transition: all 0.2s;
  &:hover {
    box-shadow: 0 0 10px 0 ${theme.blue[300]};
  }
`;
