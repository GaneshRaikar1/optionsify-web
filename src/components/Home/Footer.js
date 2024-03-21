import Link from 'next/link';
import React from 'react';

const Footer = () => {
   return (

      <footer>
         <div className="footer__area footer-bg">
            <div className="footer__top pt-40">
               <div className="container">
                  <div className="row">
                     {/* <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-4">
                        <div className="footer__widget mb-40 wow fadeInUp" data-wow-delay=".3s">
                           <div className="footer__widget-head mb-35">
                              <h4 className="footer__widget-title">Follow our Socials</h4>
                           </div>
                           <div className="footer__widget-content">
                              <div className="footer__social mb-30">
                                 <ul>
                                    <li><a className="fb"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a className="tw"><i className="fab fa-twitter"></i></a></li>
                                    <li><a className="pin"><i className="fab fa-pinterest-p"></i></a></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div> */}
                     <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-4">
                        <div className="footer__widget mb-40 wow fadeInUp" data-wow-delay=".5s">
                           <div className="footer__widget-head">
                              <h4 className="footer__widget-title">Quick Links</h4>
                           </div>
                           <div className="footer__widget-content">
                              <div className="footer__link">
                                 <ul>
                                 <li><Link href="/services">Services </Link></li>
                                 <li><Link href="/trading-bots">AlgoTrader</Link></li>
                                    <li><Link href="/about">About Us</Link></li>
                                    <li><Link href="/contact">Contact</Link></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                     {/* <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-4">
                        <div className="footer__widget mb-40 wow fadeInUp" data-wow-delay=".9s">
                           <div className="footer__widget-head">
                              <h4 className="footer__widget-title">About Us</h4>
                           </div>
                           <div className="footer__widget-content">
                              <div className="footer__link">
                                 <ul>
                                    <li><Link href="/about">About Us</Link></li>
                                    <li><Link href="/blog">Blogs</Link></li>
                                    <li><Link href="/pricing">Pricing</Link></li>
                                    <li><Link href="/contact">Contact</Link></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div> */}
                     <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-4">
                        <div className="footer__widget mb-40 wow fadeInUp" data-wow-delay="1.2s">
                           <div className="footer__widget-head">
                              <h4 className="footer__widget-title">About Us</h4>
                           </div>
                           <div className="footer__link">
                              <p style={{ color: '#99989e' }}>At Optionsify, We create next-gen trading tools to help navigate the markets smarter. Optionsify Trader, is an algo execution platform that makes systematic trading easy. Apart from our backtested strategies, we can help automate your trading strategies.</p>
                              <p style={{ color: '#99989e' }}>+ 91 804-121-7152</p>
                              <p style={{ color: '#99989e' }}>optionsify@claritiz.com</p>
                              {/* <p style={{ color: '#99989e' }}>Optionsify is an algo execution platform for trading that makes systematic trading easy. Investments in securities market are subject to market risks, read all the related documents carefully before investing. Any securities quoted are example and not as a recommendation.</p> */}
                              {/* platform that connects various platform like Amibroker, MT4, TradingView to your broker via API, and help retail traders and Investor to manage their wealth smartly. Please consult your financial advisor before investing/trading via our platform. Algofox is not liable to any losses occurred due to any reason whatsoever due to our platform. */}
                           </div>
                        </div>
                     </div>
                     <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4">
                        <div className="footer__widget mb-40 wow fadeInUp" data-wow-delay="1.2s">
                           <div className="footer__widget-head">
                              <h4 className="footer__widget-title">Disclaimer</h4>
                           </div>
                           <div className="footer__link">
                              {/* <p style={{ color: '#99989e' }}>Optionsify is an algo execution platform that makes systematic trading easy. Apart from our backtested strategies, we can help automate your trading strategies.</p>
                              <p style={{ color: '#99989e' }}>+ 91 804-121-7152</p>
                              <p style={{ color: '#99989e' }}>info@claritiz.com</p> */}
                              <p style={{ color: '#99989e' }}>Investments in securities market are subject to market risks, We are not SEBI registered. Consult your financial advisor before choosing Optionsify for your investment decisions. Any securities quoted are example and not as a recommendation.</p>

                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="footer__bottom">
               <div className="container">
                  <div className="footer__bottom-inner">
                     <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-md-6">
                           <div className="footer__copyright wow fadeInUp" data-wow-delay=".5s">
                              {/* <p>Copyright © 2024 All Rights Reserved <Link href="/">Optionsify</Link></p> */}
                              <p>Optionsify by Claritiz Innovations Pvt Ltd, All Rights Reserved</p>
                           </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-md-6">
                           <div className="footer__bottom-link wow fadeInUp text-md-end" data-wow-delay=".8s">
                              <ul>
                                 {/* <li><Link href="/legal">Legal</Link></li> */}
                                 <li><Link href="/disclaimer">Disclaimer </Link></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>

   );
};

export default Footer;