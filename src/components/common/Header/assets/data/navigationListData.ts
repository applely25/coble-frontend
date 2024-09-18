interface INavigationListData {
  id: number;
  name: string;
  href: string;
  login: boolean;
}
const navigationListData: INavigationListData[] = [
  {
    id: 1,
    name: '코딩',
    href: '/coding/new',
    login: true,
  },
  {
    id: 2,
    name: '인기 프로젝트',
    href: '/list',
    login: true,
  },
  {
    id: 3,
    name: '퀴즈',
    href: '/quiz',
    login: true,
  },
];

export default navigationListData;
