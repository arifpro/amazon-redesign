import React from 'react';
import './Checkout.css';

// images and icons
import checkoutAd from '../../img/ad/checkoutAd.jpg';

const Checkout = () => {
    return (
        <section className="checkout">
            <div className="checkout__left">
                <img src={checkoutAd} alt="checkoutAd" className="checkout_ad"/>

                <div>
                    <h2 className="checkout__title">Your shopping Cart</h2>

                    {/* cart item */}
                    {/* BasketItem */}
                </div>
            </div>

            <div className="checkout__right">
                <
                <h2>The subtotal will go here</h2>
            </div>
        </section>
    )
}

export default Checkout;
