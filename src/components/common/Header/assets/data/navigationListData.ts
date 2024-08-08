interface INavigationListData {
  id: number;
  name: string;
  href: string;
}
const navigationListData: INavigationListData[] = [
  {
    id: 1,
    name: '코딩',
    href: '/coding',
  },
  {
    id: 2,
    name: '개발 문서',
    href: '/document',
  },
  {
    id: 3,
    name: '퀴즈',
    href: '/quiz',
  },
];

export default navigationListData;
