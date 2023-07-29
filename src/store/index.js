import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Auth.js";

export const authActions = authSlice.actions;

const store = configureStore({
    reducer: authSlice.reducer,
});

export default store;
