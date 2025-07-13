# Lecture 30 (Lecture 28 in MERN - Learning Path)

## Objectives

0 - Recap last Sunday's useReducer example; clarify any doubts
2 - optimization (useMemo): grid of users w/ filterUsers functionality
3 - reducing complexity (useReducer): 
4 - recap & questions from you
1 - Lightning round! - may get pushed down

## Questions

1.  How can we create a React application?
        - Previous way: npm create vite@latest test-project
        - npx create-vite@latest test-project
            - npx doesn't require you to install the library, eg: create-vite
    Vite
        - What is Vite? 
            - It's a build tool. what's a build tool? automates the process of compilation, packaging and deployment
            - Also allows us to run a development server; we run this using npm run dev
            - Hot Module Replacement (HMR): any change you make in your IDE (eg: VS Code) is instantly reflected in your browser
            - Generate optimized build of your project for production
2. 
    Parent to child data Passing - check
    Child to Parent Data Passing - 
    Performance optimization - useMemo - check
    useMemo vs useCallback - check
    useReducer - check

3.
    Array methods: Splice, Reduce
    Async/Await - Aswathi
        - Callback - simply a function that is passed as an argument to another function -- with the intent to be "called later"
        - Promises
        - Async/Await


## Notes

useCallback - remembers a function between renders, so React doesn't create a new version of it between component re-renders. React are 'essentially' caching the function

Use case: a function (like click handler) to a child component and you want to prevent the child from re-rendering unnecessarily

useMemo - remembers the value of a calculation between renders. Improves performance by avoiding unnecessary recalculation.

Use case
Filtering or sorting a huge list of users, and you want to avoid repeating the calculation.

useReducer - alternative to useState; helps you manage more complex state logic in a structured manner


## Useful Extensions

### Browser Extensions
- [React Developer Tools](https://react.dev/learn/react-developer-tools)
- [React FLow](https://reactflow.dev/): I haven't been able to audit this


## Tools for visualization - to help build a mental model
- TBD

## References
- https://runjs.app/play