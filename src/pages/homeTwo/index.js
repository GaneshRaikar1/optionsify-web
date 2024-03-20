// import React from 'react';
// import HeroArea from '../../components/homeTwo/HeroArea';
// import SEO from '../../components/seo';
// import PricingArea from '../../components/Pricing/PricingArea';
// import FeaturesArea from '../../components/homeTwo/FeaturesArea';

// const HomeTwo = ({ plans, features }) => {
//    return (
//       <>
//          <SEO pageTitle={'Home'} />
//          <HeroArea />
//          <FeaturesArea features={features} />
//          <PricingArea plans={plans} />
//       </>
//    );
// };
import React from 'react';
import Subscribe from '../../components/Home/Subscribe';
import FeaturedArea from '../../components/homeTwo/FeaturedArea';
import Footer from '../../components/homeTwo/Footer';
import Header from '../../components/homeTwo/Header';
import HeroArea from '../../components/homeTwo/HeroArea';
import LatestProduct from '../../components/homeTwo/LatestProduct';
import Services from '../../components/homeTwo/Services';
import Testimonial from '../../components/homeTwo/Testimonial';
import SEO from '../../components/seo';

const HomeTwo = () => {
   return (
      <>
         <SEO pageTitle={'Home Two'} />
         <Header />
         <HeroArea />
         <FeaturedArea />
         <Services />
         <LatestProduct />
         <Testimonial />
         <Subscribe />
         <Footer />
      </>
   );
};

export default HomeTwo;
// export default HomeTwo;