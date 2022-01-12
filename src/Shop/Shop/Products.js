import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Footer from '../../components/Home/Footer/Footer';
import Header from '../../components/Home/Header/Header';
import Product from './Product/Product';

const Products = () => {
    const [product, setProduct] = useState([])
    useEffect(()=>{
        fetch('https://murmuring-anchorage-32548.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    return (
        <div>
            <Header />
            <Container>
            <Row xs={1} md={4} className="g-4">
                {
                    product.map(p => <Product key={p._id}
                    p={p}
                    ></Product>)
                }
            </Row>
        </Container>
        <Footer />
        </div>
    );
};

export default Products;