import { PagesSharp } from "@material-ui/icons";

export const initialState = {
  basket: [],
};


export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price * item.quantity + amount, 0);

const reducer = (state, action) => {
  //check if the product exists
  const coIndex = state.basket.findIndex(
    (basketItem) => basketItem.id === action.id
  );
  console.log(action);
  //clone the basket
  let cloneBasket = [...state.basket];
  switch (action.type) {
    case "ADD_TO_BASKET":
      const indexA = state.basket.findIndex(
        (basketItem) => basketItem.id === action.item.id
      );
      if (indexA >= 0) {
        cloneBasket[indexA].quantity++;
      } else {
        return {
          ...state,
          basket: [...state.basket, { ...action.item }],
        };
      }

    case "REMOVE_FROM_BASKET":
      if (coIndex >= 0) {
        // item exists in basket, remove it...
        cloneBasket.splice(coIndex, 1);
        console.log("removing");
      }
      return {
        ...state,
        basket: cloneBasket,
      };

    case "INCREASE_QTY":
      if (coIndex >= 0) {
        cloneBasket[coIndex].quantity++;
      }
      return {
        ...state,
        basket: cloneBasket,
      };

    case "DECREASE_QTY":
      if (coIndex >= 0) {
        if (cloneBasket[coIndex].quantity > 1) {
          cloneBasket[coIndex].quantity--;
        }
      }
      return {
        ...state,
        basket: cloneBasket,
      };

    case "SET_USER":
      return{
        ...state,
        user:action.user
      }

    default:
      return state;
  }
};

export default reducer;
