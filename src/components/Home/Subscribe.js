import Link from 'next/link';
import React from 'react';

const Subscribe = () => {
   return (
      <>
         <section className="subscribe__area p-relative pt-100 pb-110" style={{ background: `url(assets/img/bg/subscribe-bg.jpg)`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            {/* <div className="subscribe__icon">
      <img className="ps" src="assets/img/icon/subscribe/ps.png" alt="" />
      <img className="wp" src="assets/img/icon/subscribe/wp.png" alt="" />
      <img className="html" src="assets/img/icon/subscribe/html.png" alt="" />
      <img className="f" src="assets/img/icon/subscribe/f.png" alt="" />
      <img className="man" src="assets/img/icon/subscribe/man.png" alt="" />
   </div> */}
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="subscribe__content text-center wow fadeInUp" data-wow-delay=".5s">
                        <h3 className="subscribe__title">Ready to transition from discretionary to systematic trading?</h3>
                        <p>Our suite of products & services exemplifies your trading success!</p>
                        <div className="subscribe__form wow fadeInUp" data-wow-delay=".7s">
                           <form action="#">
                              <input type="email" placeholder="Email Address" />
                              <button type="contact" className="m-btn m-btn-black"><span></span><Link href="/contact" > contact </Link></button>
                           </form>
                           {/* <p>Join other creators in our Markit community.</p> */}
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