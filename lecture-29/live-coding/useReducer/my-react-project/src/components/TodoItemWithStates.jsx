// TodoItem with a bunch of states

import { useState, useReducer } from "react";
import "./Demo.css"

// action object has a type & payload
const todoReducer = (state, action) => {
    // TOGGLE_COMPLETE, TOGGLE_EDITING, UPDATE_TEXT, default state
    console.log(state);
    console.log(action);
    switch(action.type) {
        case "TOGGLE_COMPLETE":
            return { ...state, isCompleted: !state.isCompleted };
        case "TOGGLE_EDITING":
            return { ...state, isEditing: !state.isEditing };
        case "UPDATE_TEXT":
            return { ...state, isEditing: false, taskText: action.payload };
        default:
            return state;
    }
}

const initialState = {
    taskText: "Learning useReducer",
    isEditing: false,
    isCompleted: false,
}

function TodoItemWithState() {
    // const [taskText, setTaskText] = useState("Learning useReducer");
    // const [isEditing, setIsEditing] = useState(false);
    // const [isCompleted, setIsCompleted] = useState(false);
    const [state, dispatch] = useReducer(todoReducer, initialState);


    const handleSave = (newText) => {
        // setTaskText(newText);
        // setIsEditing(false);
        dispatch({ type: "UPDATE_TEXT", payload: newText });
    }

    // const handleComplete = () => {
    //     // this will allow us to "toggle" the value of the state, isCompleted
    //     setIsCompleted(!isCompleted);
    // }
    
    // const handleToggleEdit = () => {
    //     setIsEditing(!isEditing);
    // }

    const renderContent = () => {
        if(state.isEditing) {
            return (
                <input
                    type="text"
                    defaultValue={state.taskText}
                    onKeyDown={(e) => {
                        if(e.key === "Enter") {
                            handleSave(e.target.value);
                        }
                    }}
                    autoFocus
                />
            )
        };

        return (
            <span 
                style={{ textDecoration: state.isCompleted ? "line-through" : "none"}}
                // onClick={handleComplete}
                onClick={() => dispatch({ type: "TOGGLE_EDITING" })}
            >
                {state.taskText}
            </span>
        )

    }

    return (
        <div className="use-reducer-demo">
            <h2>To-Do Item (with useState)</h2>
            {renderContent()}
            {/* <button onClick={handleToggleEdit}> */}
            <button onClick={() => dispatch({ type: "TOGGLE_EDITING" })}>
                {state.isEditing ? "Cancel" : "Edit"}
            </button>
        </div>
    )

}

export default TodoItemWithState;