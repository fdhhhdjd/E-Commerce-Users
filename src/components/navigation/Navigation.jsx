import React from 'react';

import Middle from './item/Middle';
import SmallOne from './item/SmallOne';

const Navigation = () => {
  return (
    <React.Fragment>
      <div className='h-[195px] bg-white flex flex-col justify-start items-center'>
        <SmallOne />
        <Middle />
      </div>
    </React.Fragment>
  );
};

export default Navigation;
