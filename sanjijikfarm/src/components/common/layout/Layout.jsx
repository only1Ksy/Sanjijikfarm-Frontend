import { Outlet } from 'react-router-dom';

import Header from './Header';

export default function Layout() {
  return (
    <div className="h-screen w-full">
      <div className="mx-auto h-full max-w-[var(--frame-width)] shadow">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
