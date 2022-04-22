import { combineReducers } from "redux";
import {
  productReaduser,
  selectedProductReducer,
  choseProductsReducer,
  signReduser,
  logAdminReducer,
  usersReducer,
} from "./productReducer";

const redusers = combineReducers({
  allProducts: productReaduser,
  selectProduct: selectedProductReducer,
  choseProducts: choseProductsReducer,
  logUser: signReduser,
  logAdmin: logAdminReducer,
  users: usersReducer,
});

export default redusers;
