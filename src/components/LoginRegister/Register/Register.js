import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Register.css';

const Register = () => {

    //accessing useAuth which represents useFirebase;
    const { registerUser, isLoading, success, authError, setAuthError } = useAuth();

    //we will set our input datas on this state as object
    const [registerData, setRegisterData] = useState({});

    const [match, setMatch] = useState('');

    const navigate = useNavigate();

    //to capture the input value from the input field
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
    }

    const handleRegisterSubmit = (e) => {
        if (registerData.password === registerData.password2) {
            setMatch('');
            setAuthError('');
            registerUser(registerData.email, registerData.password, registerData.name, navigate, setMatch);
            e.target.value('');
          

        }
        else {
            setMatch("Password Didn't Match");
            setAuthError('');
        }
        e.preventDefault();
      
    };

    return (
        <div className='register-form'>
            {
                !isLoading && <form onSubmit={handleRegisterSubmit}>
                    <input onBlur={handleOnBlur} type="text" name="name" placeholder="Username" required/>
                    <input onBlur={handleOnBlur} type="email" name="email" placeholder="Email" required/>
                    <input onBlur={handleOnBlur} type="password" name="password" placeholder="Password" required />
                    <input onBlur={handleOnBlur} type="password" name="password2" placeholder="Re-type Password" required />
                    {match && <p style={{ marginTop: '6px' }}>{match}</p>}
                    {success && <p style={{ marginTop: '6px' }}>{success}</p>}
                    {authError && <p style={{ marginTop: '6px' }}>{authError}</p>}
                    <div className="button-box">
                        <button type='submit'><span>Register</span></button>
                    </div>
                </form>
            }
            {isLoading && <div className="w-25 mx-auto text-center" style={{ height: "60vh" }}><Spinner className="my-5" animation="border" variant="dark" /></div>}
        </div>
    );
};

export default Register;