import React from 'react';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Support from '../Support/Support';


const Home = () => {
         return (
                  <div>
                      <Header />
                      <Banner />
                      <Support />
                      <Blogs />
                      <Footer />                  
                  </div>
         );
};

export default Home;                