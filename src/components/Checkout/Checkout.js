import React from 'react';
import './Checkout.css';

const CheckOut = () => {
    return (
        <div className="checkout-area">
            <div className="container">
              
                <div className="row">
                    <div className="col-lg-12">
                        <div className="cart-products-wrap">
                            <div className="cart-products">
                                <div className="product">
                                    <img src="" alt="" />
                                    <div className="product-details">
                                        <p>Product</p>
                                        <p>Id</p>
                                        <div className='color' color='black'></div>
                                        <p>Size</p>
                                    </div>
                                </div>
                                <div className="product-counter">
                                    <div className="counter">
                                        <button className='plus-btn'>+</button>
                                        <div style={{fontSize: '30px'}}>0</div>
                                        <button className='minus-btn'>-</button>
                                    </div>
                                    <div style={{ fontSize: '30px' }}>Price: $30</div>
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="billing-info-wrap">
                            <h3>Billing Details</h3>
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="billing-info">
                                        <label>First Name</label>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="billing-info">
                                        <label>Last Name</label>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="billing-info">
                                        <label>Company Name</label>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="billing-select">
                                        <label>Country</label>
                                        <select>
                                            <option>Select a Country</option>
                                            <option>America</option>
                                            <option>Bangladesh</option>
                                            <option>India</option>
                                            <option>Srilanka</option>
                                            <option>Pakistan</option>
                                            <option>New Zealand</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="billing-info">
                                        <label>Street Address</label>
                                        <input className="billing-address" placeholder='House number and street name' type="text" />
                                        <input placeholder='Apartment, suite, unit etc.' type="text" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="billing-info">
                                        <label>Town / City</label>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="billing-info">
                                        <label>State / Country</label>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="billing-info">
                                        <label>Postcode / ZIP</label>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="billing-info">
                                        <label>Phone</label>
                                        <input type="tel" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="billing-info">
                                        <label>Email Address</label>
                                        <input type="text" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="your-order-area">
                            <h3>Your Order</h3>
                            <div className="your-order-wrap">
                                <div className="your-order-product-info">
                                    <div className="your-order-top">
                                        <ul>
                                            <li>Sub Total</li>
                                            <li>$345</li>
                                        </ul>
                                    </div>
                                    <div className="your-order-middle">
                                        <ul>
                                            <li>Estimated Shipping</li>
                                            <li>$345</li>
                                        </ul>
                                    </div>
                                    <div className="your-order-middle2">
                                        <ul>
                                            <li>Shipping Discount</li>
                                            <li>$345</li>
                                        </ul>
                                    </div>
                                    <div className="your-order-bottom">
                                        <ul>
                                            <li>Total</li>
                                            <li>$345</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="checkout">
                                <div className="checkout-btn">
                                        <button>Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Container >
                <Row >
                    <Col md={6} xs={12} className="p-5">
                        <h4>Billing Details</h4>
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="name" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="name" />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="1234 Main St" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress2">
                                <Form.Label>Address 2</Form.Label>
                                <Form.Control placeholder="Apartment, studio, or floor" />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Phone </Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Confirm My Details" />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col md={6} xs={12} className="p-5">
                        <h4>Your Order</h4>
                        <Row>
                            <Col>
                                <h5>Products</h5>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </Col>
                            <Col>
                                <h5>Total</h5>
                                <p>100</p>
                            </Col>
                            <Button style={{
                                fontSize: "14px",
                                fontWeight: "500",
                                lineHeight: "1",
                                display: 'inline-block',
                                padding: "18px 63px 17px",
                                textTransform: "uppercase",
                                color: "white",
                                borderRadius: "50px",
                                backgroundColor: "#6f42c1",
                                border: "none",
                            }}>Place Order</Button>
                        </Row>
                    </Col>
                </Row>
            </Container> */}
        </div>
    );
};

export default CheckOut;