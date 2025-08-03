import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import flashcardReducer from "../reducers/flashcardReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        study: flashcardReducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga)
export default store;