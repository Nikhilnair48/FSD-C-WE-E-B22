# State Management in React

## What is it?

It's about managing dynamic data in your application.

## Why do we need it in React?

State represents the information that cna change over time (user input, data fetched from API, UI visbility, etc).

As the application grows, we need to share state between components.

Reasons state management is needed:
 - Avoid prop drilling
 - Consistent data across components
 - Easier to maintain larger applications

## The "Store" Concept

A store refers to a centralized place to keep state and update logic.

Libraries such as Redux, Remix and many others try to solve the state problem using a "store."

In React, you can eliminate the usage of such libraries by simple using the Context API and related hooks.

## What does a store provide?

Provides a single source of truth for your app's state. 

## How do you build a store?

- Create a context - you use `React.createContext()` to create a context object
    - This context will be used to provide and consume your global state
- Create a Provider Component - This provider will wrap your app (or part of it) and supply the state to all child components
- Provide the state and updaters - inside the provider, use a Context.Provider to pass down the state value; within your store, you may use `useState` or `useReducer` to manage state
- Consume the state: Any component that needs the global state can use the `useContext` with your context to read the state or call dispatch functions.

```js
    CounterContext.jsx

    const CounterContext = createContext();

    function CounterProvider({ children }) {
        // Global state
        const [count, setCount] = useState(0);

        const increment = () => setCount(count + 1);
        const decrement = () => setCount(count - 1);

        return (
            <CounterContext.Provider value={{ count, increment, decrement }}>
                {children}
            </CounterContext.Provider>
        )
    }

    App.jsx
    return (
        <CounterProvider>
            <HomePage />
        </CounterProvider>
    )
```