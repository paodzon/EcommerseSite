import React from "react";
import { useStateValue } from "../../../StateProvider";
import "./Product.css";

function Product({id, name,price,rating, img}) {

  const [{basket},dispatch] =useStateValue();



  const addToBasket = ()  =>{
    //dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item:{
        id: id,
        title: name,
        rating: rating,
        img: img,
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
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
      </div>
      <img
        src={img}
        alt=""
      ></img>
      <button onClick={addToBasket} className="btn__add">Add to Basket</button>
    </div>
  );
}
export default Product;
