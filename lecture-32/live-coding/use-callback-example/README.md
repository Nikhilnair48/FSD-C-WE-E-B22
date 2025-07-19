# useCallback Demo

A simple user directory with two functionalities: search and user selection

## Components

* App.jsx: The main component that holds the global state

    * search state: filters the user list
    * selectedUser: displays details for the clicked user

* UserList.jsx (memoized)

    * A list of users filtered based on search input.
    * Receives a filterFn prop and a onUserClick handler from the parent.

* UserDetails.jsx: A simple panel that shows which user was selected

# Interaction flow

* The user types into a search box: UserList filters accordingly

* The user clicks on a name in the list: UserDetails updates.

* Without useCallback: UserList re-renders unnecessarily on every selection

* With useCallback: UserList only re-renders when the search input changes: not when unrelated state (selectedUser) changes.

# How to run this demo

1. Run the app (npm run dev)

2. Open the URL in the browser (http://localhost:5173/)

3. Open DevTools in the browser. Select the Console tab

4. Type something in search — UserList re-renders

5. Click a user without changing search:

    i. With useCallback: UserList does NOT re-render

    ii. Without useCallback: UserList re-renders 
