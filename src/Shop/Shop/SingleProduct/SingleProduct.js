import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './SingleProducts.css'
import useAuth from '../../../Hooks/useAuth';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const Orders = () => {

         let {id} = useParams();
         const {user} = useAuth();

         const [orders, setOrders] = useState([]);
         const [singleOrder, setSingleOrder] = useState({});

         useEffect(()=>{
                  fetch('https://murmuring-anchorage-32548.herokuapp.com/products')
                  .then(res => res.json())
                  .then(data => setOrders(data))
         },[])
         useEffect(()=>{
                  const foundProducts = orders.find(booking => (booking._id == id))
                  setSingleOrder(foundProducts)
         },[orders, id])

         // react hook form
         const { register, handleSubmit, watch, formState: { errors } } = useForm();

         console.log(watch("example")); 

         return (
                  <div className="container">
                  <div className="row"> 
                  <div className="col-md-6 mt-4 mb-3">
                 <div className="card h-100 card-style">
                   <div className="d-flex justify-content-center align-items-center"> 
                     <img className="w-50 mt-2" src={singleOrder?.img} alt="..."/>
                     </div>
                    <div className="mt-3 package-detail d-flex justify-content-around">
                    </div>
                    <div className="card-body text-center package-text">
                      <h3 className="card-title mb-3">{singleOrder?.name}</h3>
                      <h5 className="fw-bold text-secondary mb-2">Price: {singleOrder?.price}</h5>
                      <div className="d-flex justify-content-center align-items-center"><Rating
                                    initialRating={singleOrder?.rating}
                                    readonly
                                    emptySymbol="far fa-star icon-color"
                                    fullSymbol = "fas fa-star icon-color"
                                    ></Rating></div>
                    </div>
                    <div> <p className="text-center mx-2">{singleOrder?.des}</p> </div>
                  </div>
                 </div>

                  <div className="col-md-6 mt-4 mb-3">
                  <form>
                                {
                                   singleOrder?.name &&  <input
                                   {...register("title")}
                                   defaultValue={singleOrder?.name}
                                   placeholder="Title"
                                   className="p-3 m-3 w-100 border border-success rounded"
                                   />
                                }
                               <br />
                               <input
                                {...register("name")}
                                defaultValue={user.displayName}
                                placeholder="Name"
                                className="p-3 m-3 w-100 border border-success rounded"
                                />
                               <br />
                               <input
                                {...register("email")}
                                defaultValue={user.email}
                                placeholder="Email"
                                className="p-3 m-3 w-100 border border-success rounded"
                                />
                               <br />
                               <input
                               {...register("date", { required: true })}
                               type="date"
                               className="p-3 m-3 w-100 border border-success rounded"
                               />
                                <br/>
                               <select {...register("gender")} className="p-3 m-3 w-100 border border-success rounded">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                              </select>
                              <br/>
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