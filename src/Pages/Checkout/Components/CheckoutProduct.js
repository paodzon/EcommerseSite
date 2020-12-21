import React,{useState} from 'react';
import { useStateValue } from '../../../StateProvider';
import './CheckoutProduct.css';

function CheckoutProduct({id, img, title, price, rating,quantity}) {

    const [count,setCount] =useState(0);
    const [{basket},dispatch] =useStateValue();
    const removeFromBasket = () =>{
      //remove item from the basket
      dispatch({
        type: 'REMOVE_FROM_BASKET',
        id: id,
      })
    }

    const incQty = () =>{
      //remove item from the basket
      dispatch({
        type: 'INCREASE_QTY',
        id: id,
      })
    }
    const decQty = () =>{
      //remove item from the basket
      dispatch({
        type: 'DECREASE_QTY',
        id: id,
      })
    }

    const decreaseItem = (e) =>{
      setCount(count - 1);
      if(count === 0){
        setCount(0)
      }
    }
    const increaseItem = (e) =>{
      setCount(count + 1);
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
          <div className="checkoutProduct__quantity"> 
                <button onClick={decQty}>-</button>
                {quantity}
                <button onClick={incQty}>+</button>
          </div>
          <button onClick={removeFromBasket}>Remove from Basket</button>

        </div>
      </div>
    );
}

export default CheckoutProduct
