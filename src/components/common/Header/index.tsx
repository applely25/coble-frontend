import { flex, font } from '@/styles';
import { styled } from '@linaria/react';
import Link from 'next/link';
import Navigation from './Navigation';
import LoginNav from './LoginNav';
import { CobleLogo } from '@/assets/icon';

const Header = () => (
  <Conatiner>
    <LogoContainer href="/">
      <CobleLogo width={30} />
      <p>COBLO</p>
    </LogoContainer>

    <Navigation />
    <LoginNav />
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
`;

export default Header;
