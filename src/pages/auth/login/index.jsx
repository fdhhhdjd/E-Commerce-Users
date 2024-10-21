import React from 'react';

import Footer from '@/layouts/footer';
import Navigation from '@/layouts/navigation';

const Login = () => {
  return (
    <React.Fragment>
      {/* 1. Nav */}
      <Navigation />
      {/* 2. Login */}
      <h1>Login</h1>
      {/* 4.Footer */}
      <Footer />
    </React.Fragment>
  );
};

export default Login;
