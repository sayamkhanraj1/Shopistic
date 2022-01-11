import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import DailyDeal from '../DailyDeal/DailyDeal'

const DailyDeals = () => {
    const [product, setProduct] = useState([])
    useEffect(()=>{
        fetch('https://murmuring-anchorage-32548.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    return (
        <Container>
                 <h2 className="blog-titel text-center my-5">DAILY DEALS!</h2>
            <Row xs={1} md={4} className="g-4">
                {
                     product.slice(0, 6).map(p => <DailyDeal
                           key={p._id}
                           p={p}
                     ></DailyDeal>)
                }
            </Row>
        </Container>
    );
};

export default DailyDeals;