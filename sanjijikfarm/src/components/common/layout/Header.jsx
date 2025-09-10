import { useLocation, matchPath } from 'react-router-dom';

const titles = {
  '/home': '홈',
  '/receipt': '영수증',
  '/receipt/upload': '영수증',
  '/receipt/:id': '영수증',
  '/localfood': '로컬푸드',
  '/report': '소비리포트',
  '/mypage': '마이페이지',
  '/mypage/purchases': '나의 구매내역',
};

export default function Header() {
  const location = useLocation();

  const matchedTitle =
    Object.entries(titles).find(([path]) =>
      matchPath({ path, end: true }, location.pathname)
    )?.[1] || '';

  return (
    <div className="absolute top-0 flex h-16 w-full items-center justify-center bg-white shadow-sm z-10">
      <span className="text-heading-1 font-bold">{matchedTitle}</span>
    </div>
  );
}
