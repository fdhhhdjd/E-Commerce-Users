import AuthorizationLayout from '@/layouts/authorization';
import Profile from '@/pages/users/profile';

const userRoutes = {
  path: 'user',
  element: <AuthorizationLayout />,
  children: [{ path: ':userId', element: <Profile /> }]
};

export default userRoutes;
