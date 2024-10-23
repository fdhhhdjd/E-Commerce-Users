import FaqsPage from '@/pages/faqs';
import NotFound from '@/pages/notfound';

const publicRoutes = [
  { path: 'faqs', element: <FaqsPage /> },
  { path: '*', element: <NotFound /> }
];

export default publicRoutes;
