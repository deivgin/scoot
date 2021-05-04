import { ADD_TO_CART, REMOVE_FROM_CART } from "./cart.types";

const INITIAL_STATE = {
  items: [],
  total: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        items: [...state.items, action.payload],
        total: state.total + action.payload.price,
      };
    case REMOVE_FROM_CART:
      return {
        items: [
          ...state.items.splice(0, action.payload),
          ...state.items.splice(1),
        ],
        total: state.total - action.payload.price,
      };
    default:
      return state;
  }
};

export default reducer;
