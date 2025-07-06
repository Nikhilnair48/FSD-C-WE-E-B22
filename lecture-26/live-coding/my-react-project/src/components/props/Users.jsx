import React, { useState } from "react";
import UserInfo from "./UserInfo";


const teamMembers = [
    { id: 1, name: "Sivaram", email: "s@gmail.com", role: "Student", isAdmin: false },
    { id: 2, name: "Logeshwaran", email: "l@gmail.com", role: "Designer", isAdmin: false },
    { id: 3, name: "Balaji", email: "b@gmail.com", role: "Manager", isAdmin: true }
];

const Users = () => {
    const [users, setUsers] = useState(teamMembers);

    return (
        <div className="container">
            <h1>Our Team</h1>
            <div className="user-list">
                {users.map(member => {
                    return (
                        <UserInfo key={member.id} user={member} />
                    )
                })}
            </div>
        </div>
    )   
}

export default Users;