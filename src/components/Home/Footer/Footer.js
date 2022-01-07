import React from 'react';
import './Footer.css'


const Footer = () => {
         return (
                  <div>
      <div className="footer-container">
        <div>
          <div className="row">
            <div className="col-md-3">
              <div className="d-flex justify-content-center align-items-center">
              <h1><span className="text-danger">Shop</span><span className="text-secondary">istic.</span></h1>
              </div>
              <p className="mt-4 text-center">
                  © 2022 Shopistic. <br />
                  All Rights Reserved </p>
            </div>
            <div className="col-md-2">
              <div>
                       <h4>ABOUT US</h4>
                <ul>
                  <li className="footer-menu">About us</li>
                  <li className="footer-menu">Store location</li>
                  <li className="footer-menu">Contacts</li>
                  <li className="footer-menu">Orders tracking</li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div>
                       <h4>USEFUL LINKS</h4>
                <ul>
                  <li className="footer-menu">Returns</li>
                  <li className="footer-menu">Support Policy</li>
                  <li className="footer-menu">Size guide</li>
                  <li className="footer-menu">FAQs</li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div>
                       <h4>FOLLOW US</h4>
                <ul>
                  <li className="footer-menu">Facebook</li>
                  <li className="footer-menu">Twitter</li>
                  <li className="footer-menu">Instagram</li>
                  <li className="footer-menu">Youtube</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div>
                       <h4>SUBSCRIBE</h4>
                  <p>Get E-mail updates about our latest shop and special offers.</p>
                  <div>
                           <input type="text" className="p-2" className="footer-box" placeholder="Enter your email address" /> <br />
                           <button className="fotter-btn mt-2">SUBSCRIBE</button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
         );
};

export default Footer;