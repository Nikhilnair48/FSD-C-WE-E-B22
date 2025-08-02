# Objective of the flashcard app

Show the user a question:
    - user should be able to click a button to see the answer
    - user will state whether they know the answer or not
    - once all flashcards are completed, inform the user how many they got right
    - permit the user to restart the session

## What're the steps to set up a Redux Store?

Set up a `store.js`
    * createStore function from redux and make it available for our application
    * createStore requires ALL reducers in the application; `combineReducers` will allow us to comebine the application's reducers


Create a `flashcardReducer`

Create our actions for the flashcard app:
    * type: SUBMIT_ANSWER, payload: isCorrect (true | false)
    * type: RESET_SESSION

Wire up our application with the store

Create user facing components
