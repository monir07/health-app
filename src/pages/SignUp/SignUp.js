import { getAuth, signInWithEmailAndPassword, updateProfile } from '@firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './SignUp.css'
const Login = () => {
    const { signUpUsingEmail } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const auth = getAuth();

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleRegistration = e => {
        e.preventDefault();

        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case');
            return;
        }
        signUpUsingEmail(name, email, password);
    }

    return (
        <div>
            <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                <div className="card card0 border-0">
                    <div className="row d-flex">
                        <div className="col-lg-6">
                            <div className="card1 pb-5">
                                <div className="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src="https://i.imgur.com/uNGdWHi.png" alt="" className="img-fluid" /> </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card2 card border-0 px-4 py-5">
                                <div className="row mb-4 px-3">
                                    <h5 className="mb-0 mr-4 my-2">Registration</h5>
                                </div>
                                {/* User Name Input field  */}
                                <div className="row px-3">
                                    <label className="mb-1">
                                        <h6 className="mb-0 text-sm">Name</h6>
                                    </label>
                                    <input className="mb-4" onBlur={handleNameChange} type="text" placeholder="Enter your name" required />
                                    {error}
                                </div>

                                {/* Email Input field  */}
                                <div className="row px-3">
                                    <label className="mb-1">
                                        <h6 className="mb-0 text-sm">Email Address</h6>
                                    </label>
                                    <input className="mb-4" onBlur={handleEmailChange} type="email" placeholder="Enter a valid email address" required />
                                </div>

                                {/* password input field  */}
                                <div className="row px-3"> <label className="mb-1">
                                    <h6 className="mb-0 text-sm">Password</h6>
                                </label> <input onBlur={handlePasswordChange} type="password" name="password" placeholder="Enter password" required />
                                </div>

                                {/* signup button  */}
                                <div className="row mb-3 px-3">
                                    <button type="submit" onClick={handleRegistration} className="btn btn-blue text-center">Sign Up</button>
                                </div>

                                {/* Login Link  */}
                                <div className="row mb-4 px-3"> <small className="font-weight-bold">Don't have an account? <Link to="/login"><button type="button" className="btn btn-link">Login</button></Link> </small> </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;