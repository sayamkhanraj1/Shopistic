import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';
import './Navblog.css'

const Navblogs = () => {
         return (
                  
                  <div>
                           <Header />
                           <div className="container my-5">
                           <h2 className="blog-titel text-center my-5">OUR BLOG</h2>
                           <div className="d-flex justify-content-center align-items-center row">
                           <div className="col-md-4 blog-img ">
                                    <Link to="blog1"><div className="blog-img"><img src="https://i.ibb.co/1bDvpmP/blog-1.jpg" alt="blog-img" /></div></Link>
                                    <div className="text-center blog-content ">
                                             <h3>A guide to latest trends</h3>
                                             <span className="text-muted">By Admin</span>
                                    </div>
                           </div>
                           <div className="col-md-4">
                                    <Link to="blog2"><div className="blog-img"><img src="https://i.ibb.co/hH60sLY/blog-2.jpg" alt="blog-img" /></div></Link>
                                    <div className="text-center blog-content">
                                             <h3>A guide to latest trends</h3>
                                             <span className="text-muted">By Admin</span>
                                    </div>
                           </div>
                           <div className="col-md-4">
                                    <Link to="blog3">
                                    <div className="blog-img"><img src="https://i.ibb.co/HTwLK75/blog-3.jpg" alt="blog-img" /></div>
                                    </Link>
                                    <div className="text-center blog-content">
                                             <h3>A guide to latest trends</h3>
                                             <span className="text-muted">By Admin</span>
                                    </div>
                           </div>
                           </div>
                  </div>
                  <Footer />
                  </div>
         );

};

export default Navblogs;