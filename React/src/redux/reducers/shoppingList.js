import {
  GET_SHOPPING_LIST_BEGIN,
  GET_SHOPPING_LIST_FAILURE,
  GET_SHOPPING_LIST_SUCCESS
} from "../actionTypes";

export const initialState = {};

const shoppingListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SHOPPING_LIST_BEGIN:
      return {
        ...state,
        error: null
      };
    case GET_SHOPPING_LIST_SUCCESS:
      return {
        ...action.payload,
        error: null
      };
    case GET_SHOPPING_LIST_FAILURE:
      return {
        ...state,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default shoppingListReducer;
