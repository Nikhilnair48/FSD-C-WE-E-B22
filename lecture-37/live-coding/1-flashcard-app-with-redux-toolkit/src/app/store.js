import { configureStore } from "@reduxjs/toolkit";
import flashcardReducer from "../reducers/flashcardReducer";

const store = configureStore({
    reducer: {
        study: flashcardReducer
    }
});

export default store;