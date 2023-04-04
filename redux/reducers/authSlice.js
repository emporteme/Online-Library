// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [],
    isAuthenticated: false,
    currentUser: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        register: (state, action) => {
            state.users.push(action.payload);
        },
        login: (state, action) => {
            const { username, password } = action.payload;
            const user = state.users.find(
                (u) => u.username === username && u.password === password
            );

            if (user) {
                state.isAuthenticated = true;
                state.currentUser = user;
            }
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.currentUser = null;
        },
    },
});

export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;
