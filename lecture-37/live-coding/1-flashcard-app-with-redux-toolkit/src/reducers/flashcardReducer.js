import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { flashcards } from "../data/flashcards";


// https://opentdb.com/api.php?amount=5&type=multiple

//  "flashcards/fetchFlashcards/pending"
//  "flashcards/fetchFlashcards/fulfilled"
//  "flashcards/fetchFlashcards/rejected"
export const fetchFlashcards = createAsyncThunk(
    "flashcards/fetchFlashcards",
    async () => {
        const response = await fetch("https://opentdb.com/api.php?amount=5&type=multiple");
        const json = await response.json();
        return json.results.map(card => ({
            question: card.question,
            answer: card.correct_answer
        }))
    }
)

const initialState = {
    cards: flashcards,
    index: 0,
    score: 0,
    completed: false,
    loading: false,
    error: null
};

const flashcardsSlice = createSlice({
    name: "flashcards",
    initialState,
    reducers: {
        submitAnswer: (state, action) => {
            if(state.completed) return;
            const isCorrect = action.payload;
            state.index += 1;
            if(isCorrect) state.score += 1;
            if(state.index >= state.cards.length) {
                state.completed = true;
            }
        },
        resetSession: (state) => {
            state.index = 0;
            state.score = 0;
            state.completed = false;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchFlashcards.pending, state => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchFlashcards.fulfilled, (state, action) => {
            state.loading = false;
            state.cards = action.payload;
            state.index = 0;
            state.score = 0;
            state.completed = false;
        })
        .addCase(fetchFlashcards.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    }
});

export const { submitAnswer, resetSession } = flashcardsSlice.actions;
export default flashcardsSlice.reducer;

/*
export default function flashcardReducer(state = initialState, action) {
    switch(action.type) {
        case SUBMIT_ANSWER:
            // If the user has already completed all flashcards, do nothing
            if(state.completed) {
                return state;
            }
            const nextIndex = state.index + 1;
            // const nextScore = state.score + (action.payload.isCorrect ? 1 : 0);
            const nextScore = state.score + (action.payload ? 1 : 0);
            return {
                index: nextIndex,
                score: nextScore,
                completed: nextIndex >= flashcards.length
            };
        case RESET_SESSION:
            return initialState;            
        default:
            return state;

    }
}
    */