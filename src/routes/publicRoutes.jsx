import AboutUs from '@/pages/about-us';
import ContactUs from '@/pages/contact-us';
import FaqsPage from '@/pages/faqs';
import NotFound from '@/pages/notfound';

const publicRoutes = [
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
