import AboutUs from '@/pages/about-us';
import ContactUs from '@/pages/contact-us';
import FaqsPage from '@/pages/faqs';
import HomePage from '@/pages/home';
import NotFound from '@/pages/notfound';

const publicRoutes = [
  {
    index: true,
    element: <HomePage />
  },
  { path: 'faqs', element: <FaqsPage /> },
  {
    path: 'contact-us',
    element: <ContactUs />
  },
  {
    path: 'about-us',
    element: <AboutUs />
  },
  { path: '*', element: <NotFound /> }
];

export default publicRoutes;
