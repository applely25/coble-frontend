import { CobleLogo } from '@/assets';
import {  flex, font } from '@/styles';
import { styled } from '@linaria/react';
import Link from 'next/link';
import Navigation from './Navigation';
import LoginNav from './LoginNav';

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
`;

const LogoContainer = styled(Link)`
  ${flex.START}
  ${font.H3}
  gap: 8px;
`;

export default Header;
