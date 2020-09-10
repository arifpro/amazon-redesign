import React from 'react';
import './Checkout.css';


// images and icons
import checkoutAd from '../../img/ad/checkoutAd.jpg';
import Subtotal from '../Subtotal/Subtotal';
import CartItem from '../CartItem/CartItem';

// context api
import { useStateValue } from '../../state/StateProvider'

const Checkout = () => {
    const [{ cart, user }, dispatch] = useStateValue();

    return (
        <section className={cart && cart.length>0 ? 'checkout2' : 'checkout'}>
            <div className="checkout__left">
                <img src={checkoutAd} alt="checkoutAd" className="checkout_ad"/>

                <div>
                    <h3>Hello, {user? user.email : 'Guest'}</h3>
                    <h2 className="checkout__title">Your Shopping Cart {cart && cart.length !== 0 ? '' : 'Is Empty'}</h2>

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
