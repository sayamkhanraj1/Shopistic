import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import './DailyDeal.css'

const Product = (props) => {

        const { img, price, name, _id, rating } = props.p


        return (
                  <div className="col-md-4 mt-4 mb-3">
                 <div className="card h-100 card-style">
                   <div className=" img-effect d-flex justify-content-center align-items-center"> 
                     <img className="w-75 mt-2" src={img} alt="..."/>
                     </div>
                    <div className="mt-3 package-detail d-flex justify-content-around">
                    </div>
                    <div className="card-body text-center package-text">
                      <h3 className="card-title mb-3">{name}</h3>
                      <h5 className="fw-bold text-secondary mb-2">Price: {price}</h5>
                      <div className="d-flex justify-content-center align-items-center"><Rating
                                    initialRating={rating}
                                    readonly
                                    emptySymbol="far fa-star icon-color"
                                    fullSymbol = "fas fa-star icon-color"
                                    ></Rating></div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                     <Link to={`/moreproduct/${_id}`}>
                     <button className="service-btn mb-3 btn"> Buy Now</button>
                     </Link>
                    </div>
                  </div>
                 </div>
         );
};

export default Product;