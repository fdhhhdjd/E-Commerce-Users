import { createBrowserRouter } from 'react-router-dom';

import App from '@/App';
import AuthLayout from '@/layouts/authLayout';
import Register from '@/pages/auth/register';

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
