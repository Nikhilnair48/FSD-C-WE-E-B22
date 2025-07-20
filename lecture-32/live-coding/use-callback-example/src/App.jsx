
import { useState } from 'react'
import './App.css'
import { useCallback } from 'react';
import UserDetails from './UserDetails';
import UserList from './UserList';

// Child component UserList -> receive the search Function
// Component will have the list of users & it will render them

const USERS = ["Aswathi", "Saravanan", "Kashish", "Balaji A", "Vimalan"];

function App() {
  const [search, setSearch] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  // Try toggling this between `useCallback` and plain function

  // --- With useCallback ---
  // const filterFn = useCallback(
  //   (name) => name.toLowerCase().includes(search.toLowerCase()),
  //   [search]
  // );

  // --- Without useCallback ---
  const filterFn = (name) => name.toLowerCase().includes(search.toLowerCase());

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h2>User Directory</h2>

      <input
        type="text"
        value={search}
        placeholder="Search users..."
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: '8px', fontSize: '16px', width: '300px' }}
      />

      <div style={{ display: 'flex', gap: '40px', marginTop: '20px' }}>
        <UserList users={USERS} filterFn={filterFn} onUserClick={setSelectedUser} />
        <UserDetails user={selectedUser} />
      </div>
    </div>
  );
}

export default App;
