import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log(`Fetching data for user: ${userId}`);
    fetch(`https://fakestoreapi.com/users/${userId}`)
      .then(res => res.json())
      .then(data => setUser(data));
  });

  if (!user) {
    return <p>Loading user...</p>;
  }

  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h3>{user.name.firstname} {user.name.lastname}</h3>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
}

function ReviewChallenge() {
  const [currentUserId, setCurrentUserId] = useState(1);
  return (
    <div>
      <h2>Code Review Challenge</h2>
      <button onClick={() => setCurrentUserId(id => (id % 5) + 1)}>
        Load Next User
      </button>
      <UserProfile userId={currentUserId} />
    </div>
  );
}

export default ReviewChallenge;
