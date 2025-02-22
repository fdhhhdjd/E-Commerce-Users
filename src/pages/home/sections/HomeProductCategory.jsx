import React from 'react';

import star from '@/assets/images/home/Star.svg';

import { cn } from '@/helpers';

const HomeProductCategory = ({ title, products }) => {
  const [selectedProductId, setSelectedProductId] = React.useState(null);

  const handleProductClick = id => {
    setSelectedProductId(id);
  };
  return (
    <div className='flex flex-col gap-4 justify-start items-start'>
      <div className="text-[#191919] text-xl font-medium font-['Poppins'] leading-[30px]">
        {title}
      </div>
      <div className='flex flex-col gap-4'>
        {products.map(product => (
          <div
            key={product.id}
            onClick={() => handleProductClick(product.id)}
            className={cn(
              'w-[312px] h-[116px] rounded-md   bg-white inline-flex',
              selectedProductId === product.id
                ? 'shadow-lg border border-[#2c732f]'
                : 'border border-[#e6e6e6]'
            )}
          >
            <div className='w-[106px] h-[106px] p-[5px] rounded-md flex'>
              <img
                src={product.image}
                className='w-[102px] h-[102px]'
                alt={product.name}
              />
            </div>
            <div className='w-[190px] px-3 pt-6 pb-[25px] flex-col gap-1.5 inline-flex'>
              <div
                className={cn(
                  'text-[#2c732f] text-sm font-normal leading-[21px]',
                  selectedProductId === product.id
                    ? 'text-[#2c732f] '
                    : 'text-[#4c4c4c]'
                )}
              >
                {product.name}
              </div>
              <div className='text-[#191919] text-base font-medium leading-normal'>
                {product.price}
              </div>
              <div className='inline-flex'>
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src={star}
                    className={`w-4 h-4 ${i < product.rating ? '' : 'opacity-30'}`}
                    alt='Star'
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProductCategory;
