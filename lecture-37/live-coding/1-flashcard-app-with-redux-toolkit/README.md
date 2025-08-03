# Purpose

- Re-created our flashcard application using redux toolkit
- Use "thunk" to make async calls


## What exactly is a redux thunk?

A thunk is just afunction that wraps an expression so that it can be executed later.

Why does it matter?

Redux by default only understands plain-objects & actions.

redux-thunk is a "middleware" that intercepts any action that's a function and calls it with `disatch`. That gives us a place to run side-effects -> API calls, timers - before we eventualyl dispatch the action action.








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