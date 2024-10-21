import React from 'react';

import Breadcrumbs from '../../components/NavItem/Breadcrumbs';
import Middle from '../../components/NavItem/Middle';
import NavLink from '../../components/NavItem/NavLink';
import SmallOne from '../../components/NavItem/SmallOne';

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
