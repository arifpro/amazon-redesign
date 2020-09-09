import React from 'react';
import './Product.css';

const Product = ({ title, image, price, rating }) => {
    return (
        <section className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="product__rating">
                    {
                        Array(rating).fill().map((_, i) => (
                            <span role="img" aria-label="Rating">⭐</span>
                        ))
                    }
                </div>
            </div>

            <img src={image} alt="productImg"/>

            <button>Add to Cart</button>
        </section>
    )
}

export default Product;
