import { ArrowIcon } from '@/assets/icon';
import { design, flex, font, theme } from '@/styles';
import color from '@/styles/theme';
import { styled } from '@linaria/react';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { myInfoApi } from '@/api/users';
import { useQuery } from '@tanstack/react-query';
import { DefaultProfileImage } from '@/assets/image';

const Nav = [
  { title: '관련 프로젝트 확인', value: '/project' },
  { title: '정보 수정', value: '/edit-info' },
  { title: '비밀번호 변경', value: '/change-password' },
  { title: '회원탈퇴', value: '/delete-account' },
];

interface MyInfoApiResponse {
  profile: string;
  nickname: string;
  email: string;
}

export default function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const nav = useRouter();
  const { data } = useQuery<MyInfoApiResponse>({
    queryKey: ['myInfo'],
    queryFn: myInfoApi,
  });

  useEffect(() => {
    const currentPath = window.location.pathname;
    const activeNavIndex = Nav.findIndex((nav) => nav.value === currentPath);
    if (activeNavIndex !== -1) {
      setActiveIndex(activeNavIndex);
    }
  }, []);

  const handleCardClick = (index: number) => {
    if (activeIndex !== index) {
      setActiveIndex(index);
      nav.push(Nav[index].value);
    }
  };

  return (
    <Container>
      <div>
        <ProfileContainer>
          <ProfileImage
            src={data?.profile || DefaultProfileImage.src}
            alt="profile"
          />
          <div>
            <UserName>{data?.nickname}</UserName>
            <UserEmail>{data?.email}</UserEmail>
          </div>
        </ProfileContainer>
        <SidebarNavContainer>
          {Nav.map((v, index) => (
            <SidebarNav
              key={index}
              isActive={activeIndex === index}
              onClick={() => handleCardClick(index)}
            >
              <p>{v.title}</p>
              <ArrowIcon color={color.gray[500]} size={26} />
            </SidebarNav>
          ))}
        </SidebarNavContainer>
      </div>
      <Logout>로그아웃</Logout>
    </Container>
  );
}

const Container = styled.div`
  ${flex.COLUMN_BETWEEN}
  width: 280px;
  height: 100%;
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

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${theme.gray[200]};
  ${flex.CENTER}
`;

const SidebarNavContainer = styled.div`
  ${flex.COLUMN_FLEX}
  gap: 8px;
  cursor: pointer;
`;

const SidebarNav = styled.div<{ isActive: boolean }>`
  width: 100%;
  padding: 8px 16px;
  ${font.B3}
  ${flex.BETWEEN}
  background-color: ${(props) =>
    props.isActive ? color.blue[150] : color.extra.white};
  border-radius: 16.09px;
`;

const Logout = styled.button`
  ${design.BUTTON_WHITE}
  width:100%;
  padding: 8px;
`;
