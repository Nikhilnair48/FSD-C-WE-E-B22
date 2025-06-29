import React, { Component } from "react";

class CounterClass extends Component {
    // special function used to create and initialize your object
    constructor(props) {
        console.log("In constructor");
        super(props);
        this.state = { count: 0 };
        this.increment = this.increment.bind(this);
    }
    /*
        Lifecycle methods: this is what allows components to be created, managed and destroyed
        1. constructor
        2. getDerivedStateFromProps: for you to update the state based on the props
        3. render - returns the JSX to define the UI
        4. componentDidMount - invoked after the component is mounted. API calls for DOM manipulation
        5. componentWillUnmount  - used for a cleanup; eg: remove any listeners

    */

    componentDidMount() {
        console.log("In component did mount");
    }

    increment() {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        console.log("In render");
        return (
            <div>
                <h2>Class Counter</h2>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        )
    }
}

export default CounterClass;