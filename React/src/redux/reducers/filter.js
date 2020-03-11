import { APPLY_FILTER } from "../actionTypes";

export const initialState = {
  range: {}
};

const filter = (state = initialState, action) => {
  switch (action.type) {
    case APPLY_FILTER:
      return {
        range: action.payload
      };
    default:
      return state;
  }
};

export default filter;
