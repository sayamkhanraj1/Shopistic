import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from './Product/Product';

const Products = () => {
    const [product, setProduct] = useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    return (
        <Container>
            <Row xs={1} md={4} className="g-4">
                {
                    product.map(p => <Product key={p.id}
                    p={p}
                    ></Product>)
                }
            </Row>
        </Container>
    );
};

export default Products;