import React from 'react';
import { faqsA, faqsB, faqsC, faqsD } from '../../data/faqServices';
import SingleAccording from './SingleAccording';

const FaqArea = () => {
   return (
      <>
         <section className="faq__area grey-bg-2 pt-105 pb-125">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                     <div className="section__title-wrapper text-center mb-65">
                        <h2 className="section__title">Frequently Asked Questions</h2>
                        {/* <p>A load of old tosh the full monty sloshed pukka squiffy.</p> */}
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-3">
                     <div className="faq__tab wow fadeInLeft" data-wow-delay=".3s">
                        <ul className="nav nav-tabs" id="faqTab" role="tablist">
                           <li className="nav-item" role="presentation">
                              <button className="nav-link active" id="sale-tab" data-bs-toggle="tab" data-bs-target="#sale" type="button" role="tab" aria-controls="sale" aria-selected="false">Recent</button>
                           </li>
                           <li className="nav-item" role="presentation">
                              {/* <button className="nav-link" id="template-tab" data-bs-toggle="tab" data-bs-target="#template" type="button" role="tab" aria-controls="template" aria-selected="false">Templates</button> */}
                           </li>
                           {/* <li className="nav-item" role="presentation">
                              <button className="nav-link" id="ui-tab" data-bs-toggle="tab" data-bs-target="#ui" type="button" role="tab" aria-controls="ui" aria-selected="false">UI Design </button>
                           </li>
                           <li className="nav-item" role="presentation">
                              <button className="nav-link" id="xd-tab" data-bs-toggle="tab" data-bs-target="#xd" type="button" role="tab" aria-controls="xd" aria-selected="false">XD Files</button>
                           </li> */}
                        </ul>
                     </div>
                  </div>

                  <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-9">
                     <div className="faq__tab-content wow fadeInRight" data-wow-delay=".7s">
                        <div className="tab-content" id="faqTabContent">
                           <div className="tab-pane fade show active" id="sale" role="tabpanel" aria-labelledby="sale-tab">
                              <div className="accordion" id="sale-accordion">
                                 {faqsA.map(({ q, a }, i) => <SingleAccording key='q' showClass="accordion-collapse 
                                 collapse" question={q} answer={a} />)}
                              </div>
                           </div>
                           <div className="tab-pane fade" id="template" role="tabpanel" aria-labelledby="template-tab">
                              <div className="accordion" id="template-accordion">
                                 {faqsB.map(({ q, a }) => <SingleAccording key='q' number="One" showClass="accordion-collapse 
                                 collapse" question={q} answer={a} />)}
                              </div>
                           </div>
                           {/* <div className="tab-pane fade" id="ui" role="tabpanel" aria-labelledby="ui-tab">
                              <div className="accordion" id="ui-accordion">
                                 {faqsC.map(({ q, a }) => <SingleAccording key='q' showClass="accordion-collapse 
                                 collapse" question={q} answer={a} />)}
                              </div>
                           </div>
                           <div className="tab-pane fade" id="xd" role="tabpanel" aria-labelledby="xd-tab">
                              <div className="accordion" id="xd-accordion">
                                 {faqsD.map(({ q, a }) => <SingleAccording key='q' showClass="accordion-collapse 
                                 collapse" question={q} answer={a} />)}
                              </div> 
                        </div>*/}
                        </div>
                     </div>
                  </div>


               </div>
            </div>
         </section>
      </>
   );
};

export default FaqArea;