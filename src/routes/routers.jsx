import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '@/layouts/main';
import authRoutes from '@/routes/authRoutes';

import publicRoutes from './publicRoutes';
import userRoutes from './userRoutes';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [...publicRoutes, authRoutes, userRoutes]
  }
];

const router = createBrowserRouter(routes);

export { router, routes };
