import Link from 'next/link';
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useSticky from '../../hooks/useSticky';
// import SidebarMenu from '../Sidebar/SidebarMenu';//React-Bootstrap-issue

const Header = () => {
   // handle sidebar show
   const [show, setShow] = useState(false);
   // handle close
   const handleClose = () => setShow(false);
   // handle sidebar show
   const handleShow = () => setShow(true);
   // sticky nav
   const { sticky } = useSticky();
   // user
   const { user, logout } = useAuth();
   return (
      <>
         <header>
            <div className={sticky ? "sticky header__area header__shadow-2 white-bg" : "header__area header__shadow-2 white-bg"} id="header-sticky">
               <div className="container">
                  <div className="row align-items-center">
                     <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-6">
                        <div className="logo">
                           <Link href="/">
                              <a><img src="assets/img/logo.png" alt="logo" /></a>
                           </Link>
                        </div>
                     </div>
                     <div className="col-xxl-10 col-xl-10 col-lg-10 d-none d-lg-block">
                        <div className="main-menu d-flex justify-content-end">
                           <nav id="mobile-menu">
                              <ul>
                                 <li><Link href="/"><a>Home</a></Link></li>
                                 {/* <li><Link href="/features"> Features</Link></li> */}
                                 <li><Link href="/trading-bots"><a>Algo Trader </a></Link></li>

                                 <li><Link href="/services"><a>Services</a></Link></li>
                                 <li><Link href="/about"><a>About Us</a></Link></li>

                                 {/* <li><Link href="/pricing"><a >Pricing</a></Link></li> */}
                                 {/* <li ><Link href="/blog" ><a >Blogs</a></Link></li> */}
                                 <li ><Link href="/contact" ><a >Contact</a></Link></li>  <li ><Link href="https://app.optionsify.com/auth/login"><a>Login</a></Link></li>  </ul>
                           </nav>
                        </div>
                     </div>
                     <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-8 col-6">
                        <div className="header__action d-flex align-items-center justify-content-end">
                           <div className="sidebar__menu d-lg-none" onClick={handleShow}>
                              <div className="sidebar-toggle-btn" id="sidebar-toggle">
                                 <span className="line"></span>
                                 <span className="line"></span>
                                 <span className="line"></span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>

         {/* <SidebarMenu show={show} handleClose={handleClose} /> */}
      </>
   );
};

export default Header;