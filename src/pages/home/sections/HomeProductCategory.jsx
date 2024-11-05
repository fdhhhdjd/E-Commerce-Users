import star from '@/assets/images/home/Star.svg';

const HomeProductCategory = ({ title, products }) => (
  <div className='flex flex-col gap-4 justify-start items-start'>
    <div className="text-[#191919] text-xl font-medium font-['Poppins'] leading-[30px]">
      {title}
    </div>
    <div className='flex flex-col gap-4'>
      {products.map(product => (
        <div
          key={product.id}
          className='w-[312px] h-[116px] bg-white rounded-md shadow border border-[#2c732f] inline-flex'
        >
          <div className='w-[106px] h-[106px] p-[5px] rounded-md flex'>
            <img
              src={product.image}
              className='w-[102px] h-[102px]'
              alt={product.name}
            />
          </div>
          <div className='w-[190px] px-3 pt-6 pb-[25px] flex-col gap-1.5 inline-flex'>
            <div className='text-[#2c732f] text-sm font-normal leading-[21px]'>
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

export default HomeProductCategory;
