import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./Reducers/ProductReducers";

const store = configureStore({
  reducer: {
    products: productReducer,  // Ensure this matches the slice name
  },
  devTools: process.env.NODE_ENV !== "production",
});

// Export AppDispatch to be used for typing dispatch
export type AppDispatch = typeof store.dispatch;  

export default store;
