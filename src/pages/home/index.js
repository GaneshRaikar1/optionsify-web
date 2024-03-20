import Head from 'next/head';
import BannerArea from '../../components/Home/BannerArea';
import BrandArea from '../../components/Home/BrandArea';
import CategoryArea from '../../components/Home/CategoryArea';
import Cta from '../../components/Home/Cta';
import Footer from '../../components/Home/Footer';
import Header from '../../components/Home/Header';
import HeroArea from '../../components/Home/HeroArea';
import Products from '../../components/Home/Products';
import Subscribe from '../../components/Home/Subscribe';
// import Testimonial from '../../components/Home/Testimonial';
import TrendingLandmark from '../../components/Home/TrendingLandmark';
import SEO from '../../components/seo';

import FeaturedItem from '../../components/HomeThree/FeaturedItem';
// import FeaturedThemesProducts from '../../components/HomeThree/FeaturedThemesProducts';
// import HomeThreeBlog from '../../components/HomeThree/HomeThreeBlog';
// import HomeThreeHeader from '../../components/HomeThree/HomeThreeHeader';
import HomeThreeHeroArea from '../../components/HomeThree/HomeThreeHeroArea';
export default function Home() {

  return (
    <>
      <SEO pageTitle={'Home Default'} />
      <Header />
      {/* <HeroArea /> */}
      <HomeThreeHeroArea /><FeaturedItem /><CategoryArea />
      <TrendingLandmark />
      <Subscribe />
      <Products />
      <Cta />
      <BrandArea />
      {/* <Testimonial /> */}
      <Subscribe />
      <Footer />
    </>
  )
}
