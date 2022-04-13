import './Login.css'
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='login-title'>Login</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" required/>
                    </div>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p className='form-paragraph'>New to ema-john? <Link className='form-link' to='/signup'>Create An Account</Link> </p>
                    <h6>or</h6>
                    
            </div>
        </div>
    );
};

export default Login;