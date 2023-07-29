import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "Authentication",
    initialState: {
        isAuthenticated: false,
        name: "guest",
        email: "",
    },
    reducers: {
        login(state, action) {
            state.isAuthenticated = true;
            state.name = action.payload.name;
            state.email = action.payload.email;
        },
        logout(state) {
            state.isAuthenticated = false;
            state.name = "guest";
            state.email = "";
        },
    },
});

export default authSlice;
