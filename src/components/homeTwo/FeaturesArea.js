import React from 'react';
import SingleBlog from './SingleBlog';

const FeaturesArea = ({ features }) => {
   return (
      <>
         <section className="blog__area pt-90">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-11 offset-xxl-1">
                     <div className="section__title-wrapper mb-65">
                        <p className="section__title">Optionsify platform is packed with features designed to make your trading experience as easy and efficient as possible. With our proprietary options trader, you can execute, monitor, and seamlessly trade. Whether you&aposre a seasoned trader or just starting out, we&aposve got you covered.</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xxl-11 offset-xxl-1 col-xl-11">
                     <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                           {features.map((feature, i) => i % 2 === 0 && <SingleBlog key={i} title={feature.ft} />)}
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                           {features.map((feature, i) => i % 2 === 1 && <SingleBlog key={i} title={feature.ft} />)}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default FeaturesArea;
