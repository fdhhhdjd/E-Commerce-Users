import { createBrowserRouter } from 'react-router-dom';

import AuthLayout from '@/layouts/auth';
import MainLayout from '@/layouts/main';
import Login from '@/pages/auth/login';
import OTP from '@/pages/auth/otp';
import Register from '@/pages/auth/register';
import ResetPassword from '@/pages/auth/reset-password';
import Verification from '@/pages/auth/verification';
import NotFound from '@/pages/notfound';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: 'auth',
        element: <AuthLayout />,
        children: [
          {
            path: 'login',
            element: <Login />
          },
          {
            path: 'register',
            element: <Register />
          },
          {
            path: 'otp',
            element: <OTP />
          },
          {
            path: 'reset-password',
            element: <ResetPassword />
          },
          {
            path: 'verify/:token',
            element: <Verification />
          }
        ]
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
];

const router = createBrowserRouter(routes);

export { router, routes };
