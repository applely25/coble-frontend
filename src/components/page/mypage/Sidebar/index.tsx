import { ArrowIcon } from '@/assets/icon';
import { design, flex, font, theme } from '@/styles';
import color from '@/styles/theme';
import { styled } from '@linaria/react';

export default function Sidebar() {
  return (
    <Container>
      <div>
        <ProfileContainer>
          <ProfileImage>profile image</ProfileImage>
          <div>
            <UserName>@jxyxong</UserName>
            <UserEmail>jyk102999@gmail.com</UserEmail>
          </div>
        </ProfileContainer>
        <SidebarNavContainer>
          <div>
            <p>정보 수정</p>
            <ArrowIcon color={color.gray[500]} size={26} />
          </div>
          <div>
            <p>비밀번호 변경</p>
            <ArrowIcon color={color.gray[500]} size={26} />
          </div>
          <div>
            <p>회원탈퇴</p>
            <ArrowIcon color={color.gray[500]} size={26} />
          </div>
        </SidebarNavContainer>
      </div>
      <Logout>로그아웃</Logout>
    </Container>
  );
}

const Container = styled.div`
  ${flex.COLUMN_BETWEEN}
  width: 280px;
  border-right: 1px solid ${theme.gray[200]};
  padding: 60px 32px 32px 32px;
  > div {
    ${flex.COLUMN_FLEX}
    gap:20px;
    width: 100%;
  }
`;

const ProfileContainer = styled.div`
  ${flex.COLUMN_CENTER}
  gap: 16px;
  > div {
    ${flex.COLUMN_CENTER}
    gap: 8px;
  }
`;
const UserName = styled.p`
  ${font.H3}
  color:${theme.blue[500]};
`;

const UserEmail = styled.p`
  ${font.B3}
  color: ${theme.gray[500]};
`;

const ProfileImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${theme.gray[200]};
  ${flex.CENTER}
`;

const SidebarNavContainer = styled.div`
  ${flex.COLUMN_FLEX}
  gap: 8px;
  > div {
    width: 100%;
    padding: 8px 16px;
    ${font.B3}
    ${flex.BETWEEN}
  }
`;

const Logout = styled.button`
  ${design.BUTTON_WHITE}
  width:100%;
  padding: 8px;
`;
