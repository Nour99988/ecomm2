import { combineReducers } from "redux";
import {
  productReaduser,
  selectedProductReducer,
  choseProductsReducer,
  // increseQtyReduser,
  // removeProductReducse,
} from "./productReducer";

const redusers = combineReducers({
  allProducts: productReaduser,
  selectProduct: selectedProductReducer,
  choseProducts: choseProductsReducer,
  // increseQty: increseQtyReduser,
  // removeProduct: removeProductReducse,
});

export default redusers;
