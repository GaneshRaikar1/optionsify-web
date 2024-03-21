import Link from 'next/link';
import React from 'react';

const Subscribe = () => {
   return (
      <>
         <section className="subscribe__area p-relative pt-100 pb-110" style={{ background: `url(assets/img/bg/subscribe-bg.jpg)`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="subscribe__content text-center wow fadeInUp" data-wow-delay=".5s">
                        <h3 className="subscribe__title">Simplify trading with Optionsify and your strategy!</h3>
                        <p>Experience the ease of algo trading, empowering you with seamless execution and enhanced control over your systematic trading!</p>
                        <div className="subscribe__form wow fadeInUp" data-wow-delay=".7s">
                           <form action="#">
                              <input type="email" placeholder="Email Address" />
                              <button type="submit" className="m-btn m-btn-black"><span></span><Link href="/contact">Contact</Link></button>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Subscribe;
