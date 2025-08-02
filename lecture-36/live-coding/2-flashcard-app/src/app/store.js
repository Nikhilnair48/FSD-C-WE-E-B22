import { combineReducers, createStore } from "redux";
import flashcardReducer from "../reducers/flashcardReducer";

const rootReducer = combineReducers({
    study: flashcardReducer
})


const store = createStore(rootReducer);

export default store;