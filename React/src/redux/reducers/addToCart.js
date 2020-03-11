import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY
} from "../actionTypes";

export const initialState = {
  cart: []
};

const addToCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    case REMOVE_FROM_CART:
      return {
        cart: state.cart.filter(val => val.id !== action.payload)
      };
    case DECREASE_QUANTITY:
      const quantity = state.cart.filter(val => val.id === action.payload);
      quantity[0].quantity = (quantity[0].quantity !== 0) ? quantity[0].quantity - 1 : quantity[0].quantity;
      return {
        cart: [...state.cart]
      };
    case INCREASE_QUANTITY:
      const qty = state.cart.filter(val => val.id === action.payload);
      qty[0].quantity = qty[0].quantity + 1;
      return {
        cart: [...state.cart]
      };
    default:
      return state;
  }
};

export default addToCartReducer;
