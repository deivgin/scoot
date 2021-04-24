import { combineReducers } from "redux";
import counterReducer from "./Counter/counter.reducer";
import productReducer from "./Product/product.reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  product: productReducer,
});

export default rootReducer;
