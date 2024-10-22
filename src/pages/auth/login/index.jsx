import React from 'react';

import Rectangle from '@/components/NavItemSections/Rectangle';
import Footer from '@/layouts/footer';
import Navigation from '@/layouts/navigation';

const Login = () => {
  return (
    <React.Fragment>
      {/* 1. Nav */}
      <Navigation />
      {/* 2. Login */}
      <h1>Login</h1>
      {/* 3.Rectangle */}
      <Rectangle />
      {/* 4.Footer */}
      <Footer />
    </React.Fragment>
  );
};

export default Login;
