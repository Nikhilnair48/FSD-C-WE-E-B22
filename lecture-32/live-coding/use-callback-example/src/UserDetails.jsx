function UserDetails({ user }) {
  console.log('UserDetails rendered');

  return (
    <div>
      <h3>User Details</h3>
      {user ? (
        <p style={{ fontSize: '18px' }}>You selected: <strong>{user}</strong></p>
      ) : (
        <p style={{ fontSize: '18px' }}>No user selected</p>
      )}
    </div>
  );
}

export default UserDetails;
