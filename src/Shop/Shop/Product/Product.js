import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css'

const Product = (props) => {

        const { image, price, title, id } = props.p

       /*  // icons
        const cartIcon = <FontAwesomeIcon icon={faCartArrowDown} />
        const starIcon = <FontAwesomeIcon icon={faStar} /> */
  


        return (
                  <div className="col-md-4 mt-4 mb-3">
                 <div className="card h-100 card-style">
                   <div className=" img-effect d-flex justify-content-center align-items-center"> 
                     <img className="w-50 mt-2" src={image} alt="..."/>
                     </div>
                    <div className="mt-3 package-detail d-flex justify-content-around">
                    </div>
                    <div className="card-body text-center package-text">
                      <h3 className="card-title mb-3">{title}</h3>
                      <h5 className="fw-bold text-secondary mb-2">Price: {price}</h5>
                      {/* <h6 className="fw-bold text-secondary"><span className="star">{starIcon}</span> {rating}</h6> */}
                    </div>
                    
                    <div className="d-flex justify-content-center align-items-center">
                     <Link to={`/moreproduct/${id}`}>
                     <button className="service-btn mb-3 btn"> Buy Now</button>
                     </Link>
                    </div>
                  </div>
                 </div>
         );
};

export default Product;