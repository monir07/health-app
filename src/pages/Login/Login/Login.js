import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signInUsingGoogle, processLogin, error } = useAuth();

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    processLogin(email, password);

    return (
        <div>
            <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                <div className="card card0 border-0">
                    <div className="row d-flex">
                        <div className="col-lg-6">
                            <div className="card1 pb-5">
                                {/* <div className="row"> <img src="https://i.imgur.com/CXQmsmF.png" className="logo" /> </div> */}
                                <div className="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src="https://i.imgur.com/uNGdWHi.png" alt="" className="img-fluid" /> </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card2 card border-0 px-4 py-5">
                                <div className="row mb-4 px-3">
                                    <h6 className="mb-0 mr-4 mt-2">Sign in with</h6>
                                    <div class="col-md-12 text-center">
                                        <button type="button" onClick={signInUsingGoogle} className="btn">
                                            <img className="img-fluid" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="" />
                                        </button>
                                    </div>
                                </div>
                                <div className="row px-3 mb-4">
                                    <div className="line"></div> <small className="or text-center">Or</small>
                                    <div className="line"></div>
                                </div>
                                {/* email input field  */}
                                <div className="row px-3"> <label className="mb-1">
                                    <h6 className="mb-0 text-sm">Email Address</h6>
                                </label> <input onBlur={handleEmailChange} className="mb-4" type="text" name="email" placeholder="Enter a valid email address" />
                                </div>
                                {/* password input field  */}
                                <div className="row px-3">
                                    <label className="mb-1">
                                        <h6 className="mb-0 text-sm">Password</h6>
                                    </label>
                                    <input onBlur={handlePasswordChange} type="password" name="password" placeholder="Enter password" />
                                    {error}
                                </div>
                                {/* submit button  */}
                                <div className="row mb-3 px-3">
                                    <button onClick={processLogin} type="submit" className="btn btn-blue text-center">Login</button>
                                </div>
                                {/* register new account  */}
                                <div className="row mb-4 px-3">
                                    <small className="font-weight-bold">Don't have an account? <Link to="/sign-up"><button type="button" className="btn btn-link">Register</button></Link>
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;