import React from 'react';

import apple from '@/assets/images/home/Apple.png';
import bag from '@/assets/images/home/Bag.svg';
import bagWhite from '@/assets/images/home/BagWhite.svg';
import container from '@/assets/images/home/Container.svg';
import containerGreen from '@/assets/images/home/ContainerGreen.svg';
import fruit1 from '@/assets/images/home/fruit1.png';
import fruit2 from '@/assets/images/home/fruit2.png';
import fruit3 from '@/assets/images/home/fruit3.png';
import fruit4 from '@/assets/images/home/fruit4.png';
import noStar from '@/assets/images/home/NoStar.svg';
import star from '@/assets/images/home/Star.svg';

import { cn } from '@/helpers';

import HomeBanner from './HomeBanner';
import HomeProductCategory from './HomeProductCategory';

const HomeFeatured = () => {
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

  const categories = [
    {
      title: 'Hot Deals',
      products: [
        {
          id: 1,
          name: 'Green Apple',
          price: '$14.99',
          image: apple,
          rating: 5
        },
        { id: 2, name: 'Red Apple', price: '$12.99', image: apple, rating: 4 },
        { id: 3, name: 'Red Apple', price: '$12.99', image: apple, rating: 4 }
      ]
    },
    {
      title: 'Best Seller',
      products: [
        { id: 4, name: 'Banana', price: '$9.99', image: apple, rating: 4 },
        { id: 5, name: 'Orange', price: '$8.99', image: apple, rating: 5 },
        { id: 6, name: 'Orange', price: '$8.99', image: apple, rating: 5 }
      ]
    },
    {
      title: 'Top Rated',
      products: [
        { id: 7, name: 'Pineapple', price: '$15.99', image: apple, rating: 5 },
        { id: 8, name: 'Mango', price: '$13.99', image: apple, rating: 4 },
        { id: 9, name: 'Orange', price: '$8.99', image: apple, rating: 5 }
      ]
    }
  ];
  return (
    <div className='w-full flex flex-col justify-center items-center gap-[50px]'>
      {/* 1 */}
      <div className='text-[#191919] text-[40px] font-semibold font-poppins leading-[48px]'>
        Featured Products
      </div>

      {/* 2 */}
      <div className='justify-start items-start gap-1 inline-flex'>
        <div className='w-3 h-1 opacity-30 bg-[#00b206]' />
        <div className='w-10 h-1 bg-[#00b206]' />
        <div className='w-3 h-1 opacity-30 bg-[#00b206]' />
      </div>

      {/* 3 */}
      <div className='justify-start items-start gap-5 inline-flex'>
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
            <div className='p-px left-0 top-0 absolute justify-start items-start inline-flex'>
              <img
                className='w-[246px] h-[246px] mix-blend-multiply'
                src={product.image}
                alt={product.name}
              />
            </div>
            <div className='px-4 pt-3 pb-4 left-0 top-[248px] absolute flex-col justify-center items-start gap-1.5 inline-flex'>
              <div className='flex-col justify-start items-start flex'>
                <div className='w-[216px] text-[#4c4c4c] text-sm font-normal font-poppins leading-[21px]'>
                  {product.name}
                </div>
                <div className='justify-start items-start gap-1 inline-flex'>
                  <div className='text-[#191919] text-base font-medium font-poppins leading-normal'>
                    {product.price}
                  </div>
                </div>
              </div>
              <div className='justify-start items-start inline-flex'>
                {[...Array(5)].map((_, starIndex) => (
                  <img
                    key={starIndex}
                    src={starIndex < product.rating ? star : noStar}
                    className='w-3 h-3 relative'
                    alt={starIndex < product.rating ? 'Star' : 'No Star'}
                  />
                ))}
              </div>
            </div>
            <div className='w-10 h-10 left-[192px] top-[274px] absolute'>
              <img
                src={selectedProduct === index ? containerGreen : container}
                className='w-10 h-10 left-0 top-0 absolute rounded-full '
                alt='Container'
              />
              <img
                src={selectedProduct === index ? bagWhite : bag}
                className='w-5 h-5 left-[10px] top-[10px] absolute '
                alt='Bag'
              />
            </div>
          </div>
        ))}
      </div>

      {/* 4 */}
      <div className='w-[1320px] flex gap-6 justify-between'>
        {/* 4.1 */}
        <div className='w-[130px] flex gap-6 justify-between'>
          {categories.map(category => (
            <HomeProductCategory
              key={category.title}
              title={category.title}
              products={category.products}
            />
          ))}
        </div>

        {/* 4.4 */}
        <HomeBanner />
      </div>
    </div>
  );
};

export default HomeFeatured;
