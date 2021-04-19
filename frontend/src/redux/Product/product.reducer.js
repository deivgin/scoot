import { WHEELS, MATERIAL, SPEED, CONTROLS } from "./product.types";

const INITIAL_STATE = {
  wheels: null,
  frame: null,
  speed: null,
  price: null,
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case WHEELS: {
            return {
                ...state,
                wheels: 
            }
        }
    }
}