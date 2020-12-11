import React from "react";
import { useStateValue } from "../../../StateProvider";
import "./Product.css";

function Product({id, name,price}) {

  const [{basket},dispatch] =useStateValue();



  const addToBasket = ()  =>{
    //dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item:{
        id: id,
        name: name,
        price, price,
      }
    })
  }

  return (
    <div className="product">
      <div className="product__info">
        <p>{name}</p>

        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          <p>⭐</p>
        </div>
      </div>
      <img
        src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT2uwzKyTD7LRxPLZuX2nYSfI-uL9GE4JUenUGvZoTCq8zKXBPW"
        alt=""
      ></img>
      <button onClick={addToBasket} className="btn__add">Add to Basket</button>
    </div>
  );
}
export default Product;
