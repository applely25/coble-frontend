interface INavigationListData {
  id: number;
  name: string;
  href: string;
}
const navigationListData: INavigationListData[] = [
  {
    id: 1,
    name: '코딩',
    href: '/coding/new',
  },
  {
    id: 2,
    name: '인기 프로젝트',
    href: '/list',
  },
  {
    id: 3,
    name: '퀴즈',
    href: '/quiz',
  },
];

export default navigationListData;
