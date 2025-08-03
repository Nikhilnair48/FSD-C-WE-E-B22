import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchRequest, fetchFailure, fetchSuccess } from "../reducers/flashcardReducer";

function* handleFetch() {
    try {

        const response = yield call(fetch, "https://opentdb.com/api.php?amount=5&type=multiple");
        // const json = await response.json();
        const json = yield call([response, response.json])
        const cards = json.results.map(card => ({
            question: card.question,
            answer: card.correct_answer
        }));
        yield put(fetchSuccess(cards));
    } catch(error) {
        yield put(fetchFailure(error.message));
    }
}

/**
    yield call(fetch, url)
        - invoke fetch(url) and waiting for the response
            - Saga calls the fetch API
            - When fetch returns a Promise, Saga await it
    yield call([res, res.json])
        - invoke res.json() with the correct "this" binding
        - Saga awaits for the promise resolution in this case
    yield put(fetchSuccess(cards))
        - Dispatch this redux action
        - Saga hands off the action to store.dispatch
 */

export default function* rootSaga() {
    yield all([
        takeLatest(fetchRequest.type, handleFetch)
    ])
}

/**
    function* rootSaga
        - a generator function. When the saga-middleware calls it, it gets back an "iterator" that be stepped through
    yield
        - pause the generator and hand an effect object to the middleware
    all([...])
        - an effect creator that says: "Run all items in this array in *parallel* and wait until they're each ready."
        - Similar to Promise.all for sagas
    takeLatest - a watcher effect. For every `actionType`, it sees in the Redux store:
        - Cancel any previouly running worker for that action
        - Start a fresh worker (in our case, handleFetch)
    fetchRequest.type
        - the plain-string action type produced by our fetchRequest action creator ("flashcards/fetchRequest")
    handleFetch
        - the worker saga that actually performs the fetch and it'll dispatch `fetchFailure` or `fetchSuccess`

 */

// export const fetchFlashcards = createAsyncThunk(
//     "flashcards/fetchFlashcards",
//     async () => {
//         const response = await fetch("https://opentdb.com/api.php?amount=5&type=multiple");
//         const json = await response.json();
//         return json.results.map(card => ({
//             question: card.question,
//             answer: card.correct_answer
//         }))
//     }
// )