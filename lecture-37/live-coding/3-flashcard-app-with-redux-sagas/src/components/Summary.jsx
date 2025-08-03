import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetSession } from "../reducers/flashcardReducer";

function Summary() {
    const { cards, score, completed } = useSelector(state => state.study);
    const dispatch = useDispatch();

    if(!completed) return null;

    return (
        <div>
            <h2>Session Complete!</h2>
            <p>
                You answered {score} out of {cards.length} correctly.
            </p>
            <button onClick={() => dispatch(resetSession())}>
                Restart Session
            </button>
        </div>
    )
}

export default Summary;
