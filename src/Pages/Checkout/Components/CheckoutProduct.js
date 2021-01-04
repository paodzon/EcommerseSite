import React, { useState } from "react";
import { useStateValue } from "../../../StateProvider";
import "./CheckoutProduct.css";
import Swal from "sweetalert2";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
function CheckoutProduct({ id, img, title, price, rating, quantity }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //remove item from the basket

    Swal.fire({
      title: "Remove Item?",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
        dispatch({
          type: "REMOVE_FROM_BASKET",
          id: id,
        });
      }
    });
  };

  const incQty = () => {
    //remove item from the basket
    dispatch({
      type: "INCREASE_QTY",
      id: id,
    });
  };
  const decQty = () => {
    //remove item from the basket
    dispatch({
      type: "DECREASE_QTY",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <div className="checkoutProduct__info">
        <img className="checkoutProduct__image" src={img} />
        <div className="checkoutProduct__title">{title}</div>
        <div className="checkoutProduct__actions">
          <div className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </div>
          <div className="checkoutProduct__quantity">
            <div className="btn__hover" onClick={decQty}>
              <RemoveIcon />
            </div>
            <div className="quantity__text">
              <span>{quantity}</span>
            </div>
            <div className="btn__hover" onClick={incQty}>
              <AddIcon />
            </div>
          </div>
          <div className="btn__hover" onClick={removeFromBasket}>
            <DeleteIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
