import React from 'react';
import shipping from './../../../images/support-logo/support-1.png';
import support from './../../../images/support-logo/support-2.png';
import money from './../../../images/support-logo/support-3.png';
import discount from './../../../images/support-logo/support-4.png';

const Support = () => {
         return (
                  <div className="container my-5">
                           <div className="row">
                           <div className="col-md-3 d-flex justify-content-center align-items-center">
                           <img className="me-4" src={shipping} alt="" />
                           <div>
                                    
                                    <h5>Free shipping</h5>
                                    <p className="text-secondary">Free shipping on all order</p>
                           </div>
                           </div>
                           <div className="col-md-3 d-flex justify-content-center align-items-center">
                           <img className="me-4" src={support} alt="" />
                           <div>
                                   
                                    <h5>Free shipping</h5>
                                    <p className="text-secondary">Free shipping on all order</p>
                           </div>
                           </div>
                           <div className="col-md-3 d-flex justify-content-center align-items-center">
                           <img className="me-4" src={money} alt="" />
                           <div>
                                    
                                    <h5>Free shipping</h5>
                                    <p className="text-secondary">Free shipping on all order</p>
                           </div>
                           </div>
                           <div className="col-md-3 d-flex justify-content-center align-items-center">
                           <img className="me-4" src={discount} alt="" />
                           <div>
                                    
                                    <h5>Free shipping</h5>
                                    <p className="text-secondary">Free shipping on all order</p>
                           </div>
                           </div>
                           </div>
                  </div>
         );
};

export default Support;