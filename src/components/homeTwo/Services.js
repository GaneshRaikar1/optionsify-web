import Link from 'next/link';
import React from 'react';
import SingleService from './SingleService';

const Services = () => {
   return (
      <>
         <section className="services__area pb-110">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="section__title-wrapper mb-50 text-center">
                        <h3 className="section__title">Empower Your Trading Journey with Optionsify</h3>
                        <p>Optionsify is your partner in transitioning from discretionary to systematic trading, offering a comprehensive suite of products and services designed to elevate your trading success. With our advanced tools and expert guidance, you can unlock the full potential of your trading strategies and achieve consistent results in today's dynamic markets.</p>
                     </div>
                  </div>
               </div>
               <div className="row">
               <SingleService color="blue-bg-4" img="1" title={<h3 className="">Tailored <br />Precision Strategies</h3>} description={<p>Experience precision in your trading journey with bespoke strategies and screeners crafted specifically to match your unique trading style and indicators, maximizing your potential for success.</p>} />

<SingleService color="pink-bg" img="2" title={<h3 className="">Streamlined <br />Efficiency Solutions</h3>} description={<p>Effortlessly navigate the markets with streamlined efficiency as our customized solutions eliminate the need for manual adjustments, saving you time and allowing you to focus on executing winning trades.</p>} />

<SingleService color="green-bg" img="3" title={<h3 className="">Enhanced <br />Confidence Strategies</h3>} description={<p>Trade with confidence knowing that your strategies and screeners are tailored to your preferences, providing you with a sense of security and assurance as you navigate through various market conditions.</p>} />

<SingleService color="orange-bg" img="4" title={<h3 className="">Optimized <br />Performance Solutions</h3>} description={<p>Achieve optimal performance in your trading endeavors with strategies and screeners finely tuned to your specific objectives, enabling you to capitalize on opportunities and maximize your potential returns.</p>} />

<SingleService color="blue-bg" img="5" title={<h3 className="">Continuous <br />Adaptation Tools</h3>} description={<p>Stay ahead of the curve with solutions that continuously adapt to your evolving trading style and market dynamics, ensuring that your strategies and screeners remain relevant and effective in today's ever-changing financial landscape.</p>} />


               </div>
            </div>
         </section>
      </>
   );
};

export default Services;
