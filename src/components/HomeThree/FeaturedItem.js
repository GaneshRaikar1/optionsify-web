import Link from 'next/link';
import React from 'react';

const FeaturedItem = () => {
   const itemsData = [
      {
         "id": 1,
         "img": "assets/img/icon/category/cat-1.png",
         "name": "Algo Trader",
         "itemNumber": "Execute advanced strategies seamlessly integrated with your broker, featuring risk management at both portfolio and strategy levels."
         // "itemNumber": "Execute complex strategies effortlessly with our AI-driven platform, seamlessly integrated with your broker"
         // "itemNumber": "Seemless AI signals driven algo execution platform connected to your existing broker"
      },
      {
         "id": 2,
         "img": "assets/img/icon/category/cat-2.png",
         "name": "Trade SignalPro",
         "itemNumber": "Access trade signals from various platforms like TradingView, Mt4, Amibroker, and our proprietary Optionsify AI"
         // "itemNumber": "Trade from Tradingview, Mt4, Amibroker, our own Optionsify AI ...Signals"
      },
      {
         id: 3,
         img: 'assets/img/icon/category/cat-3.png',
         name: 'Strat Builder', //Strategies + Screeners
         itemNumber: "We specialize in crafting customized strategies and screeners tailored to your trading style and unique set of indicators"
         // itemNumber: 'We build bespoke strategies and screeners tailored to your trading style and unique indicators.'
         // itemNumber: 'We help develop your custom Indicator based Strategies + Screeners'
      },
      {
         id: 4,
         img: 'assets/img/icon/category/cat-3.png',
         name: 'Insight Master',
         itemNumber: 'Gain deep insights from your trading journal, Forward test your strategy (paper trade) and then scale up with data-driven analytics'
         // itemNumber: 'Learn from your trading journal, Forward test your strategy (paper trade) and then scale up Live '
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