import { useState } from "react";

function CounterFunctional() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h2>Functional Counter</h2>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    )
}
export default CounterFunctional;