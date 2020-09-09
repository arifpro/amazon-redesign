import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';

// context api
import { useStateValue } from '../../state/StateProvider';

const Subtotal = () => {
    const [{ cart }, dispatch] = useStateValue();

    const getCartTotal = (cart) => {
        let subtotal = 0;
        cart.map(item => subtotal+=item.price);
        return subtotal;
    }
    return (
        <section className="subtotal">
            <CurrencyFormat
                renderText={value => (
                    <>
                        <p> 
                            {/* part of the homework */}
                            Subtotal ({cart.length} items):
                            <strong>{` ${value}`}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getCartTotal(cart)} //part of the homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button>Proceed to Checkout</button>
        </section>
    )
}

export default Subtotal;
