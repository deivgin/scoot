import { combineReducers } from "redux";
import productReducer from "./Product/product.reducer";
import cartReducer from "./Cart/cart.reducer";

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
});

export default rootReducer;
