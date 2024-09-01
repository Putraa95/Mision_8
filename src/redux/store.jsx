import { configureStore } from "@reduxjs/toolkit";
import paymentReducer from "./paymentSlice";
import itemDetailReducer from "./itemDetailSlice";

const store = configureStore({
  reducer: {
    payment: paymentReducer,
    itemDetail: itemDetailReducer,
  },
});

export default store;
