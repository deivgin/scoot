import { WHEELS, MATERIAL, SPEED, CONTROLS } from "./product.types";

const INITIAL_STATE = {
  wheels: null,
  material: null,
  speed: null,
  controls: null,
  price: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WHEELS: {
      return {
        ...state,
        wheels: action.payload,
      };
    }
    case MATERIAL: {
      return {
        ...state,
        material: action.payload,
      };
    }
    case SPEED: {
      return {
        ...state,
        speed: action.payload,
      };
    }
    case CONTROLS: {
      return {
        ...state,
        controls: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
