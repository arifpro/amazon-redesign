import React from 'react';
import './Footer.css';
import logo from '../../img/logo.png';

const Footer = () => {

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <section className="footer">
            <button className="footer__backButton" onClick={scrollTop}>Back to top</button>


            <div className="footer__nav">
                <div className="footer__navRow">
                    <h3>Get to Know Us</h3>
                    <ul>
                        <li>Careers</li>
                        <li>Blog</li>
                        <li>About Amazon</li>
                        <li>Investor Relations</li>
                        <li>Amazon Devices</li>
                        <li>Amazon Tours</li>
                    </ul>
                </div>

                <div className="footer__navRow">
                    <h3>Make Money with Us</h3>
                    <ul>
                        <li>Sell on Amazon</li>
                        <li>Sell on Amazon Business</li>
                        <li>Sell Your Apps on Amazon</li>
                        <li>Become an Affiliate</li>
                        <li>Advertise Your Products</li>
                        <li>Self-Publish with Us</li>
                        <li>Host an Amazon Hub</li>
                    </ul>
                </div>

                <div className="footer__navRow">
                    <h3>Amazon Payment Products</h3>
                    <ul>
                        <li>Amazon Business Card</li>
                        <li>Shop with Points</li>
                        <li>Reload Your Balance</li>
                        <li>Amazon Currency Converter</li>
                    </ul>
                </div>

                <div className="footer__navRow">
                    <h3>Let Us Help You</h3>
                    <ul>
                        <li>Amazon and COVID-19</li>
                        <li>Your Account</li>
                        <li>Your Orders</li>
                        <li>Shipping Rates & Policies</li>
                        <li>Returns & Replacements</li>
                        <li>Manage Your Content and Devices</li>
                        <li>Amazon Assistant</li>
                        <li>Help</li>
                    </ul>
                </div>
            </div>

            <button className="footer__copyright" disabled>© 1996-2020, Amazon.com, Inc. or its affiliates</button>
        </section>
    )
}

export default Footer;
