# Welcome to lecture 37!

- Wrap our Redux Thunk example
- Saga
    - What exactly are generators functions?
- Selectors
- RTK Query (basics)


# Notes

- Quizzes aren't even assigned to at least one learner(Vimal)
- Average in dashboard is incorrect based on the grades you've received


## Review - August 3rd

What is a thunk?

An action create that wraps an async operation and auto-generates three Redux action types.

Action type: "flashcards/fetchFlashcards"
- "flashcards/fetchFlashcards/pending"
- "flashcards/fetchFlashcards/fulfilled"
- "flashcards/fetchFlashcards/rejected"

```js
/**
 *  accepts: action type prefix, payload creator, options
 * 
 */
createAsyncThunk(
    "flashcards/fetchFlashcards",
    async () => {
        const response = await fetch("https://opentdb.com/api.php?amount=5&type=multiple");
        const json = await response.json();
        return json.results.map(card => ({
            question: card.question,
            answer: card.answer
        }))
    }
)

```


## [Redux Sagas](https://redux-saga.js.org/)

### What is a [generator function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators)(fn)?

A special type of a JS function that can pause its execution and resume it later.
Allows the funciton to produce a sequence of values one at a time.

A generators fn achieves this using `yield` keyword, which pauses the function's execution and returns a value to the caller.
When the generator functions' `next()` method is called again, the function resume execution from where it left off - until it encounters another `yield` keyword or it reaches the end of the function.

### What is the problem solved by Sagas?
- Complex workflows:
    - retry logic
    - cancellation
    - sequencing n number of dependent calls
- Core "effects"
    - `call(fn, ...args)`
    - `put(action)`
    - `take(actionType)`

```js
    // store.js
    import createSagaMiddleware from "redux-saga";
    const sagaMiddleware = createSagaMiddleware();
    const store = configureStore({ reducer, middleware: (getMiddlware) => getMiddleware().conact(sagaMiddleware) })
    sagaMiddleware.run(rootSaga)

```

## What is [Redux Reselect](https://github.com/reduxjs/reselect)?

Docs: https://redux.js.org/usage/deriving-data-selectors

### Why do we need "selectors" at all?

Problems
- Component re-renders too often
    - Symptom: every `useSelector` sees a new object/array every time the state changes, even if the piece that our component cares about did not change
    - Solution with selector: returns a stable (references-equal) values so React doesn't re-render the component
- Expensive computations
    - Symptom: a heavy calculatino (eg: you're sorting 50000 rows) runs on every re-render
    - Solution with selector: memoize the result and only recompute when the inputs change


A selector is simply a function `(state) => seleceOfData`

## What is Reselect?

A library that allows us to compose memoized selectors so Redux only computes derived data when its input selector' outputs change (by ===)

## What does the selector look like if using Reselect?

```js
    // input selectors - fast, no memoization required
    const selectCards = (state) => state.flashcards.cards;
    const selectShowSolved = (state) => state.flashcards.showSolved;

    creteSelector(
        // array of input selectors
        [selectCards, selectShowSolved],
        // result function
        (cards, showSolved) => {

        }
    )

```


## RTK Query - data fetching and caching with little boilerplate code

### What does it solve?
- When repeatedly writing fetch code with loading states, caching (cache invalidation - when do I clear my cache?), RTK Query allows us to handoff these layer to the library

## How does it do it?

API slices - generates hooks using createApi(...) with relevant tags for invalidation, auto polling

## Final changes to RTK query code