import { configureStore } from "@reduxjs/toolkit";
import baseReducer from './SliceReducer';

export const store = configureStore({
    reducer : {
        base: baseReducer
    },
})