import React from "react";
import { Link } from "react-router";
import "../App.css";

function NotFoundPage() {
  return (
    <div className="page-container not-found">
        <h1>404 - Page Not Found</h1>
        <p>Oops! The page you're looking for doesn't exist</p>
        {/* <a href="/">Return to HomePage</a> */}
        <Link to="/">Return to HomePage</Link>
    </div>
  );
}

export default NotFoundPage;
