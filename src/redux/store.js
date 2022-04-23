import { configureStore } from "@reduxjs/toolkit";
import filterReducer from './filter';
import searchReducer from './search';

export const store = configureStore({
    reducer:{
        filter: filterReducer,
        search: searchReducer
    }
});