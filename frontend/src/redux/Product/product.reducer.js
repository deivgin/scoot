import {} from "./product.types";

const INITIAL_STATE = {};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 0: {
      return {
        ...state,
        [action.part]: action.option,
      };
    }
    default:
      return state;
  }
};

export default reducer;
