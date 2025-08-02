# What is Redux?

Redux is a global state container (aka centralized data store) to help manage the application state.

Centralizes the state and decouples the data form UI.

Helps to eliminate prop drilling, debugging with [DevTools](https://github.com/reduxjs/redux-devtools).

Standardizes the data flow via actions and reducers.

- Store: the single JS object holding our app's state
- Action: a plain JS object `{ type, payload }` describing what happened
- Reducers: a pure JS function `(state, action) => new state`. No side-effects or async.
- Dispatch: the only way to send an action into the store
- Immutability: never mutate the existing state -- always return a new state
- Unidirectional flow: Action -> Reducer -> New State -> Subscribers will receive updated state

## Redux specific libraries:

https://redux.js.org/usage/writing-logic-thunks