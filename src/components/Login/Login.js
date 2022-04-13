import './Login.css'
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const navigate = useNavigate();
      const location = useLocation();
      const from = location.state?.from?.pathname || '/';

    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }

    if(user){
        navigate(from, {replace:true});
    }
    const handleuserSignIn = event =>{
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='login-title'>Login</h2>
                <form onSubmit={handleuserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required/>
                    </div>
                    <p style={{color:'red'}}>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p className='form-paragraph'>New to ema-john? <Link className='form-link' to='/signup'>Create An Account</Link> </p>
                    
                    
            </div>
        </div>
    );
};

export default Login;