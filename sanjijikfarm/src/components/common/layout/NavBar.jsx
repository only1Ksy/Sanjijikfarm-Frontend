// src/components/common/layout/NavBar.jsx
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  const navItems = [
    { path: '/home', label: '홈' },
    { path: '/receipt', label: '영수증' },
    { path: '/localfood', label: '로컬푸드' },
    { path: '/report', label: '소비리포트' },
    { path: '/mypage', label: '마이페이지' },
  ];

  return (
    <div className="absolute bottom-0 flex h-16 w-full items-center justify-center gap-8.5 bg-white shadow-2xl">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `text-body-2-med font-medium ${isActive ? 'text-main-green font-bold' : 'text-black'}`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  );
}
