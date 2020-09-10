import React from 'react';
import './Checkout.css';

// images and icons
import checkoutAd from '../../img/ad/checkoutAd.jpg';
import Subtotal from '../Subtotal/Subtotal';
import CartItem from '../CartItem/CartItem';

// context api
import { useStateValue } from '../../state/StateProvider'

const Checkout = () => {
    const [{ cart }, dispatch] = useStateValue();

    return (
        <section className="checkout">
            <div className="checkout__left">
                <img src={checkoutAd} alt="checkoutAd" className="checkout_ad"/>

                <div>
                    <h2 className="checkout__title">Your shopping Cart</h2>

                    {/* cart item */}
                    {
                        cart.map(item => <CartItem item={item} />)
                    }
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </section>
    )
}

export default Checkout;
