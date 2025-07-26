import React, { useState } from "react";
import { Link, useParams } from "react-router";
import { getArticleById } from "../data/articles";
import "../App.css";
import CommentForm from "../components/CommentForm";

/*
    URL path will contain: /articles/:articleId/comments/:commentId
    Eg: /articles/1, /articles/2, /articles/12345
    This is called path parameters (params)
    Two steps to the detail page: access the path params and get the article based on the ID
*/
function ArticleDetailPage() {
    const { articleId } = useParams();
    const article = getArticleById(articleId);

    // [{ id: time, text: "" }]
    const [comments, setComments] = useState([]);

    const handleAddComment = (commentText) => {
        const newComment = {
            id: Date.now(),
            text: commentText
        }
        setComments([ ...comments, newComment ]);
    }

    if(!article) {
        return (
            <div className="page-container">
                <h2>Article not found!</h2>
                <Link to="/articles">Return to all articles</Link>
            </div>
        );
    }
  
    return (
        <div className="page-container">
            <h1>{article.title}</h1>
            <p>{article.content}</p>
            <p>Word Count: {article.wordCount}</p>
            
            <div>
                <h2>Comments</h2>
                <ul>
                    {comments.map(comment => {
                        return (
                            <li key={comment.id}>{comment.text}</li>
                        )
                    })}
                </ul>
                <CommentForm onAddComment={handleAddComment} />
            </div>

            <Link to="/articles">Return to all articles</Link>
        </div>
    )
}

export default ArticleDetailPage;
