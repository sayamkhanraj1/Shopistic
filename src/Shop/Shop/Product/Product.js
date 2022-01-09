import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Product = (props) => {
    const { image, price, title, id } = props.p
    return (

        <Col>
            <Card>
                <Card.Img  style={{width: '150px'}} variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {price}
                    </Card.Text>
                    <NavLink to={`/moreproduct/${id}`}>
                    <button className="btn-primary">Buy Now</button>
                    </NavLink>
                    
                </Card.Body>
            </Card>
        </Col>

    );
};

export default Product;