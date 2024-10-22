import React from 'react';

import { Outlet } from 'react-router-dom';

import Rectangle from '@/components/NavItemSections/Rectangle';

import Footer from '../footer';
import Navigation from '../navigation';

const MainLayout = () => {
  return (
    <React.Fragment>
      {/* 1. Nav */}
      <Navigation />
      {/* 2. Outlet */}
      <Outlet />
      {/* 3.Rectangle */}
      <Rectangle />
      {/* 4.Footer */}
      <Footer />
    </React.Fragment>
  );
};

export default MainLayout;
