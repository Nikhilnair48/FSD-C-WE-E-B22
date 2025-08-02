import { SUBMIT_ANSWER, RESET_SESSION } from "../actions/flashcardActions";
import { flashcards } from "../data/flashcards";


const initialState = {
    index: 0,
    score: 0,
    completed: false
};

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