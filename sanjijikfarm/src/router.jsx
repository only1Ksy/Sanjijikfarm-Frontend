import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import ProtectedRoute from './components/common/router/ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true },
      { path: 'login' },

      // protected routes
      {
        element: <ProtectedRoute />,
        children: [],
      },
    ],
  },
]);
