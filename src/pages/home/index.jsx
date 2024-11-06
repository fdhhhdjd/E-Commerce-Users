import HomeBG from './sections/HomeBG';
import HomeFeatured from './sections/HomeFeatured';
import HomeInfoBannerSale from './sections/HomeInfoBannerSale';
import HomeTopCategory from './sections/HomeTopCategory';

const HomePage = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center gap-[100px]'>
      {/* 1 */}
      <HomeBG />

      {/* 2 */}
      <HomeFeatured />

      {/* 3 */}
      <HomeTopCategory />

      {/* 4 */}
      <HomeInfoBannerSale />
    </div>
  );
};

export default HomePage;
