-- use guvi_fsd;

-- DROP TABLE students;
-- DROP DATABASE guvi_fsd;

-- Create DB & table
CREATE DATABASE music_lab;
use music_lab;

CREATE TABLE playlist_flat (
	user_name		VARCHAR(50) NOT NULL,
    playlist_name	VARCHAR(100) NOT NULL,
    song_title 		VARCHAR(100) NOT NULL,
    artist_name		VARCHAR(100) NOT NULL,
    album_name 		VARCHAR(100) NOT NULL,
    duration_s 		SMALLINT UNSIGNED,
    added_at		TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO playlist_flat
(user_name,playlist_name,song_title,artist_name,album_name,duration_s,added_at)
VALUES
("kashish", "Kashish's Top 3", "Love Me Not", "Ravyn Leane", "Bird's Eye", 213, "2024-08-15 12:05:05"),
("kashish", "Kashish's Top 3", "The Subway", "Chapell Roan", "The Subway", 317, "2024-08-12 18:23:05"),
("kashish", "Kashish's Top 3", "Daisies", "Justin Bieber", "SWAG", 128, "2025-07-01 16:05:05"),
("vimalan", "Vimalan's Top 3", "Ordinary", "Ravyn Leane", "Bird's Eye", 213, "2024-08-15 12:05:05"),
("vimalan", "Vimalan's Top 3", "Show Me Love", "Chapell Roan", "The Subway", 317, "2024-08-12 18:23:05"),
("vimalan", "Vimalan's Top 3", "Back to Friends", "Justin Bieber", "SWAG", 128, "2025-07-01 16:05:05"),
("mohan", "Mohan's Top 3", "Jump", "Ravyn Leane", "Bird's Eye", 213, "2024-08-15 12:05:05"),
("mohan", "Mohan's Top 3", "No Broke Boys", "Chapell Roan", "Mystical Magical", 317, "2024-08-12 18:23:05"),
("mohan", "Mohan's Top 3", "Bad Dreams", "Justin Bieber", "Teddy Swims", 128, "2025-07-01 16:05:05");

-- Queries on this table

-- Question: all the tracks by a given artist (eg: Chapell Roan)
SELECT song_title, album_name, duration_s, added_at
FROM playlist_flat
WHERE artist_name = "Chapell Roan"
ORDER BY added_at;

-- How many rows are in the table?
SELECT COUNT(*) FROM playlist_flat;

-- Top 3 longest tracks overall
SELECT *
FROM playlist_flat
ORDER BY duration_s DESC, song_title
LIMIT 5;

-- Distinct artists in a user's playlist
SELECT DISTINCT artist_name
FROM playlist_flat
WHERE user_name = "kashish" AND playlist_name = "Kashish's Top 3"
ORDER BY artist_name;

-- Count of songs per artist
SELECT artist_name, COUNT(*) AS total_rows
FROM playlist_flat 
GROUP BY artist_name;

-- Albums that appear at least twice for all users
SELECT album_name, COUNT(*) AS total_rows
FROM playlist_flat
GROUP BY album_name
HAVING COUNT(*) >= 2;

-- Songs added in the last 70 days
SELECT *
FROM playlist_flat
WHERE added_at >= CURRENT_DATE - INTERVAL 70 DAY;

-- Pagination: 3 most recent songs after skipping 2;
-- 2nd page where we retrieve two results per page
SELECT *
FROM playlist_flat
ORDER BY added_at DESC
LIMIT 3 OFFSET 2;



-- Observations
-- Duplication: artist_name, album_name, duration_s
-- Updating: fixing an artist's name required editing many rows
-- Insertion: insertion for a song, artist or album is only possible when it's associated with a user & playlist
-- Deletion
-- Storage







