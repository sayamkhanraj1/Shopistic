import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
    const { id } = useParams()
    const [shipping, setShipping] = useState([])
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setShipping(data)
            })
    }, [])
    const {image, title, price} = shipping
    return (
        <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={image} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {price}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
        </Row>
    );
};

export default SingleProduct;