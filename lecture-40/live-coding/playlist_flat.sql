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
-- "kashish"
-- "vimalan"
-- "mohan"
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



CREATE TABLE artists (
        id          INT PRIMARY KEY AUTO_INCREMENT,
        name        VARCHAR(100) NOT NULL
    );

    CREATE TABLE songs (
        id              INT PRIMARY KEY AUTO_INCREMENT,
        title           VARCHAR(100) NOT NULL,
        artist_id       INT NOT NULL,
        album           VARCHAR(100) NOT NULL,
        duration_s      SMALLINT UNSIGNED,
        CONSTRAINT fk_songs_artist
            FOREIGN KEY (artist_id) REFERENCES artists(id)
    );

    CREATE TABLE users (
        id      INT PRIMARY KEY AUTO_INCREMENT,
        name    VARCHAR(50) NOT NULL,
        UNIQUE KEY uq_user_name (name)
    );

    CREATE TABLE playlists (
        id          INT PRIMARY KEY AUTO_INCREMENT,
        user_id     INT NOT NULL,
        name        VARCHAR(100) NOT NULL,
        created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT fk_playlists_users
            FOREIGN KEY (user_id) REFERENCES users(id)
    );

    CREATE TABLE playlist_songs (
        playlist_id     INT NOT NULL,
        song_id         INT NOT NULL,
        added_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (playlist_id, song_id),
        CONSTRAINT fk_ps_playlist FOREIGN KEY (playlist_id) REFERENCES playlists(id),
        CONSTRAINT fk_ps_song FOREIGN KEY (song_id) REFERENCES songs(id)
    );



-- Artists
    INSERT INTO artists (name) VALUES
    ("A.R Rahman"),
    ("Shreya Goshal"),
    ("Arjit Singh"),
    ("Shankar Mahadevan"),
    ("Lucky Ali"),
    ("Sunidhi Chauhan"),
    ("Ilaiyaraaja");
    
    
    -- Users
    INSERT INTO users (name) VALUES
    ("Mathesh"),
    ("Sivaram"),
    ("Aswathi"),
    ("Saravanan"),
    ("Shrabana"),
    ("Gowthambalaji"),
    ("Mohan");

    -- Songs
    INSERT INTO songs (title, artist_id, album, duration_s) VALUES
        ('Jai Ho', 1, 'Slumdog Millionaire', 343),
        ('Chaiyya Chaiyya', 1, 'Dil Se', 415),
        ('Maa Tujhe Salaam', 1, 'Vande Mataram', 250),
        ('Barso Re', 2, 'Guru', 329),
        ('Piyu Bole', 2, 'Parineeta', 327),
        ('Tum Kya Mile', 3, 'Rocky Aur Rani Kii Prem Kahaani', 278),
        ('Kesariya', 3, 'Brahmastra', 252),
        ('Channa Mereya', 3, 'Ae Dil Hai Mushkil', 289),
        ('Breathless', 4, 'Breathless', 186),
        ('Mitwa', 4, 'Kabhi Alvida Naa Kehna', 382),
        ('O Sanam', 5, 'Sunoh', 225),
        ('Ek Pal Ka Jeena', 5, 'Kaho Naa... Pyaar Hai', 400),
        ('Sheila Ki Jawani', 6, 'Tees Maar Khan', 283),
        ('Dhoom Machale', 6, 'Dhoom', 400),
        ('Rakkamma Kaiya Thattu', 7, 'Thalapathi', 357),
        ('Thendral Vanthu', 7, 'Avatharam', 307),
        ('jai ho', 1, 'Slumdog Millionaire', 343);

    -- Playlists
    INSERT INTO playlists (user_id, name) VALUES
        (1, "Mathesh's Mix"),
        (2, "Sivaram's Jams"),
        (3, "Aswathi's Favorites"),
        (4, "Saravanan's Road Trip"),
        (5, "Shrabana's Chill Vibes");
    
    -- Playlist Songs
    INSERT INTO playlist_songs (playlist_id, song_id) VALUES
        -- Mathesh's Mix (4 Songs)
        (1, 2),   -- Chaiyya Chaiyya
        (1, 9),   -- Breathless
        (1, 14),  -- Dhoom Machale
        (1, 15),  -- Rakkamma Kaiya Thattu

        -- Sivaram's Jams (5 Songs)
        (2, 1),   -- Jai Ho
        (2, 7),   -- Kesariya
        (2, 10),  -- Mitwa
        (2, 11),  -- O Sanam
        (2, 8),   -- Channa Mereya

        -- Aswathi's Favorites (3 Songs)
        (3, 4),   -- Barso Re
        (3, 5),   -- Piyu Bole
        (3, 16),  -- Thendral Vanthu

        -- Saravanan's Road Trip (6 Songs)
        (4, 3),   -- Maa Tujhe Salaam
        (4, 6),   -- Tum Kya Mile
        (4, 11),  -- O Sanam
        (4, 12),  -- Ek Pal Ka Jeena
        (4, 15),  -- Rakkamma Kaiya Thattu
        (4, 1),   -- Jai Ho

        -- Shrabana's Chill Vibes (3 Songs)
        (5, 11),  -- O Sanam
        (5, 7),   -- Kesariya
        (5, 12);  -- Ek Pal Ka Jeena



SELECT * FROM artists;
SELECT * FROM songs;
SELECT * FROM users;
SELECT * FROM playlists;
SELECT * FROM playlist_songs;


-- songs that're longer than 200 seconds
SELECT id, title, duration_s
FROM songs
WHERE duration_s > 200
ORDER BY duration_s DESC;


-- Songs that start K
SELECT id, title
FROM songs
-- WHERE title LIKE 'K%';
-- WHERE title LIKE '%K%';
WHERE title LIKE '%E';

-- Distinct album names we have on record
SELECT DISTINCT album
FROM songs
WHERE album IS NOT NULL
ORDER BY album
LIMIT 3;

-- See the top 5 recently created playlists
SELECT *
FROM playlists
ORDER BY created_at DESC
LIMIT 5;

-- Number of playlists per user
SELECT user_id, COUNT(*) AS playlists_count
FROM playlists
GROUP BY user_id;

-- Pagination on songs: page 2, each page has 5 rows
SELECT id, title
FROM songs
ORDER BY title
LIMIT 5 OFFSET 5;

-- Possible duplicate titles with different casing
SELECT LOWER(title) AS title_lower, COUNT(DISTINCT title) AS variants, COUNT(*) AS total_rows
FROM songs
GROUP BY LOWER(title);

-- Sanity checks for odd data - duration_s
SELECT id, title, duration_s
FROM songs
WHERE duration_s IS NULL OR duration_s = 0;




-- Inner Joins
-- Songs in a given playlist -- given username and playlist name
-- user_name, playlist_name, song_title, artist_name, duration_s
SELECT u.name AS user_name,
		p.name AS playlist_name,
		s.title AS song_title,
		a.name AS artist_name,
		s.duration_s AS duration
FROM playlists p
JOIN users u ON u.id = p.user_id
JOIN playlist_songs ps ON ps.playlist_id = p.id
JOIN songs s ON s.id = ps.song_id
JOIN artists a ON a.id = s.artist_id;


-- Users who don't have a playlist
SELECT u.name
FROM users u
LEFT JOIN playlists p ON p.user_id = u.id
WHERE p.id IS NULL
ORDER BY u.id;

-- Right join
SELECT *
FROM playlists p
RIGHT JOIN users u ON p.user_id = u.id
WHERE p.id IS NULL
ORDER BY u.id;


-- Full outer join -> union











