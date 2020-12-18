import React from 'react';
import { useStateValue } from '../../../StateProvider';
import './CheckoutProduct.css';

function CheckoutProduct({id, img, title, price, rating}) {

    const [{basket},dispatch] =useStateValue();
    const removeFromBasket = () =>{
      //remove item from the basket
      dispatch({
        type: 'REMOVE_FROM_BASKET',
        id: id,
      })
    }

    return (
      <div className="checkoutProduct">
        <img className="checkoutProduct__image" src={img} />

        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
          <button onClick={removeFromBasket}>Remove from Basket</button>

        </div>
      </div>
    );
}

export default CheckoutProduct
