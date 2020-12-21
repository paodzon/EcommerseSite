import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../../StateProvider";
import { getBasketTotal } from "../../../reducer";

function Subtotal() {
  const [{basket}] =useStateValue();
  const basketLength =basket.map((items) =>items.quantity).reduce((a,b) => a+b,0);
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
              <p>
                Subtotal({basketLength} items): <strong>{value}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
              </small>

          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
