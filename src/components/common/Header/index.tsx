import Link from 'next/link';

import { flex, font } from '@/styles';
import { styled } from '@linaria/react';
import { CobleLogo } from '@/assets/icon';

import Navigation from './Navigation';
import LoginNav from './LoginNav';
import BurgerBar from './BurgerBar';

const Header = () => (
  <Conatiner>
    <LogoContainer href="/">
      <CobleLogo width={30} />
      <p>COBLO</p>
    </LogoContainer>

    <DesktopContainer width={30}>
      <Navigation />
    </DesktopContainer>

    <DesktopContainer>
      <LoginNav />
    </DesktopContainer>

    <BurgerBar />
  </Conatiner>
);

const Conatiner = styled.header`
  ${flex.BETWEEN}
  padding: 5px 5vw;
  background-color: white;
  position: fixed;
  width: 100%;
  z-index: 100;
`;

const LogoContainer = styled(Link)`
  ${flex.START}
  ${font.H3}
  gap: 8px;

  @media screen and (max-width: 768px) {
    > p:last-child {
      display: none;
    }
  }
`;

const DesktopContainer = styled.div<{
  width?: number;
}>`
  width: ${({ width }) => (width ? width : '10')}vw;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export default Header;
