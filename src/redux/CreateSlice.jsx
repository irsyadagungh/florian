import { createSlice } from "@reduxjs/toolkit";

export const CreateSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalItems: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeProduct: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (product) => product.id !== action.payload.id
      );
    },
    addQuantity: (state, action) => {
      state.cartItems = state.cartItems.map((product) =>
        product.id === action.payload.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
    },
    subtractQuantity: (state, action) => {
      state.cartItems = state.cartItems.map((product) =>
        product.id === action.payload.id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
    },
    clearItems: (state) => {
      state.cartItems = [];
    },
  },
});

export const {
  addProduct,
  removeProduct,
  addQuantity,
  subtractQuantity,
  clearItems,
} = CreateSlice.actions;
export const selectTotalItems = (state) =>
  state.cart.cartItems.reduce((total, product) => total + product.quantity, 0);
export const selectTotalPrice = (state) => {
  return state.cart.cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
};
export default CreateSlice.reducer;
