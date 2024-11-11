import React from 'react';

import apple from '@/assets/images/home/Apple.png';
import arrowRight from '@/assets/images/home/ArrowRight.svg';
import bag from '@/assets/images/home/Bag.svg';
import bagWhite from '@/assets/images/home/BagWhite.svg';
import container from '@/assets/images/home/Container.svg';
import containerGreen from '@/assets/images/home/ContainerGreen.svg';
import containerIcon from '@/assets/images/home/ContainerIcon.svg';
import eye from '@/assets/images/home/Eye.svg';
import fruit1 from '@/assets/images/home/fruit1.png';
import fruit2 from '@/assets/images/home/fruit2.png';
import fruit3 from '@/assets/images/home/fruit3.png';
import fruit4 from '@/assets/images/home/fruit4.png';
import heart from '@/assets/images/home/Heart.svg';
import noStar from '@/assets/images/home/NoStar.svg';
import star from '@/assets/images/home/Star.svg';

import { cn } from '@/helpers';

const HomeNewestProducts = () => {
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const productData = [
    {
      image: apple,
      name: 'Green Apple',
      price: '$14.99',
      rating: 4
    },
    {
      image: fruit1,
      name: 'Chanise Cabbage',
      price: '$14.99',
      rating: 5
    },
    {
      image: fruit2,
      name: 'Green Lettuce',
      price: '$14.99',
      rating: 4
    },
    {
      image: fruit3,
      name: 'Green Chili',
      price: '$14.99',
      rating: 4
    },
    {
      image: fruit4,
      name: 'Corn',
      price: '$14.99',
      rating: 5
    }
  ];

  return (
    <div className='w-full flex flex-col justify-start items-start gap-[50px] lg:px-[150px] xl:px-[200px] 2xl:px-[300px]'>
      {/* 1 */}
      <div className='w-full inline-flex justify-between items-center'>
        <div className='text-[#191919] text-[40px] font-semibold font-poppins leading-[48px]'>
          Newest Products
        </div>

        <div className="text-[#00b206] text-base font-medium font-['Poppins'] leading-normal flex gap-3">
          <p>View All</p>
          <img src={arrowRight} alt='this is arrowRight' />
        </div>
      </div>

      {/* 2 */}
      <div className='justify-start items-start gap-1 inline-flex'>
        <div className='w-3 h-1 opacity-30 bg-[#00b206]' />
        <div className='w-10 h-1 bg-[#00b206]' />
        <div className='w-3 h-1 opacity-30 bg-[#00b206]' />
      </div>

      {/* 3 */}
      <div className='justify-end items-start gap-5 inline-flex'>
        {productData.map((product, index) => (
          <div
            key={index}
            onClick={() => setSelectedProduct(index)}
            className={cn(
              'w-[248px] h-[339px] relative bg-white rounded-lg border',
              selectedProduct === index
                ? 'shadow-lg border-[#2c732f] border'
                : 'border-[#e6e6e6]'
            )}
          >
            {selectedProduct === index && (
              <div className='absolute top-2 right-2 flex flex-col gap-1.5'>
                <div
                  className='w-10 h-10 rounded-full border border-[#f2f2f2] flex justify-center items-center bg-cover bg-center'
                  style={{ backgroundImage: `url(${containerIcon})` }}
                >
                  <img src={heart} className='w-5 h-5' />
                </div>
                <div
                  className='w-10 h-10 rounded-full border border-[#f2f2f2] flex justify-center items-center bg-cover bg-center'
                  style={{ backgroundImage: `url(${containerIcon})` }}
                >
                  <img src={eye} alt='this is eye' className='w-5 h-5' />
                </div>
              </div>
            )}

            <div className='p-px absolute left-0 top-0'>
              <img
                className='w-[246px] h-[246px] mix-blend-multiply'
                src={product.image}
                alt={product.name}
              />
            </div>
            <div className='px-4 pt-3 pb-4 absolute left-0 top-[248px] flex-col gap-1.5'>
              <div className='flex flex-col'>
                <div className='w-[216px] text-[#4c4c4c] text-sm font-normal font-poppins leading-[21px]'>
                  {product.name}
                </div>
                <div className='flex gap-1'>
                  <div className='text-[#191919] text-base font-medium font-poppins'>
                    {product.price}
                  </div>
                </div>
              </div>
              <div className='flex'>
                {[...Array(5)].map((_, starIndex) => (
                  <img
                    key={starIndex}
                    src={starIndex < product.rating ? star : noStar}
                    className='w-3 h-3'
                    alt={starIndex < product.rating ? 'Star' : 'No Star'}
                  />
                ))}
              </div>
            </div>
            <div className='absolute right-4 top-[274px]'>
              <img
                src={selectedProduct === index ? containerGreen : container}
                className='w-10 h-10 rounded-full'
                alt='Container'
              />
              <img
                src={selectedProduct === index ? bagWhite : bag}
                className='w-5 h-5 absolute left-[10px] top-[10px]'
                alt='Bag'
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeNewestProducts;
