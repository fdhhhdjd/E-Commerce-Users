import React from 'react';

import { Outlet } from 'react-router-dom';

import Rectangle from '@/components/NavItemSections/Rectangle';
import Footer from '@/layouts/footer';
import Navigation from '@/layouts/navigation';
import AdsPopup from '@/layouts/Popup/AdsPopup';

const MainLayout = () => {
  return (
    <React.Fragment>
      {/* 0. Popup Ads */}
      <AdsPopup />
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
