import React from 'react';

const UserList = React.memo(({ users, filterFn, onUserClick }) => {
  console.log('UserList rendered');

  const filtered = users.filter(filterFn);

  return (
    <div>
      <h3>User List</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filtered.map((name) => (
          <li key={name}>
            <button onClick={() => onUserClick(name)} style={{ padding: '6px', fontSize: '16px' }}>
              {name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default UserList;
