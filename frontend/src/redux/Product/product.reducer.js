import { TOTAL, CHANGE_VALUE } from "./product.types";

const INITIAL_STATE = {
  wheels: null,
  material: null,
  speed: null,
  controls: null,
  price: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_VALUE: {
      return {
        ...state,
        [action.part]: action.option,
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
