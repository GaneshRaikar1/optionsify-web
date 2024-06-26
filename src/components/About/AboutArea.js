import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from '../../styles/Blog.module.css';

const AboutArea = ({ frontmatter, markdown }) => {
   return (
      <section className="about__area pt-100">
         <div className="container">
            <div className="row">
               <div className="col-xxl-10 offset-xxl-1 col-xl-10 offset-xl-1">
                  <div className="about__wrapper">
                     <h3 className="about__title">Journey to Systematic Trading:  <br /> The Algo Trading Evolution</h3>
                     <div className="about__thumb w-img wow fadeInUp" data-wow-delay=".3s">
                        {/* <img src={frontmatter.img} alt="img" /> */}
                     </div>
                     <div className="about__count pt-50 pb-15 wow fadeInUp" data-wow-delay=".5s">
                           {/* <div className="row">
                              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                 <div className="about__count-item text-center launche mb-30">
                                    <p>LAUNCHED IN</p>
                                    <h4><span className="counter">2009</span></h4>
                                 </div>
                              </div>
                              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                 <div className="about__count-item text-center community mb-30">
                                    <p>COMMUNITY OF</p>
                                    <h4><span className="counter">13,000</span>+</h4>
                                 </div>
                              </div>
                              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                 <div className="about__count-item text-center mission mb-30">
                                    <p>MISSION PROGRESS</p>
                                    <h4><span className="counter">4.9</span>%</h4>
                                 </div>
                              </div>
                           </div> */}
                        </div>
                        <div className="about__content">
                           {/* <p className="about__text">{`Tomfoolery nice one have it cup of tea wind up bugger on your bike mate 
                           cobblers Queen's English, it's all gone to pot mush a load of old tosh off his nut I don't want
                            no agro up the duff. Blower excuse my French William squiffy bender young delinquent 
                            the little rotter pardon me bubble and  squeak baking cakes don't get shirty with me!`}</p>
                           <p className="about__sub-text">With their varied backgrounds, our engineers collaborate
                              with the other roles at Automattic to define, implement, and
                              improve the experience those engines provide and enable.</p> */}
                           <div className={styles['container']}>
                        <div className={styles['wrapper']}>
                           <ReactMarkdown>
                              {markdown}
                           </ReactMarkdown>
</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default AboutArea;
