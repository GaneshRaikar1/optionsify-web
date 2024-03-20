import React from 'react';
import SinglePrice from './SinglePrice';

const PricingArea = ({ plans }) => {
   return (
      <>
         <section className="pricing__area pt-100 pb-110">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2">
                     <div className="page__title-wrapper text-center mb-50">
                        <h2 className="page__title-2">Our Pricing <br />We provide flexible plan</h2>
                        <p>Thousands of Markit Brands have made the swich.</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="pricing__tab mb-40">
                        <ul className="nav nav-tabs justify-content-center" id="priceTab" role="tablist">
                           <li className="nav-item" role="presentation">
                              <button className="nav-link active" id="monthly-tab" data-bs-toggle="tab" data-bs-target="#monthly" type="button" role="tab" aria-controls="monthly" aria-selected="true">monthly</button>
                           </li>
                           <li className="nav-item" role="presentation">
                              <button className="nav-link" id="yearly-tab" data-bs-toggle="tab" data-bs-target="#yearly" type="button" role="tab" aria-controls="yearly" aria-selected="false">yearly</button>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="tab-content wow fadeInUp" id="priceTabContent" data-wow-delay=".5s">
                  <div className="tab-pane fade show active" id="monthly" role="tabpanel" aria-labelledby="monthly-tab">
                     <div className="row">
                        {plans.map((plan, i) => <SinglePrice activeClass={i === 2 && 'active'} key={i} title={plan.name} price={plan.price} features={plan.features} />)}
                     </div>
                  </div>


                  <div className="tab-pane fade" id="yearly" role="tabpanel" aria-labelledby="yearly-tab">
                     <div className="row">
                        {plans.map((plan, i) => <SinglePrice activeClass={i === 3 && 'active'} key={i} title={plan.name} price={plan.price} features={plan.features} />)}
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default PricingArea;