import React from 'react';

import arrow from '@/assets/images/home/Arrow.svg';
import fish from '@/assets/images/home/Fish.svg';
import fruit from '@/assets/images/home/Fruits.svg';
import meat from '@/assets/images/home/Meat.svg';
import snacks from '@/assets/images/home/Snacks.svg';
import softDrink from '@/assets/images/home/SoftDrink.svg';
import vegetable from '@/assets/images/home/Vegetable.svg';

const HomeTopCategory = () => {
  const [selectedCategory, setSelectedCategory] = React.useState(0);
  const [startIndex, setStartIndex] = React.useState(0);
  const [translateX, setTranslateX] = React.useState(0);

  const categories = [
    { name: 'Vegetables', productsCount: 165, image: vegetable },
    { name: 'Fruits', productsCount: 120, image: fruit },
    { name: 'Fish', productsCount: 80, image: fish },
    { name: 'Meat', productsCount: 75, image: meat },
    { name: 'Soft Drinks', productsCount: 50, image: softDrink },
    { name: 'Snacks', productsCount: 200, image: snacks },
    { name: 'Grains', productsCount: 150, image: vegetable },
    { name: 'Dairy', productsCount: 90, image: meat }
  ];

  const visibleCategories = categories.slice(startIndex, startIndex + 6);

  const handleCategoryClick = index => {
    setSelectedCategory(startIndex + index);
  };

  const handleNext = () => {
    if (startIndex + visibleCategories.length < categories.length) {
      setStartIndex(startIndex + 1);
      setTranslateX(translateX - 220); // Adjust offset based on item width + gap
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
      setTranslateX(translateX + 220); // Adjust offset based on item width + gap
    }
  };

  return (
    <div className='w-[1490px] h-[328px] flex flex-col gap-[50px]'>
      {/* Title */}
      <div className='h-[68px] flex-col justify-start items-center gap-4 inline-flex'>
        <div className='text-[#191919] text-[40px] font-semibold font-poppins leading-[48px]'>
          Top Category
        </div>
        <div className='justify-start items-start gap-1 inline-flex'>
          <div className='w-3 h-1 opacity-30 bg-[#00b206]' />
          <div className='w-10 h-1 bg-[#00b206]' />
          <div className='w-3 h-1 opacity-30 bg-[#00b206]' />
        </div>
      </div>

      {/* Categories Display */}
      <div className='flex gap-10 items-center'>
        {/* Left Arrow */}
        <div
          onClick={handlePrev}
          className={`w-[45px] h-full flex justify-center cursor-pointer ${
            startIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          <img src={arrow} alt='Left Arrow' />
        </div>

        {/* Categories List */}
        <div className='flex gap-6 overflow-hidden transition-transform duration-500 ease-in-out px-4'>
          {/* Added padding to the container */}
          {visibleCategories.map((category, index) => (
            <div
              key={index}
              onClick={() => handleCategoryClick(index)}
              className={`h-[210px] pt-8 pb-6 bg-white rounded-md shadow border flex-col justify-start items-center gap-5 inline-flex cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-100 hover:shadow-lg ${
                selectedCategory === startIndex + index
                  ? 'border-[#2c732f] -mx-1'
                  : 'border-[#ededed] -mx-1'
              }`}
            >
              <div className='w-20 h-20 relative'>
                <img src={category.image} alt={category.name} />
              </div>
              <div className='flex-col justify-start items-center gap-1.5 flex'>
                <div className='w-[200px] text-center text-[#2c732f] text-lg font-medium font-poppins leading-[27px]'>
                  {category.name}
                </div>
                <div className='w-[200px] text-center text-[#7f7f7f] text-sm font-normal font-poppins leading-[21px]'>
                  {category.productsCount} Products
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <div
          onClick={handleNext}
          className={`w-[45px] h-full flex justify-center cursor-pointer rotate-180 ${
            startIndex + 6 >= categories.length
              ? 'opacity-50 cursor-not-allowed'
              : ''
          }`}
        >
          <img src={arrow} alt='Right Arrow' />
        </div>
      </div>
    </div>
  );
};

export default HomeTopCategory;
