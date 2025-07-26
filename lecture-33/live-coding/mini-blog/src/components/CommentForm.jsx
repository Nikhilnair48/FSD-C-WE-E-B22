import React, { useState } from "react";
import { useNavigate } from "react-router";

function CommentForm({ onAddComment }) {
    const [commentText, setCommentText] = useState("");
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
        // Prevent the default action when the form is submitted
        // page reload
        e.preventDefault();

        // Validation

        onAddComment(commentText);

        setCommentText("");

        navigate("/articles");

    }
    
    return (
        <form onSubmit={handleSubmit}>
            <h3>Leave your comment!</h3>
            <textarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
            />
            <button type="submit">Submit comment</button>
        </form>
    );
}

export default CommentForm;
