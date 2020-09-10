import React, { useRef } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';

// images
import logoBlack from '../../img/logoBlack.png'

// firebase
import { auth } from '../../firebase';

const Login = () => {
    const history = useHistory();
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSignIn = e => {
        e.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        auth.signInWithEmailAndPassword(email, password).then(auth => {
            history.push('/')
        }).catch(error => alert(error.message));
    };

    const handleRegister = e => {
        e.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        auth.createUserWithEmailAndPassword(email, password).then(auth => {
            // It successfully created a new user with email and password
            console.log(auth);
            if (auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message));
    };

    return (
        <section className="login">
            <Link to='/'>
                <img src={logoBlack} alt="logo" className="login__logo" />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>

                <form onSubmit={handleSignIn}>
                    <h5>Email</h5>
                    <input type="email" ref={emailRef} required/>

                    <h5>Password</h5>
                    <input type="password" ref={passwordRef} required/>

                    <button type="submit" className="login__signInButton">Sign In</button>
                </form>

                <p>
                    By signing-in you agree to Redesign Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={handleRegister} className="login__registerButton">Create Your Amazon Account</button>
            </div>
        </section>
    )
}

export default Login;
