import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../redux/reducers/authSlice';

const store = configureStore({
    reducer: {
        auth: authSlice,
    },
});

export default store;
