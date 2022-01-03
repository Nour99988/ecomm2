import { actionTypes, actionTypeBuy } from "../contants/action-types";

const initialState = {
  products: [],
  selectedProduct: [],
};

const choseProducts = [];

export const productReaduser = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case actionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case actionTypes.REMOVE_SELECTED_PRODUCT:
      return {};

    default:
      return state;
  }
};

export const choseProductsReducer = (
  state = choseProducts,
  { type, product, qty }
) => {
  switch (type) {
    case actionTypeBuy.ADD_PRODUCT:
      product.qty = 1;
      return [...state, product];
    case actionTypeBuy.REMOVE_PRODUCT:
      // products = state.filter((pro) => pro.id !== product);
      return [...product];
    // case actionTypeBuy.INCRESR_QTY:
    //   return [...state, (product.qty = ++qty)];
    case actionTypeBuy.INCRESR_QTY:
      product.qty = ++qty;
      return [...state];
    case actionTypeBuy.INCRESE_QTY_BY_INPUT:
      product.qty = qty;
      // console.log(qty);
      return [...state];
    default:
      return state;
  }
};

// export const increseQtyReduser = (
//   state = choseProducts,
//   { type, product, qty }
// ) => {
//   switch (type) {
//     case actionTypeBuy.INCRESR_QTY:
//       // state = state.filter((pro) => pro.id === product.id);
//       product.qty = ++qty;
//       return [...state];
//     case actionTypeBuy.INCRESE_QTY_BY_INPUT:
//       product.qty = qty;
//       // console.log(qty);
//       return [...state];
//     default:
//       return state;
//   }
// };

// export const removeProductReducse = (
//   state = choseProducts,
//   { products, type }
// ) => {
//   switch (type) {
//     case actionTypeBuy.REMOVE_PRODUCT:
//       return [products];

//     default:
//       return state;
//   }
// };
