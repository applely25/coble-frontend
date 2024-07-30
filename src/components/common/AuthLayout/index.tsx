import { CobleLogo } from '@/assets/icon';
import { flex, font, theme } from '@/styles';
import { styled } from '@linaria/react';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
}

const AuthLayout = ({ children, title }: Readonly<AuthLayoutProps>) => {
  return (
    <Container>
      <Logo>
        <CobleLogo />
        <p>{title}</p>
      </Logo>
      <ChildernContainer>{children}</ChildernContainer>
    </Container>
  );
};

const Container = styled.div`
  ${flex.COLUMN_CENTER}
  gap: 24px;
  padding: 30px 5%;
  border-radius: 32px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Logo = styled.div`
  ${flex.COLUMN_CENTER};
  gap: 8px;
  > p {
    ${font.H3}
    color:${theme.blue[500]}
  }
`;

const ChildernContainer = styled.div`
  ${flex.COLUMN_CENTER}
  gap: 24px;
  width: 25dvw;
  min-width: 300px;
`;

export default AuthLayout;
