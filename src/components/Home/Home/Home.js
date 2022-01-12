import React from 'react';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import DailyDeals from '../DailyDeals/DailyDeals';
import DisplayReview from '../DisplayReview/DisplayReview';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Support from '../Support/Support';


const Home = () => {
         return (
                  <div>
                      <Header />
                      <Banner />
                      <Support />
                      <DailyDeals />
                      <Blogs /> 
                      <DisplayReview />  
                      <Footer />             
                  </div>
         );
};

export default Home;                