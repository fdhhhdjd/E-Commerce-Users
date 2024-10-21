import { createBrowserRouter } from 'react-router-dom';

import AuthLayout from '@/layouts/authLayout';
import Login from '@/pages/auth/login';
import Register from '@/pages/auth/register';

import App from '@/App';

const routes = [
  {
    path: '/',
    element: <App />,
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
      }
    ]
  }
];

const router = createBrowserRouter(routes);

export { router, routes };
