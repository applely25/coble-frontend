'use client';

import { styled } from '@linaria/react';
import navigationListData from './assets/data/navigationListData';
import { flex, font, theme } from '@/styles';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import color from '../../../styles/theme';

const Navigation = () => {
  const pathname = usePathname();

  return (
    <NavList>
      {navigationListData.map((linkData) => (
        <li key={linkData.id}>
          <NavArticle
            href={linkData.href}
            pathname={pathname}
            articlehref={linkData.href}
          >
            {linkData.name}
          </NavArticle>
        </li>
      ))}
    </NavList>
  );
};

const NavList = styled.ul`
  ${flex.BETWEEN}
  list-style: none;
  width: 30%;

  ${font.H5};
  color: ${theme.gray[400]};
`;

const NavArticle = styled(Link)<{
  pathname: string;
  articlehref: string;
}>`
  color: ${({ pathname, articlehref }) =>
    pathname === articlehref ? color.blue[500] : color.gray[500]};
  text-decoration: none;
  cursor: pointer;
`;

export default Navigation;
