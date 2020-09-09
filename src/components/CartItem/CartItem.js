import React from 'react';
import './CartItem.css';

// context api
import { useStateValue } from '../../state/StateProvider';

const CartItem = ({ item }) => {
    const [{ cart }, dispatch] = useStateValue();
    console.log(item)

    const removeFromCart = () => {
        // dispatch the item into the data layer
        // dispatch({
        //     type: 'REMOVE_FROM_CART',
        //     item: {id, title, image, price, rating}
        // })
        console.log(item)
    };
    return (
        <section className="cartItem">
            <img src={item.image} alt={item.price} />
            
            <div className="cartItem__info">
                <p>{item.title}</p>
                <p className="cartItem__price">
                    <small>$</small>
                    <strong>{item.price}</strong>
                </p>

                <div className="cartItem__rating">
                    {
                        Array(item.rating).fill().map((_, i) => (
                            <span key={item.id + i} role="img" aria-label="Rating">⭐</span>
                        ))
                    }
                </div>

                <button onClick={removeFromCart}>Remove from cart</button>
            </div>
        </section>
    )
}

export default CartItem;
