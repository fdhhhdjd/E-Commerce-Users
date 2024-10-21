import React from 'react';

import Breadcrumbs from '../../components/NavItemSections/Breadcrumbs';
import Middle from '../../components/NavItemSections/Middle';
import NavLink from '../../components/NavItemSections/NavLink';
import SmallOne from '../../components/NavItemSections/SmallOne';

const Navigation = () => {
  return (
    <React.Fragment>
      <div className='w-full h-full bg-white flex flex-col justify-start items-center'>
        <SmallOne />
        <Middle />
        <NavLink />
        <Breadcrumbs />
      </div>
    </React.Fragment>
  );
};

export default Navigation;
