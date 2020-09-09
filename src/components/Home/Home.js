import React from 'react';
import './Home.css';

// images and icons
import homeImg from '../../img/homeImg.jpg'
import Product from '../Product/Product';

const Home = () => {
    return (
        <section className="home">
            <div className="home__container">
                <img src={homeImg} alt="homeImg" className="home__image" />

                <div className="home__row">
                    <Product />
                    {/* Product */}
                </div>

                <div className="home__row">
                    {/* Product */}
                    {/* Product */}
                    {/* Product */}
                </div>

                <div className="home__row">
                    {/* Product */}
                </div>
            </div>
        </section>
    )
}

export default Home;
