import React from 'react';
import "./Checkout.css";
import Subtotal from  "./Components/Subtotal";

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__cart">
                <h2 className="checkout__title">Shopping Basket</h2>
            </div>
            <div className="summary">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
