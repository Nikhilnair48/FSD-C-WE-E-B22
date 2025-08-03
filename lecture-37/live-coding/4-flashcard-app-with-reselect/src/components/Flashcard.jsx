import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitAnswer } from "../reducers/flashcardReducer";
import { selectCurrentCard, selectProgress } from "../reducers/selectors";

function Flashcard() {
    // const { cards, index, completed } = useSelector(state => state.study);
    const card = useSelector(selectCurrentCard);
    const { current, total, completed } = useSelector(selectProgress);
    
    const dispatch = useDispatch();
    const [showAnswer, setShowAnswer] = useState(false);
  
    if(completed) return null;

    return (
        <div>
            <h3>Card {current} or {total}</h3>
            <p><strong>Question:</strong> {card.question}</p>
            {showAnswer && <p><strong>Answer:</strong>{card.answer}</p>}
            <button onClick={() => setShowAnswer(!showAnswer)}>
                {showAnswer ? "Hide Answer" : "Show Answer"}
            </button>
            <div style={{ marginTop: "1rem" }}>
                <button onClick={() => dispatch(submitAnswer(true))}>
                    I knew it!
                </button>
                <button onClick={() => dispatch(submitAnswer(false))} style={{ marginLeft: "1rem" }}>
                    I didn't know it!
                </button>
            </div>
        </div>
    );
}

export default Flashcard;
