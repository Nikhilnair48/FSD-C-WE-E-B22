/*
 ColorPicker component
    - pick a color (hexadecial to represent the color)
    - counter that increments by 1
    - Something: to get the contrasting text color
        based on the background color
 ColoredCounter
    - color
    - onIncrement

 memoization (memo) => only re-render a component when it's props change the value
*/

import { useState, memo, useCallback, useMemo } from "react";

// A "slow" function to simulate an expensive calcuation
// Calculate a constrasting text color for a given hex background
// Hex: #ffffff; 0-9; a-f
const getConstrastingTextColor = (hexColor) => {
    console.log("Running an expensive calculation...");
    for(let i = 0; i < 100000000; i++) {
        const r = parseInt(hexColor.substr(1, 2), 16);
        const g = parseInt(hexColor.substr(3, 2), 16);
        const b = parseInt(hexColor.substr(5, 2), 16);
        // computing the "perceived brightness"; add up to 100
        const brightness = ((r * 299) + (g * 587) + (b * 114)) / 1000;
        return (brightness >= 128) ? "black" : "white";
    }
}

// stateless component
const ColoredCounter = memo(({ color, onIncrement }) => {
    console.log("Color Counter is re-rendering");
    const coloredCounterDivStyle = { width: "100px", height: "100px",
        backgroundColor: color, margin: "0 auto", border: "1px solid black", marginTop: "10px" };

    return (
        <div style={{ padding: "10px", textAlign: "center"  }}>
            <div style={coloredCounterDivStyle}></div>
            <button onClick={onIncrement}>Increment Counter</button>
        </div>
    )
})

function ColorPicker() {
    const [color, setColor] = useState("#ff0000");
    const [counter, setCounter] = useState(0);

    // function to increase the value of counter
    // in memory reference - "0000 0004"
    // to solve the constant changing of the reference, we will use useCallback
    const handleIncrement = useCallback(() => {
        setCounter(c => c + 1);
    }, []);

    // how do we change the text color based on background?
    // input: color. Value: #ff0000
    const textColor = useMemo(() => getConstrastingTextColor(color), [color]);

    return (
        <div style={{ border: "2px solid grey", padding: "10px",
            backgroundColor: color, color: textColor}}>
                <h2>Color Picker</h2>
                <p>Counter: {counter}</p>
                <input
                    type="color"
                    value={color}
                    onChange={e => setColor(e.target.value)}
                />
                <ColoredCounter color={color} onIncrement={handleIncrement} />
        </div>
    )
}

export default ColorPicker;