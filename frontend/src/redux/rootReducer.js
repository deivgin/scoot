import { combineReducers } from "redux";
import productReducer from "./Product/product.reducer";
import cartReducer from "./Cart/cart.reducer";
import tabsReducer from "./Tabs/tabs.reducer";

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  tabs: tabsReducer,
});

export default rootReducer;
