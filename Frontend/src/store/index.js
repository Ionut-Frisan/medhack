import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./featutres/auth/auth-slice.js";

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
})