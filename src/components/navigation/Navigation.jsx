import React from 'react';

import Breadcrumbs from './item/Breadcrumbs';
import Middle from './item/Middle';
import NavLink from './item/NavLink';
import SmallOne from './item/SmallOne';

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
