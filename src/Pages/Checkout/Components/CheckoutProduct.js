import React,{useState} from 'react';
import { useStateValue } from '../../../StateProvider';
import './CheckoutProduct.css';
import Swal from 'sweetalert2';

function CheckoutProduct({id, img, title, price, rating,quantity}) {

    const [{basket},dispatch] =useStateValue();

    const removeFromBasket = () =>{
      //remove item from the basket

      Swal.fire({
        title: 'Remove Item?',
        showCancelButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Saved!', '', 'success')
          dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
          })
        } 
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


    return (
      <div className="checkoutProduct">
        <img className="checkoutProduct__image" src={img} />

        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
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
