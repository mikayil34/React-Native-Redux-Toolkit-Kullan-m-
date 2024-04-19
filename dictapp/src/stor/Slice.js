import { createSlice } from '@reduxjs/toolkit';

 

const slice= createSlice({
    name: 'sliceName',
    initialState: { 
        // Define your initial state here
    
    },
    reducers: {
        actions: {
            // Define your action functions here
        },
        // Define your reducer functions here
    },
});

export const { actions } = slice.aktion;
export default slice.reducer; 