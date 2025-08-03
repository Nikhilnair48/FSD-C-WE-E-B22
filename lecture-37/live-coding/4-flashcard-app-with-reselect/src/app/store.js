import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import flashcardReducer from "../reducers/flashcardReducer";
import rootSaga from "./rootSaga";
import { flashcardsApi } from "./apiSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        study: flashcardReducer,
        // RTK Query cache reducer
        [flashcardsApi.reducerPath]: flashcardsApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware()
            .concat(sagaMiddleware)
            .concat(flashcardsApi.middleware)
});

sagaMiddleware.run(rootSaga);
export default store;