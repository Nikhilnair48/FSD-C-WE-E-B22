import React from "react";

// functions vs methods
// function - reusable piece of code; 
//      function takes an input, has set of steps, and may return an output
// method - similar to a function; can also take in some input and return some data
//      A method is associated with an object

class GreetingClass extends React.Component {
    // constructors
    // methods
    render() {
        return (
            <div>
                <h2>Class Component</h2>
                <p>Hello, Balaji from a class component!</p>
            </div>
        );
    }
}

export default GreetingClass;