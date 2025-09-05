import { Outlet } from 'react-router-dom';

export default function PublicLayout() {
  return (
    <div className="h-screen w-full">
      <div className="relative mx-auto h-full max-w-[var(--frame-width)] shadow">
        <Outlet />
      </div>
    </div>
  );
}
