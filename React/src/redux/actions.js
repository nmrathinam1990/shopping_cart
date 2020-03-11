import {
  GET_SHOPPING_LIST_BEGIN,
  GET_SHOPPING_LIST_SUCCESS,
  GET_SHOPPING_LIST_FAILURE,
  SORT_SHOPPING_LIST_DISCOUNT,
  SORT_SHOPPING_LIST_HIGH_LOW,
  SORT_SHOPPING_LIST_LOW_HIGH,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  APPLY_FILTER
} from "./actionTypes";
import axios from "axios";
import { entityEndpoints } from "../constants/endPoints";

// API requests
const generatGetEntityAction = endpoint => {
  const getEntityBegin = () => ({
    type: GET_SHOPPING_LIST_BEGIN
  });
  const getEntitySuccess = data => ({
    type: GET_SHOPPING_LIST_SUCCESS,
    payload: { entity: data }
  });
  const getEntityFailure = error => ({
    type: GET_SHOPPING_LIST_FAILURE,
    payload: { error }
  });
  return _ => {
    return dispatch => {
      dispatch(getEntityBegin());
      return axios
        .get(endpoint)
        .then(res => {
          dispatch(getEntitySuccess(res.data));
        })
        .catch(err => {
          dispatch(getEntityFailure(err));
        });
    };
  };
};

export const getShoppingList = generatGetEntityAction(
  entityEndpoints.shoppingList
);

export const sortShoppingListDiscount = () => ({
  type: SORT_SHOPPING_LIST_DISCOUNT
});

export const sortShoppingListHighLow = () => ({
  type: SORT_SHOPPING_LIST_HIGH_LOW
});

export const sortShoppingListLowHigh = () => ({
  type: SORT_SHOPPING_LIST_LOW_HIGH
});

export const addToCart = id => ({
  type: ADD_TO_CART,
  payload: id
});

export const removeItemFromAddToCart = id => ({
  type: REMOVE_FROM_CART,
  payload: id
});

export const decreaseQuantity = id => ({
  type: DECREASE_QUANTITY,
  payload: id
});

export const increaseQuantity = id => ({
  type: INCREASE_QUANTITY,
  payload: id
});

export const applyFilter = (range) => ({
  type: APPLY_FILTER,
  payload: range
});