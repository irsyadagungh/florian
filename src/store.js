import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/CreateSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
