import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { flashcards } from "../data/flashcards";
import { submitAnswer } from "../reducers/flashcardReducer";

function Flashcard() {
    const { index, completed } = useSelector(state => state.study);
    const dispatch = useDispatch();
    const [showAnswer, setShowAnswer] = useState(false);
  
    if(completed) return null;

    const card = flashcards[index];

    return (
        <div>
            <h3>Card {index + 1} or {flashcards.length}</h3>
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
