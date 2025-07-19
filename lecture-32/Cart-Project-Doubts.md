# Problem: navigate from component A to component B
with state (data)

Need to use useNavigate hook
Reference: https://reactrouter.com/api/hooks/useNavigate#examples
When you navigate, you can pass an object:
navigate({
  pathname: "/some/route",
  search: "?search=param",
  hash: "#hash",
  state: { some: "state" },
});
Two options:
With this approach, you can access "state" in the component B
Another approach: you can also set "search" - this will update your browsers URL - then you can get the search params from the URL

Component B:
useLocation should help here
Reference: https://dev.to/esedev/how-to-pass-and-access-data-from-one-route-to-another-with-uselocation-usenavigate-usehistory-hooks-1g5m


## Question
In the context of navigating between components, how do we use useReducer to share data between component A and B?