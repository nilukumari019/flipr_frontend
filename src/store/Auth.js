import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "Authentication",
    initialState: {
        isAuthenticated: false,
        name: "guest",
        email: "",
        favorite: [],
        booked: [],
    },
    reducers: {
        login(state, action) {
            state.isAuthenticated = true;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.favorite = action.payload.favorite;
            state.booked = action.payload.booked;
        },
        book(state, action) {
            state.booked = [...state.booked, action.payload];
        },
        addToFavorite(state, action) {
            const index = state.favorite.indexOf(action.payload);
            if (index === -1) {
                state.favorite = [...state.favorite, action.payload];
            }
        },
        removeFromFavorite(state, action) {
            const index = state.favorite.indexOf(action.payload);
            if (index > -1) state.favorite.splice(index, 1);
        },
        logout(state) {
            state.isAuthenticated = false;
            state.name = "guest";
            state.email = "";
            state.favorite = [];
            state.booked = [];
        },
    },
});

export default authSlice;
