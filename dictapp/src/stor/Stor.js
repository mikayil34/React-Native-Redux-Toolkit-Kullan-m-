import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import Slice from "./Slice";

export const Stor = configureStore({
    reducer: {
        dictionary: Slice, 
    },    
    
});

export default Stor;
