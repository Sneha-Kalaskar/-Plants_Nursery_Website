import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [], // Use "products" as the key instead of "cart"
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    updateProduct: (state, action) => {
      const { id, data } = action.payload;
      const index = state.products.findIndex((product) => product.id === id);
      if (index !== -1) {
        state.products[index] = { ...state.products[index], ...data };
      }
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { setProducts, addProduct, updateProduct, deleteProduct } =
  cartSlice.actions;

export default cartSlice.reducer;
