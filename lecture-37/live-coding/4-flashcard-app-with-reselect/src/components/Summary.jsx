import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRequest, resetSession } from "../reducers/flashcardReducer";
import { selectProgress } from "../reducers/selectors";

function Summary() {
    const { total, score, completed } = useSelector(selectProgress);
    const dispatch = useDispatch();

    if(!completed) return null;

    return (
        <div>
            <h2>Session Complete!</h2>
            <p>
                You answered {score} out of {total} correctly.
            </p>
            <button onClick={() => dispatch(resetSession())}>
                Restart Session
            </button>
            <button onClick={() => dispatch(fetchRequest())} style={{ marginLeft: "1rem"}}>
                Fetch Again
            </button>
        </div>
    )
}

export default Summary;
