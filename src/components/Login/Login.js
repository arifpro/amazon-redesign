import React from 'react';
import './Login.css';

// images
import logoBlack from '../../img/logoBlack.png'
import { Link } from '@material-ui/core';

const Login = () => {
    return (
        <section className="login">
            <Link to='/'>
                <img src={logoBlack} alt="logo" className="login__logo" />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>

                <form>
                    <h5>Email</h5>
                    <input type="text"/>

                    <h5>Password</h5>
                    <input type="password"/>

                    <button className="login__signInButton">Sign In</button>
                </form>

                <p>
                    By signing-in you agree to Redesign Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className="login__registerButton">Create Your Amazon Account</button>
            </div>
        </section>
    )
}

export default Login;
