import React from "react";

function GreetingFunctional() {
    const name = "Aswathi";

    return (
        <div className="container">
            <h2>Functional Component</h2>
            <p>Hello, {name} from a functional component!</p>
        </div>
    )
}

export default GreetingFunctional;