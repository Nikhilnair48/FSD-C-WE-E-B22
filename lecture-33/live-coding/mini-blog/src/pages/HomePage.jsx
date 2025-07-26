import React from "react";
import { articles, getArticles } from "../data/articles";
import { Link } from "react-router-dom";
import "../App.css";

/*
    Purpose: header, welcome message, list of articles (map)
*/
function HomePage() {
    const allArticles = getArticles();
    // Problem: I only want to show the first two articles among the posts
    const recentArticles = [];
    recentArticles.push(allArticles[0]);
    recentArticles.push(allArticles[1]);

    return (
        <div className="page-container">
            <h1>Welcome to by blog!</h1>
            <p>Here's my blogs. Below are my recent blog posts!</p>
            <div>
                {
                    recentArticles.map(article => {
                        return (
                            <div key={article.id}>
                                <h3><Link to={`/articles/${article.id}`}>{article.title}</Link></h3>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default HomePage;
