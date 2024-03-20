import Link from 'next/link';
import React from 'react';

const FeaturedItem = () => {
   const itemsData = [
      {
         "id": 1,
         "img": "assets/img/icon/category/cat-1.png",
         "name": "Algo Trader",
         "itemNumber": "Seemless AI driven algo execution platform connected to your broker"
      },
      {
         "id": 2,
         "img": "assets/img/icon/category/cat-2.png",
         "name": "Trade Signals",
         "itemNumber": "Trade from Tradingview, Mt4, Amibroker, our own Optionsify AI ...Signals"
      },
      {
         id: 3,
         img: 'assets/img/icon/category/cat-3.png',
         name: 'Strategies & Screeners',
         itemNumber: 'Get your custom Indicator based strategies & screeners'
      },
      {
         id: 4,
         img: 'assets/img/icon/category/cat-3.png',
         name: 'Learn from your trade journal',
         itemNumber: 'Learn from your trade journal, Forward test your strategy (paper trade) and then scale up Live '
      },
   ]
   return (
      <>
         <section className="overlay-top">
            <div className="container">
               <div className="row">
                  {
                     itemsData.map(item => {
                        return <div key={item.id} className="col-lg-3 col-md-3 col-sm-6">
                           <div className="mt_cat shadow">
                              <div className="mt_cat_avater">
                                 <img src={item.img} className="img-fluid" alt="" width="200px" />
                              </div>
                              <div className="mt_cat_caps">
                                 <h3 className="mt_cat_title">
                                    <Link href="/product"><a >{item.name}</a></Link>
                                 </h3>
                                 <span>{item.itemNumber}</span>
                              </div>
                           </div>
                        </div>
                     })
                  }

               </div>
            </div>
         </section>
      </>
   );
};

export default FeaturedItem;