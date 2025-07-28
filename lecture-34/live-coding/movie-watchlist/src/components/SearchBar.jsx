import React, { useState } from "react";

/*
    Serach is going to be used to search for movies using the OMDB APIs
    What does it need? An input field and a button
    State: as the user types character into the input field, we should store in a state variable
    When the user submits the search, we need to inform the parent that a search needs to be initiated
*/
function SearchBar({ onSearch, initialSearchQuery = "" }) {
    const [query, setQuery] = useState("");

    const submit = (event) => {
        event.preventDefault();
        onSearch(query);
    }

    return (
        <form onSubmit={submit}>
            <input
                // type="text" -> default is text
                value={query}
                onChange={event => setQuery(event.target.value)}
                style={{ padding: "0.5rem", width: "200px" }}
            />
            <button type="submit" style={{ marginLeft: "0.5rem" }}>Search</button>
        </form>
    )
}

export default SearchBar;
