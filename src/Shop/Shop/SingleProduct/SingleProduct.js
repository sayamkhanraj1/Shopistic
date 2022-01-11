import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './SingleProducts.css'
import useAuth from '../../../Hooks/useAuth';
import Rating from 'react-rating';
// import { Spinner } from 'react-bootstrap';

const Orders = () => {

  let { id } = useParams();
  const { user } = useAuth();

  const [orders, setOrders] = useState([]);
  const [singleOrder, setSingleOrder] = useState({});
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://murmuring-anchorage-32548.herokuapp.com/products')
      .then(res => res.json())
      .then(data => setOrders(data))
  }, [])
  useEffect(() => {
    const foundProducts = orders.find(booking => (booking._id === id))
    setSingleOrder(foundProducts)
  }, [orders, id])

  // react hook form
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    data.status = "Pending";
    data.quantity = quantity.toString();
    data.price = singleOrder?.price * quantity;
    fetch('https://murmuring-anchorage-32548.herokuapp.com/ordersInfo', {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        alert("Ordered Successfully!");
        reset();
        navigate('/dashbord')
      });
    console.log(data);
  };

  console.log(watch("example"));

  //Quantity

  // Function is called everytime increment button is clicked
  const handleClick1 = () => {
    // Counter state is incremented
    setQuantity(quantity + 1)
  }

  // Function is called everytime decrement button is clicked
  const handleClick2 = () => {
    // Counter state is decremented
    if (quantity <= 1) {
      setQuantity(1)
    }
    else {
      setQuantity(quantity - 1)
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 my-auto">
          <div className="card card-style">
            <div className="d-flex justify-content-center align-items-center">
              <img className="w-50 mt-2" src={singleOrder?.img} alt="..." />
            </div>
            <div className="mt-3 package-detail d-flex justify-content-around">
            </div>
            <div className="card-body text-center package-text">
              <h3 className="card-title mb-3">{singleOrder?.name}</h3>
              <h5 className="fw-bold text-secondary mb-2">Price: {singleOrder?.price * quantity}</h5>
              <div className="product-counter">
                <div className="counter">
                  <button onClick={handleClick2} className='minus-btn' ><i class="fas fa-minus-square"></i></button>
                  <div style={{ fontSize: '30px' }}>{quantity}</div>
                  <button onClick={handleClick1} className='plus-btn'><i class="fas fa-plus-square"></i></button>
                </div>
              </div>

              <div className="d-flex justify-content-center align-items-center"><Rating
                initialRating={singleOrder?.rating}
                readonly
                emptySymbol="far fa-star icon-color"
                fullSymbol="fas fa-star icon-color"
              ></Rating></div>
            </div>
            <div> <p className="text-center mx-2">{singleOrder?.des}</p> </div>
          </div>
        </div>

        <div className="col-md-8 mt-4 mb-3">
          <h2 className='mb-2'>Billing Details</h2>
          <form onSubmit={handleSubmit(onSubmit)} className='p-5'>
            {
              singleOrder?.name && <><label className='fs-4'>Product Name</label> <input
                {...register("title")}
                defaultValue={singleOrder?.name}
                placeholder="Title"
                className="p-3 m-3 w-100 border border-success rounded"
              /></>
            }
            <br />
            {
              singleOrder?.name && <>
                <label className='fs-4'>User Name</label>
                <input
                  {...register("name")}
                  defaultValue={user.displayName}
                  placeholder="Name"
                  className="p-3 m-3 w-100 border border-success rounded"
                />
                <br />
              </>
            }
            {
              singleOrder?.name && <>
                <label className='fs-4'>Email</label>
                <input
                  {...register("email")}
                  defaultValue={user.email}
                  placeholder="Email"
                  className="p-3 m-3 w-100 border border-success rounded"
                />
                <br />
              </>
            }
            <label className='fs-4'>Date</label>
            <input
              {...register("date", { required: true })}
              type="date"
              className="p-3 m-3 w-100 border border-success rounded"
            />
            <br />
            <label className='fs-4'>Gender</label>
            <select {...register("gender")} className="p-3 m-3 w-100 border border-success rounded">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <br />
            <label className='fs-4'>City</label>
            <input
              {...register("city", { required: true })}
              placeholder="City"
              className="p-3 m-3 w-100 border border-success rounded"
            />
            <br />
            {errors.exampleRequired && <span>This field is required</span>}
            <input type="submit" value="Confirm Booking" className="btn btn-success w-100 border border-success rounded m-3" />
          </form>
        </div>

      </div>
    </div>

  );
};

export default Orders;