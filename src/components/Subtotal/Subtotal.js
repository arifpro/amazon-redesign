import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';

// context api
import { useStateValue } from '../../state/StateProvider';
import { getCartTotal } from '../../state/reducer';

const Subtotal = () => {
    const [{ cart }, dispatch] = useStateValue();

    
    return (
        <section className="subtotal">
            <CurrencyFormat
                renderText={value => (
                    <>
                        <p> 
                            Subtotal ({cart.length} items):
                            <strong>{` ${value}`}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button>Proceed to Checkout</button>
        </section>
    )
}

export default Subtotal;
