import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userSlice";
import { cartReducer } from "./cartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export { getUser, updateUser, fetchAddress } from "./userSlice";
export {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} from "./cartSlice";
export default store;
export {
  getCart,
  getTotalPizzas,
  getTotalCartValue,
  getCurrentQuantityById,
} from "./cartSlice";
