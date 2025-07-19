
import { useState } from 'react'
import './App.css'
import { useCallback } from 'react';
import { useEffect } from 'react';

// Child component UserList -> receive the search Function
// Component will have the list of users & it will render them

const UserList = ({ filterFn }) => {
  console.log("Userlist rendered");
  const users = ["Aswathi", "Saravanan", "Kashish"];
  const filteredUsers = users.filter(filterFn);

  return (
    <ul>
      {filteredUsers.map(user => (
        <li key={user}>{user}</li>
      ))}
    </ul>
  )

}

function App() {
  // search keywords in state
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    // component gets mounted
    // allows us to init the state
  }, [search])

  // search function - case insensitive search
  const filterFn = useCallback(
    (name) => name.toLowerCase().includes(search.toLowerCase()),
    [search]);

  // search input field
  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value) }
      />
      <UserList filterFn={filterFn} />
    </div>
  )
}

export default App
