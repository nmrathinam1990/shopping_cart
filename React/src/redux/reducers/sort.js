import {
  SORT_SHOPPING_LIST_DISCOUNT,
  SORT_SHOPPING_LIST_HIGH_LOW,
  SORT_SHOPPING_LIST_LOW_HIGH
} from "../actionTypes";

export const initialState = {
  sort: null
};

const sortShoppingListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SORT_SHOPPING_LIST_DISCOUNT:
      return {
        sort: "discount"
      };
    case SORT_SHOPPING_LIST_HIGH_LOW:
      return {
        sort: "highToLow"
      };
    case SORT_SHOPPING_LIST_LOW_HIGH:
      return {
        sort: "lowToHigh"
      };
    default:
      return state;
  }
};

export default sortShoppingListReducer;
