import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const HeroArea = () => {
   return (
      <>
         <style jsx>{`
            /* Add your CSS styles here */
            .hero__area {
                position: relative;
                background: radial-gradient(592px at 48.2% 50%, rgba(255, 255, 249, 0.6) 0%, rgb(160, 199, 254) 74.6%);
                overflow: hidden;
            }
         `}</style>
         <section className="hero__area hero__height-1 grey-bg-16 d-flex align-items-center pt-50 pb-30">
            {/* <div className="hero__shape">
               <img className="circle-2 circle-3" src="/assets/img/icon/hero/hero-circle-2.png" alt="circle" />
               <img className="dot dot-2" src="/assets/img/icon/hero/hero-dot-2.png" alt="circle" />
               <img className="triangle triangle-2" src="/assets/img/icon/hero/hero-triangle.png" alt="circle" />
            </div> */}
            <div className="container">
               <div className="row">
                  <div className="col-xxl-10 offset-xxl-1 col-xl-10 offset-xl-1">
                     <div className="hero__content hero__content-2 text-center mt-10">
                        <h2><span>Simplify trading with Optionsify</span> with your own strategy!</h2>
                        <p>Experience the ease of algo trading, empowering you with seamless execution and enhanced control over your strategies</p>
                        <div className="hero__search-box mt-70 mb-65">
                           <div className="hero__search-thumb">
                              <img src="/assets/img/hero/home-2/search-box.jpg" alt="" />
                              <img className="hero-search-sm" src="/assets/img/hero/home-2/hero-search-sm.png" alt="" height={"200px"} />
                              <div className="hero__search-input hero__search-input-2">
                                 <span><i className="far fa-search"></i></span>
                                 <input type="text" placeholder="Search for templates" />
                              </div>
                              <div className="hero__search-shape">
                                 <img className="man-search" src="/assets/img/hero/home-2/man-search.png" alt="" />
                                 <img className="hero-man-1" src="/assets/img/hero/home-2/man-1.png" alt="" />
                                 <img className="hero-man-2" src="/assets/img/hero/home-2/man-2.png" alt="" />
                                 <img className="hero-search-square" src="/assets/img/icon/hero/hero-square.png" alt="" />
                                 <img className="hero-search-square-2" src="/assets/img/icon/hero/hero-square-2.png" alt="" />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HeroArea;
