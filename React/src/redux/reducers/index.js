import { combineReducers } from "redux";

import shoppingListReducer from "./shoppingList";
import sortShoppingListReducer from "./sort";
import addToCart from "./addToCart";
import filter from "./filter";

const rootReducer = combineReducers({
  shoppingList: shoppingListReducer,
  sortShoppingList: sortShoppingListReducer,
  cart: addToCart,
  filter: filter
});

export default rootReducer;
