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
        index: true,
        element: <AuthLayout />,
        children: [
          {
            index: true,
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
