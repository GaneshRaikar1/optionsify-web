import Link from 'next/link';
import React from 'react';

const TemplatesNeed = () => {
   const templateData = [
      {
         id: 1,
         icon_img: "assets/img/icon/services/services-1.svg",
         bg_color: 'blue-bg-4',
         title: "Tailored Precision Strategies",
         description: "Experience precision in your trading journey with bespoke strategies and screeners crafted specifically to match your unique trading style and indicators, maximizing your potential for success."
      },
      {
         id: 2,
         icon_img: "assets/img/icon/services/services-2.svg",
         bg_color: 'pink-bg',
         title: "Streamlined Efficiency Solutions",
         description: "Effortlessly navigate the markets with streamlined efficiency as our customized solutions eliminate the need for manual adjustments, saving you time and allowing you to focus on executing winning trades."
      },
      {
         id: 3,
         icon_img: "assets/img/icon/services/services-3.svg",
         bg_color: 'green-bg',
         title: "Enhanced Confidence Strategies",
         description: "Trade with confidence knowing that your strategies and screeners are tailored to your preferences, providing you with a sense of security and assurance as you navigate through various market conditions."
      },
      {
         id: 4,
         icon_img: "assets/img/icon/services/services-4.svg",
         bg_color: 'orange-bg',
         title: "Optimized Performance Solutions",
         description: "Achieve optimal performance in your trading endeavors with strategies and screeners finely tuned to your specific objectives, enabling you to capitalize on opportunities and maximize your potential returns."
      },
      {
         id: 5,
         icon_img: "assets/img/icon/services/services-5.svg",
         bg_color: 'blue-bg',
         title: "Continuous Adaptation Tools",
         description: "Stay ahead of the curve with solutions that continuously adapt to your evolving trading style and market dynamics, ensuring that your strategies and screeners remain relevant and effective in today's ever-changing financial landscape."
      },
   ];

   return (
      <>
         <section className="services__area pt-100 pb-110">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="section__title-wrapper mb-50 text-center">
                        <h3 className="section__title">Empower Your Trading Journey with Optionsify</h3>
                        <p>Optionsify is your partner in transitioning from discretionary to systematic trading, offering a comprehensive suite of products and services designed to elevate your trading success. With our advanced tools and expert guidance, you can unlock the full potential of your trading strategies and achieve consistent results in today&apos;s dynamic markets.</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  {templateData.map(item => (
                     <div key={item.id} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                        <div className="services__item white-bg mb-30 wow fadeinup" data-wow-delay=".3s">
                           <div className="services__icon mb-45">
                              <span className={item.bg_color}>
                                 <img src={item.icon_img} alt="" />
                              </span>
                           </div>
                           <div className="services__content">
                              <h3 className="services__title">{item.title}</h3>
                              <p>{item.description}</p>
                              {/* <Link href="/about" >
                                 <a className="link-btn">
                                    <i className="fas fa-long-arrow-alt-right"></i>
                                    Learn More
                                 </a>
                              </Link> */}
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>
      </>
   );
};

export default TemplatesNeed;
