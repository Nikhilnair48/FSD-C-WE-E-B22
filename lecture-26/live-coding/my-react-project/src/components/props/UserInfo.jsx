import React from "react";

// We receive props as the first argument; props is an object
// we will use object destructuring to retrieve necessary details
// const props = { user: { name: "asdf", email: "" } };
function UserInfo(props) {
    
    const { user } = props;

    if(!user) {
        return <div className="user-error-message">No user data provided.</div>;
    }

    return (
        <div className="user-info-card">
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Role: {user.role}</p>
        </div>
    )

}

export default UserInfo;