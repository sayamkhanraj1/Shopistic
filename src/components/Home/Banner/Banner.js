import React from 'react';
import {Carousel} from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <Carousel fade>
                <Carousel.Item>
                    <div className="row">
                           <div className="col-md-6 d-flex justify-content-center align-items-center">
                           <div>
                           <h3 className="banner-heading1">Smart Products</h3>
                           <h1 className="banner-heading">Summer Offer <br /> 2020 Collection</h1>
                           <button className="banner-btn">SHOP NOW</button>
                           </div>
                           </div>
                           <div className="col-md-6">
                           <img
                           className="d-block w-100 p-3"
                           height="700"
                           src="https://i.ibb.co/fSpr7Qw/single-slide-1.png"
                           alt="first slide"
                           />
                           </div>
                    </div>
                  </Carousel.Item>
                <Carousel.Item>
                <div className="row">
                           <div className="col-md-6 d-flex justify-content-center align-items-center">
                           <div>
                           <h3 className="banner-heading1">Smart Products</h3>
                           <h1 className="banner-heading">Winter Offer <br /> 2020 Collection</h1>
                           <button className="banner-btn">SHOP NOW</button>
                           </div>
                           </div>
                           <div className="col-md-6">
                           <img
                           className="d-block w-100 p-3"
                           height="700"
                           src="https://i.ibb.co/QQT443g/single-slide-2.png"
                           alt="second slide"
                           />
                           </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;