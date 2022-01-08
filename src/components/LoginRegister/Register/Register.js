import './Register.css';

const Register = () => {
    return (
        <div className='register-form'>
            <form>
                <input type="text" name="user-name" placeholder="Username" />
                <input type="email" name="user-email" placeholder="Email" />
                <input type="password" name="user-password" placeholder="Password" />
                <div className="button-box">
                    <button type='submit'><span>Register</span></button>
                </div>
            </form>
        </div>
    );
};

export default Register;