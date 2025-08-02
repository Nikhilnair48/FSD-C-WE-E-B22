# Purpose

- Re-created our flashcard application using redux toolkit
- Use "thunk" to make async calls


## What exactly is a redux thunk?

A thunk is just afunction that wraps an expression so that it can be executed later.

Why does it matter?

Redux by default only understands plain-objects & actions.

redux-thunk is a "middleware" that intercepts any action that's a function and calls it with `disatch`. That gives us a place to run side-effects -> API calls, timers - before we eventualyl dispatch the action action.