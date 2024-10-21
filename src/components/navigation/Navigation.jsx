import React from 'react';

import Middle from '@/components/navigation/item/Middle';
import SmallOne from '@/components/navigation/item/SmallOne';

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
