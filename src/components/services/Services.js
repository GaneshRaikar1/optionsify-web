import React from 'react';
// import { services } from '../../data/services';

const Services = ({ services }) => {
   return (
      <>
         <section className="support__area po-rel-z1 pt-30">
            <div className="support__shape wow fadeInLeft" data-wow-delay=".9s">
               <img src="assets/img/bg/support-bg.png" alt="" />
            </div>
            <div className="container">
               <div className="row">
                  <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3">
                     <div className="page__title-wrapper text-center mb-30">
                        <h2 className="page__title-2">Empowering Your Options Trading Journey</h2>
                     <p> We create next-gen trading tools to help navigate the markets smarter. We help our clients with Quant research, Backtesting and bespoke development for Traders & Retailers.</p>
                     </div>
                  </div>
               </div>
               <div className="row">

                  {
                     services.map((support) => {
                        return <div key={support.title} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                           <div className="support__item text-center white-bg transition-3  wow fadeInUp" data-wow-delay=".7s">
                              <div className="support__icon mb-30 d-flex justify-content-center align-items-end">
                                 <img src={support.img} alt="" />
                              </div>
                              <div className="support__content">
                                 <h3 className="support__title">{support.title}</h3>
                                 <p>{support.description}</p>
                                 {/* <Link href="/contact"><a className="m-btn m-btn-border m-btn-border-3">Submit Ticket</a></Link> */}
                              </div>
                           </div>
                        </div>
                     })
                  }

               </div>
            </div>
         </section>
      </>
   );
};

export default Services;