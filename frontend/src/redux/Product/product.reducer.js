import { CHANGE_VALUE, TOTAL, UPDATE_VALUE } from "./product.types";

const INITIAL_STATE = {
  options: null,
  price: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_VALUE: {
      return {
        ...state,
        options: action.payload,
      };
    }
    case TOTAL: {
      let total = 0;
      state.options.forEach((item) => (total += item.data.price));
      return {
        ...state,
        price: total,
      };
    }
    case UPDATE_VALUE: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default reducer;
