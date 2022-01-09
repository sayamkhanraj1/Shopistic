import React, { useState } from 'react';
import './Login.css';
import useAuth from '../../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const Login = () => {
    //we will set our input datas on this state as object
    const [loginData, setLoginData] = useState({});
    const { loginUser, isLoading, success, passError } = useAuth();

    const navigate = useNavigate();

    //to capture the input value from the input field

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = (e) => {
        loginUser(loginData.email, loginData.password, navigate);
        e.target.value('');
        e.preventDefault();

    };

    return (
        <div className='login-form'>
            {
                !isLoading && <form onSubmit={handleLoginSubmit}>
                    <input onBlur={handleOnBlur} type="email" name="email" placeholder="Email" required/>
                    <input onBlur={handleOnBlur} type="password" name="password" placeholder="Password" required />
                    {success && <p style={{ marginTop: '6px' }}>{success}</p>}
                    {passError && <p style={{ marginTop: '6px' }}>{success}</p>}
                    <div className="button-box">
                        {/* <div className="login-toggle-btn">
                        <input type="checkbox" />
                        <label>Remember me</label>
                        <a href="/">Forgot Password?</a>
                    </div> */}
                        <button type='submit'><span>Login</span></button>
                    </div>
                </form>
            }
            {isLoading && <div className="w-25 mx-auto text-center" style={{ height: "60vh" }}><Spinner className="my-5" animation="border" variant="dark" /></div>}
        </div>
    );
};

export default Login;