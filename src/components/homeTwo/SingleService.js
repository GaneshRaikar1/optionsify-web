import Link from 'next/link';
import React from 'react';

const SingleService = ({ color, img, title, description }) => {
   return (
      <>
         <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
            <div className="services__item white-bg mb-30 wow fadeinup" data-wow-delay=".3s">
               <div className="services__icon mb-45">
                  <span className={color}><img src={`assets/img/icon/services/services-${img}.svg`} alt="" /></span>
               </div>
               <div className="services__content">
                  {title}
                  {description}
               </div>
            </div>
         </div>
      </>
   );
};

export default SingleService;
