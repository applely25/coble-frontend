'use client';

import { ArrowIcon, BurgerIcon, CloseIcon, CobleLogo } from '@/assets/icon';
import { flex, font, theme } from '@/styles';
import { styled } from '@linaria/react';
import { useEffect, useRef, useState } from 'react';
import navigationListData from './assets/data/navigationListData';
import color from '../../../styles/theme';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LoginNav from './LoginNav';

const BurgerBar = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsBurgerOpen(false);
  }, [pathname]);

  return (
    <MainContainer>
      <BurgerButton onClick={() => setIsBurgerOpen(true)}>
        {!isBurgerOpen && <BurgerIcon />}
      </BurgerButton>

      <SideBarContainer id="sidebar" className={isBurgerOpen ? 'open' : ''}>
        <Header>
          <Link href="/">
            <CobleLogo width={30} />
          </Link>
          <BurgerButton onClick={() => setIsBurgerOpen(false)}>
            <CloseIcon />
          </BurgerButton>
        </Header>
        <ContentContainer>
          <nav>
            <ul>
              {navigationListData.map((linkData) => (
                <li key={linkData.name}>
                  <NavListTitle pathname={pathname} articlehref={linkData.href}>
                    {linkData.name}
                  </NavListTitle>
                  <Link href={linkData.href}>
                    <ArrowIcon />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <LoginContainer>
            <LoginNav />
          </LoginContainer>
        </ContentContainer>
      </SideBarContainer>
    </MainContainer>
  );
};

export default BurgerBar;

const MainContainer = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const BurgerButton = styled.button`
  cursor: pointer;
`;

const SideBarContainer = styled.div`
  z-index: 5;
  height: 100dvh;
  width: 100%;
  right: -100%;
  top: 0;
  position: fixed;
  transition: 0.5s ease;
  &.open {
    right: 0;
    transition: right 0.5s;
  }
  ${flex.COLUMN_FLEX}
  padding-bottom: 16px;
  gap: 16px;
  background-color: ${theme.extra.white};
  padding: 16px 5vw;
`;

const Header = styled.div`
  ${flex.BETWEEN}
  width: 100%;
`;

const ContentContainer = styled.div`
  width: 100%;
  ${flex.COLUMN_FLEX}
  justify-content: space-between;
  height: 100%;
  ul {
    ${flex.COLUMN_FLEX}
    gap: 20px;
  }
  li {
    ${flex.BETWEEN}
    ${font.B2}
    color: ${theme.gray[400]};
  }
`;

const NavListTitle = styled.p<{
  pathname: string;
  articlehref: string;
}>`
  color: ${({ pathname, articlehref }) =>
    pathname === articlehref ? color.blue[500] : color.gray[500]};
`;

const LoginContainer = styled.div``;
