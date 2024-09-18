'use client';

import { styled } from '@linaria/react';
import navigationListData from './assets/data/navigationListData';
import { flex, font, theme } from '@/styles';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import color from '../../../styles/theme';
import { userContext } from '@/context';
import { useAtom } from 'jotai';

const Navigation = () => {
  const pathname = usePathname();
  const [user] = useAtom(userContext);

  return (
    <NavList>
      {navigationListData.map(
        (linkData) =>
          (!linkData.login || user.isLogin) && (
            <li key={linkData.id}>
              <NavArticle
                href={linkData.href}
                pathname={pathname}
                articlehref={linkData.href}
              >
                {linkData.name}
              </NavArticle>
            </li>
          ),
      )}
    </NavList>
  );
};

const NavList = styled.ul`
  ${flex.BETWEEN}

  list-style: none;
  width: 100%;

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
