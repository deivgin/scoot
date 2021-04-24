import { WHEELS, MATERIAL, SPEED, CONTROLS, TOTAL } from "./product.types";

const INITIAL_STATE = {
  wheels: null,
  material: null,
  speed: null,
  controls: null,
  price: 0,
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
    case TOTAL: {
      const { wheels, material, speed, controls } = state;
      let newTotal =
        wheels.price + material.price + speed.price + controls.price;

      return {
        ...state,
        price: newTotal,
      };
    }
    default:
      return state;
  }
};

export default reducer;
