import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid black" }}>
        <Link to="/movies" style={{ marginRight: "1rem" }}>Search</Link>
        <Link to="/watchlist">Watchlist</Link>
    </nav>
  )
}

export default NavBar;
