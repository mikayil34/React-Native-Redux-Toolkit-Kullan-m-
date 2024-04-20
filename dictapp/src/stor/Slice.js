import { createSlice } from '@reduxjs/toolkit';
import wordDto from '../model/WordModel';


 
const slice = createSlice({
    name: 'dictionary',
    initialState: {
        words: [

        ],
        word2: [],
        count: 1,
        length: 0,
        isModel: false,

    },

    reducers: {
        setdata: (state, actions) => {
            state.word2 = actions.payload;
        }
        ,
        add(state, actions) {
            const word = actions.payload;
            const isDuplicate = state.words.some(w => w.en === word.en);
            word.id = state.length + 1;

            if (!isDuplicate) {
                state.words = [...state.words, word];
                state.length = state.words.length;
            } else {
                console.log('A word with the same "en" property already exists');
            }
        },
        remove(state, actions) {
            state = state.filter((word) => word.id !== actions.payload.id);
        },
        update(state, actions) {
            const word = actions.payload;
            state = state.map((item) => item.id === word.id ? word : item);
        },

        increment(state) {
            console.log(state.count);
            if (state.count >= (state.length)) {
                state.count = 1;
            } else {
                state.count++;
            }
        },
        decrement(state) {
            if (state.count <= 1) {
                state.count = state.length;
            } else {
                state.count--;
            }
        },
        setmodul(state, actions) {
            state.isModel = actions.payload;
        }

    },
});

export default slice.reducer;
export const { add, remove, update, increment, decrement, setmodul, setdata } = slice.actions;
