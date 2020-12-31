import React, { useState } from "react";
import { useStateValue } from "../../../StateProvider";
import "./Product.css";
import Swal from "sweetalert2";

function Product({ id, name, price, rating, img }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = (e) => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: name,
        img: img,
        price: price,
        quantity: 1,
      },
    });
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div className="product">
      <div className="product__imgCon">
        <img src={img} alt="" className="product__image"></img>
      </div>

      <div className="product__info">
        <p>{name}</p>
      </div>
      <div className="product__priceCon">
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>

      <button onClick={addToBasket} className="btn__add">
        Add to Basket
      </button>
    </div>
  );
}
export default Product;
