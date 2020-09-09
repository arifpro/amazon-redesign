import React from 'react';
import './Product.css';

// images and icons
import theLeanStartup from '../../img/products/theLeanStartup.jpg'

const Product = () => {
    return (
        <section className="product">
            <div className="product__info">
                <p>The Lean Startup</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>

                <div className="product__rating">
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                </div>
            </div>

            <img src={theLeanStartup} alt="theLeanStartup"/>

            <button>Add to Cart</button>
        </section>
    )
}

export default Product;
