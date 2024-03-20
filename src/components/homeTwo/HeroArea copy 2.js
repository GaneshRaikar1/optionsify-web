import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const HeroArea = () => {
   return (
      <>
         {/* <section className="hero__area hero__height-1 grey-bg-16 d-flex align-items-center pt-50 pb-30"
            style={{ background: `url(assets/img/bg/subscribe.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
         > */}
         <section className="hero__area hero__height-1 grey-bg-16 d-flex align-items-center pt-50 pb-30"
    style={{
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Add background color with transparency
        backgroundImage: `url(assets/img/bg/subscribe.jpg)`, // Keep the image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }}
>

            {/* <div className="hero__shape">
               <img className="circle-2 circle-3" src="/assets/img/icon/hero/hero-circle-2.png" alt="circle" />
               <img className="dot dot-2" src="/assets/img/icon/hero/hero-dot-2.png" alt="circle" />
               <img className="triangle triangle-2"="/assets/img/icon/hero/hero-triangle.png" alt="circle" />
            </div> */}
            <div className="container">
               <div className="row">
                  <div className="col-xxl-10 offset-xxl-1 col-xl-10 offset-xl-1">
                     <div className="hero__content hero__content-2 text-center subscribe__title mt-10">
                        <div className="subscribe__title"> <span>Simplify trading with Optionsify</span> with your own strategy!

                        </div>
                        <p>Experience the ease of algo trading, empowering you with seamless execution and enhanced control over your strategies</p>{/* <h2 className="hero__title">
                           <span>The world’s largest</span> <br /> WordPress Themes Collection.
                        </h2>
                        <p>{`The bee's knees pardon you plastered it's all gone to pot cheeky bugger wind up down.`}</p> */}
                        {/* <Link href="/product">
                           <a className="m-btn m-btn-2"> <span></span> View all categories</a>
                        </Link> */}

                        <div className="hero__search-box mt-70 mb-150">
                           {/* <div className="hero__search-thumb">
                              <img src="/assets/img/hero/home-2/optionsify.png" alt="" /> */}
                              {/* <img className="hero-search-sm" src="/assets/img/hero/home-2/hero-search-sm.png" alt="" height={"200px"} /> */}
                              {/* <div className="hero__search-input hero__search-input-2">
                                 <span><i className="far fa-search"></i></span>
                                 <input type="text" placeholder="Search for templates" />
                              </div> */}
                              {/* <div className="hero__search-shape"> */}
                                 {/* <img className="man-search" src="/assets/img/hero/home-2/man-search.png" alt="" /> */}
                                 {/* <img className="hero-man-1" src="/assets/img/hero/home-2/man-1.png" alt="" /> */}
                                 {/* <img className="hero-man-2" src="/assets/img/hero/home-2/man-2.png" alt="" /> */}
                                 {/* <img className="hero-search-square" src="/assets/img/icon/hero/hero-square.png" alt="" />
                                 <img className="hero-search-square-2" src="/assets/img/icon/hero/hero-square-2.png" alt="" />
                              </div> */}
                           {/* </div> */}
                        </div>
{/* <div className="hero__client text-start pl-100">
                           <h4>Empowering 230,000+Businesses with Innovation</h4>

                           <ul>
                              <li><img src="/assets/img/hero/home-2/client/client-1.png" alt="" /></li>
                              <li><img src="/assets/img/hero/home-2/client/client-2.png" alt="" /></li>
                              <li><img src="/assets/img/hero/home-2/client/client-3.png" alt="" /></li>
                              <li><img src="/assets/img/hero/home-2/client/client-4.png" alt="" /></li>
                              <li><img src="/assets/img/hero/home-2/client/client-5.png" alt="" /></li>
                           </ul>
                        </div> */}
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HeroArea;