import { createBrowserRouter } from 'react-router-dom';

import ProtectedLayout from './components/common/layout/ProtectedLayout';
import PublicLayout from './components/common/layout/PublicLayout';
import ProtectedRoute from './components/common/router/ProtectedRoute';
import HomePage from './pages/HomePage';
import LocalfoodPage from './pages/LocalfoodPage';
import LoginPage from './pages/LoginPage';
import MyPage from './pages/MyPage';
import ReceiptPage from './pages/ReceiptPage';
import ReportPage from './pages/ReportPage';
import SignupPage from './pages/SignupPage';
import SplashPage from './pages/SplashPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      { index: true, element: <SplashPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'signup', element: <SignupPage /> },

      // protected routes
      {
        element: <ProtectedRoute />,
        children: [
          {
            element: <ProtectedLayout />,
            children: [
              { path: 'home', element: <HomePage /> },
              { path: 'localfood', element: <LocalfoodPage /> },
              { path: 'receipt', element: <ReceiptPage /> },
              { path: 'report', element: <ReportPage /> },
              { path: 'mypage', element: <MyPage /> },
            ],
          },
        ],
      },
    ],
  },
]);
