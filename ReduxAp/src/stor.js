import { configureStore } from "@reduxjs/toolkit";
import slice from "./stor/slice";

export const Store = configureStore({

    reducer: {
        counter: slice  , 
    }
});