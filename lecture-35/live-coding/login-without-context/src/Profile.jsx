import React from "react";

function Profile({ user }) {
    if(!user) return <p>Please login first.</p>
    return (
        <div>
            <h2>Profile</h2>
            <p>Username: {user.username} </p>
        </div>
    )
}

export default Profile;
