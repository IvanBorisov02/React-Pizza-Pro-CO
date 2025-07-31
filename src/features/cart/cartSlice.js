import { createSlice } from '@reduxjs/toolkit';
import DeleteItem from './DeleteItem';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    removeItem(state, action) {
      state.cart = state.cart.filter(
        (pizza) => pizza.pizzaId !== action.payload
      );
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((pizza) => pizza.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((pizza) => pizza.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0) {
        cartSlice.caseReducers.removeItem(state, action);
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

// export function getTotalCartQuantity(store) {
//   store.cart.cart.reduce((acc, item) => acc + item.quantity, 0);
// }

// export function getTotalPrice(store) {
//   store.cart.cart.reduce((acc, item) => acc + item.totalPrice, 0);
// }

export const getCart = (store) => store.cart.cart;

export const getTotalCartQuantity = (store) =>
  store.cart.cart.reduce((acc, item) => acc + item.quantity, 0);

export const getTotalPrice = (store) =>
  store.cart.cart.reduce((acc, item) => acc + item.totalPrice, 0);

export const getCurrentQuantityById = (id) => (store) =>
  store.cart.cart.find((pizza) => pizza.pizzaId === id)?.quantity ?? 0;
