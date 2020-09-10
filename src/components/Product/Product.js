import React from 'react';
import './Product.css';

// context api
import { useStateValue } from '../../state/StateProvider';

const Product = ({ id, title, image, price, rating }) => {
    const [{ cart }, dispatch] = useStateValue();
    // cart from state

    const addToCart = () => {
        // dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_CART',
            item: {id, title, image, price, rating}
        })
    };

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
                            <span key={id + i} role="img" aria-label="Rating">⭐</span>
                        ))
                    }
                </div>
            </div>

            <img src={image} alt="productImg"/>

            <button onClick={addToCart}>Add to Cart</button>
        </section>
    )
}

export default Product;
