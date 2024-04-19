import { createSlice } from "@reduxjs/toolkit";

const slica = createSlice({

    name: "counter",
    initialState: {
        count: 10,
        autor: {
            name: "said ahmed",
            surName: "Aktemur"
        }
    },
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload;
        },
        refresh: (state) => {
            state.count = 0;
        },setAuter: (state, action) => {
            state.autor.name = action.payload.name;
            state.autor.surName = action.payload.surName;

        }
    }

});
export default slica.reducer;
export const { increment,setAuter, decrement, incrementByAmount, refresh } = slica.actions;