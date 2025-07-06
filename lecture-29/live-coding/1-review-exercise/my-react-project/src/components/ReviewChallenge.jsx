import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log(`Fetching data for user: ${userId}`);
    setIsLoading(true);
    fetch(`https://fakestoreapi.com/users/${userId}`)
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => setError(err))
      .finally(() => setIsLoading(false));
  }, [userId]);

  if(isLoading) {
    return <p>Loading user profile...</p>
  }

  // if error object is valid. What is valid? It cannot be null or undefined
  if (error) {
    return <p>Error: {error}</p>
  }

  if(!user) return <div>Review challenge</div>

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
  /*
    Module operator
    10 / 2 = 5
    10 % 2 = 0; remainder: 1
    10 % 3 = 1; remainer: 1
    
    Value of currentUserId: 2

    currentUserId: inital value is 1
    (id % 5) + 1 => (1 % 5) + 1 => 1 + 1 => 2
    (id % 5) + 1 => (5 % 5) + 1 => 0 + 1 => 1
  */
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
