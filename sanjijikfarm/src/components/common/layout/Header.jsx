// src/components/common/layout/Header.jsx
import { useLocation } from 'react-router-dom';

const titles = {
  '/home': '홈',
  '/receipt': '영수증',
  '/localfood': '로컬푸드',
  '/report': '소비리포트',
  '/mypage': '마이페이지',
};

export default function Header() {
  const location = useLocation();
  const title = titles[location.pathname] || '';

  return (
    <div className="absolute top-0 flex h-16 w-full items-center justify-center bg-white shadow-sm">
      <span className="text-heading-1 font-bold">{title}</span>
    </div>
  );
}
