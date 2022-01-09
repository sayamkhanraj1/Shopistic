import React from 'react';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import DailyDeals from '../DailyDeals/DailyDeals';
import Support from '../Support/Support';


const Home = () => {
         return (
                  <div>
                      <Banner />
                      <Support />
                      <DailyDeals />
                      <Blogs />                
                  </div>
         );
};

export default Home;                