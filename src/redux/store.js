import { configureStore } from "@reduxjs/toolkit";
import filterReducer from './filter';

export const store = configureStore({
    reducer:{
        filter: filterReducer
    }
});