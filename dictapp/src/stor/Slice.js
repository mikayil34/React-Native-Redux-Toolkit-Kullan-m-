import { createSlice } from '@reduxjs/toolkit';
import wordDto from '../model/WordModel';


 
const slice = createSlice({
    name: 'dictionary',
    initialState: {
        words: [],
        quiz: [],
        quizAnswer: [],  
        count: 1,
        length: 0,
        isModel: false,
        userId: "aef1", 
    },

    reducers: {
        setQuiz: (state, actions) => {
            state.quiz = actions.payload;
        },
        setQuizAnswer: (state, actions) => {
            const quizAnswer = actions.payload;
            const isDuplicate = state.quizAnswer.some(w => w.id === quizAnswer.id);
            quizAnswer.userId = state.userId;
            state.quizAnswer = [...state.quizAnswer, quizAnswer];

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
export const { add, remove, update, increment, decrement, setmodul, setQuiz,setQuizAnswer } = slice.actions;
