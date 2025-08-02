import { createStore } from "redux";

// Objective: a store to track our favorite quotes

// initial state
const initialState = {
    quotes: []
}

// Actions
const ADD_QUOTE = "ADD_QUOTE";
const REMOVE_QUOTE = "REMOVE_QUOTE";

// Action creators?
const addQuote = (quote) => ({
    type: ADD_QUOTE,
    payload: quote
});

const removeQuote = (quote) => ({
    type: REMOVE_QUOTE,
    payload: quote
});

// Reducer
const quotesReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_QUOTE:
            return {
                ...state,
                quotes: [...state.quotes, action.payload]
            };
        case REMOVE_QUOTE:
            return {
                ...state, 
                quotes: state.quotes.filter(quote => quote !== action.payload)
            };
        default:
            return state;
    }
}

// Create a store
const store = createStore(quotesReducer);

// Using our store
store.subscribe(() => console.log(store.getState()));

store.dispatch(addQuote("Be yourself; everyone else is already taken"));
store.dispatch(addQuote("A room without books is like a body without a soul."));
store.dispatch(removeQuote("Be yourself; everyone else is already taken"));