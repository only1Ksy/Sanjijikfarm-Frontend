// src/components/ProtectedRoute.tsx
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
  const { user } = true; // 이후 실제 인증 상태로 교체

  if (!user) {
    // 로그인 안 됐으면 로그인 페이지로 이동
    return <Navigate to="/login" replace />;
  }

  // 로그인 되어있으면 자식 라우트 렌더링
  return <Outlet />;
}
