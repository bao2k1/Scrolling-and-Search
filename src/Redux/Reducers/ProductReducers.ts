import { ProductTypes } from "../../components/Product/ProductTypes";
import { SET_PRODUCTS, SET_LOADING, SET_HAS_MORE, SET_SKIP, RESET_PRODUCTS } from "../Actions/ProductActions";

const initialState = {
  products: [] as ProductTypes[],
  loading: false,
  hasMore: true,
  skip: 0,
};

export const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { 
        ...state, 
        products: [...state.products, ...action.payload]  // Append new products to existing list
      };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_HAS_MORE:
      return { ...state, hasMore: action.payload };
    case SET_SKIP:
      return { ...state, skip: action.payload };
    case RESET_PRODUCTS:
      return { ...state, products: [], skip: 0, hasMore: true };
    default:
      return state;
  }
};


