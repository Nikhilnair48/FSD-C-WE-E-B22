import React, { useState } from "react";

/*
    Purpose of the Rating component: for a movie in the watchlist, I wish to give it a rating after watching the movie
    Rating can range from 1-5
    Rating is going to be a child component to WatchlistDetailPage
    Reference for star: https://www.namecheap.com/visual/font-generator/star-symbols/
    value - the rating already given to the movie in the watchlist
*/
function Rating({ value = 0, onChange }) {
    const [hover, setHover] = useState(0);
  
    return (
        <div>
            {
                [1,2,3,4,5].map(star => {
                    return (
                        <span
                            key={star}
                            onClick={() => onChange(star)}
                            onMouseEnter={() => setHover(star)}
                            onMouseLeave={() => setHover(0)}
                            style={{
                                cursor: "pointer",
                                fontSize: "1.5rem",
                                // Default: if the user hasn't given the movie a rating
                                    // Initially, none of the stars will be highlighted
                                    // Hover over the 3rd star => stars 1,2,3 should be highligted
                                // if the user has given the movie a rating already
                                    // We need to highlight the number of stars based on the rating
                                        // Eg: rating 3 => highlight first 3 stars
                                    // Hover over the 4th star => stars 1,2,3,4 should be highlighted
                                color: star < hover ? "#ffc107" : "#e4e5e9"
                            }}
                        >
                            ★
                        </span>
                    )
                })
            }
        </div>
    )
}

export default Rating;
