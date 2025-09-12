import { createBrowserRouter } from 'react-router-dom';

import ProtectedLayout from './components/common/layout/ProtectedLayout';
import PublicLayout from './components/common/layout/PublicLayout';
import ProtectedRoute from './components/common/router/ProtectedRoute';
import HomePage from './pages/HomePage';
import LocalfoodDetailPage from './pages/LocalfoodDetailPage';
import LocalfoodPage from './pages/LocalfoodPage';
import LoginPage from './pages/LoginPage';
import MyHeartedPage from './pages/MyLikedPage';
import MyPage from './pages/MyPage';
import MyPurchases from './pages/MyPurchases';
import ReceiptDetail from './pages/ReceiptDetail';
import ReceiptPage from './pages/ReceiptPage';
import ReceiptUploadPage from './pages/ReceiptUploadPage';
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
              { path: 'localfood/:id', element: <LocalfoodDetailPage /> },
              { path: 'receipt', element: <ReceiptPage /> },
              { path: 'receipt/upload', element: <ReceiptUploadPage /> },
              { path: 'report', element: <ReportPage /> },
              { path: 'mypage', element: <MyPage /> },
              { path: 'mypage/purchases', element: <MyPurchases /> },
              { path: 'mypage/likes', element: <MyHeartedPage /> },
              { path: 'receipt/:id', element: <ReceiptDetail /> },
            ],
          },
        ],
      },
    ],
  },
]);
