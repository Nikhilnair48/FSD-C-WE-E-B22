import React from "react";
import { getArticles } from "../data/articles";
import { Link } from "react-router";
import "../App.css";

function ArticleListPage() {
    const articles = getArticles();
    // Problem: what is the total word cound across ALL articles? - reduce
    const totalWordCount = articles.reduce((accumulator, article) =>  accumulator + article.wordCount, 0);

  
    return (
        <div className="page-container">
            <h1>All Articles</h1>
            <p>Total word count for all articles: <strong>{totalWordCount}</strong></p>
            <ul>
                {
                    articles.map(article => {
                        return (
                            <li key={article.id}>
                                <Link to={`/articles/${article.id}`}>{article.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ArticleListPage;
