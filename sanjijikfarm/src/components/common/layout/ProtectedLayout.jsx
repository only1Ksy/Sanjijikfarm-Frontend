import { Outlet } from 'react-router-dom';

import Header from './Header';
import NavBar from './NavBar';

export default function ProtectedLayout() {
  return (
    <div className="h-screen w-full">
      <div className="relative mx-auto h-full max-w-[var(--frame-width)] shadow">
        <Header />
        <Outlet />
        <NavBar />
      </div>
    </div>
  );
}
