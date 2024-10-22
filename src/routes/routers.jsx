import { createBrowserRouter } from 'react-router-dom';

import AuthLayout from '@/layouts/auth';
import MainLayout from '@/layouts/main';
import Login from '@/pages/auth/login';
import Register from '@/pages/auth/register';
import FaqsPage from '@/pages/faqs';
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
          }
        ]
      },
      {
        path: 'faqs',
        element: <FaqsPage />
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
