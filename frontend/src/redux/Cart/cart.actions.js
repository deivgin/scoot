import { ADD_TO_CART, REMOVE_FROM_CART } from "./cart.types";

const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

const removeFromCart = (product) => ({
  type: REMOVE_FROM_CART,
  payload: product,
});

export { addToCart, removeFromCart };
