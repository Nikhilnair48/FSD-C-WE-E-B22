import React from "react";

const DynamicProfile = () => {
    const user = {
        name: "Mathesh",
        isLoggedIn: true,
        theme: "dark",
        favoriteFoods: ["Dosa", "Paratha", "Paneer Saag"]
    };

    const getGreeting = (name) => `Hello, ${name}! Welcome back.`;

    return (
        <div>
            <h2>{getGreeting(user.name)}</h2>
            <p>Status: {user.isLoggedIn ? "Online" : "Offline"}</p>
            <h3>Favorite Foods:</h3>
            <ul>
                {
                    user.favoriteFoods.map((food, index) => {
                        return (
                            <li key={index}>
                                {food}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );

}

export default DynamicProfile;