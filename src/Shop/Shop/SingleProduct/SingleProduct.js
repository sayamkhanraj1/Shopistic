import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";


const SingleProduct = () => {
    const { id } = useParams()
    const [shipping, setShipping] = useState([])
    const { register, handleSubmit, reset, } = useForm();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setShipping(data)
            })
    }, [])
    const onSubmit = data => {
       reset()
       alert('Order added')
    }
    const {image, title, price} = shipping
    return (
        <Container>
            <Row xs={1} md={2} className="g-4">
                <div className="col-md-4">
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
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-4">
                <form className='my-5' onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 60 })} placeholder='name' />
                 <br /> <br />
                <input type="email" {...register("email" ,{required: true})} placeholder='email' /> 
                <br /> <br />
                <input {...register("product" ,{required: true})} placeholder='Destination name' /> 
                <br /> <br />
                <input  {...register("address", { required: true, maxLength: 40 })} placeholder='address' />
                 <br /> <br />
                <input type="number" {...register("phone")} placeholder='Phone' /> 
                <br /> <br />
                <input type="number" {...register("quantity", { required: false, maxLength: 9 })} placeholder='Quantity' /> <br /> <br />
                <textarea {...register("description", { required: false, maxLength: 2000 })} placeholder='description' /> <br /> <br />
                <input type="submit" value="procced to booking" />
            </form>
                </div>
        </Row>
        </Container>
    );
};

export default SingleProduct; 