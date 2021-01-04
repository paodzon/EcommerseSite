import React from 'react';
import { useStateValue } from '../../StateProvider';
import "./Checkout.css";
import CheckoutProduct from './Components/CheckoutProduct';
import Subtotal from  "./Components/Subtotal";

function Checkout() {
    
    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__cart">
                <h2 className="checkout__title">Shopping Cart</h2>

                {/* {user? (<h3>Hello {user.email}</h3>): (<h3>Hello Guest</h3>)} */}
               
                {basket.map(item =>(
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    img={item.img}
                    price={item.price}
                    quantity={item.quantity}/>
                ))}
            </div>
            <div className="summary">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
