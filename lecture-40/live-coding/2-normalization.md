# Normalizing our database

Goal

- Move away from a single table design
- Create new tables
    - artists
    - songs
    - users
    - playlists

## TABLE DEFINITION
```sql
    CREATE TABLE artists (
        id          INT PRIMARY KEY AUTO_INCREMENT,
        name        VARCHAR(100) NOT NULL,
    )

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
```

## TABLE POPULATION

```sql
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

```

## Queries 

```sql
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
```


## Normalization

Normalization allows us to remove redundant data that causes:
    - update anomaly
    - insertion anomaly
    - deletion anomaly

Normal forms we tend to use:
    - 1NF: every column is atomic (no lists, no repeating groups). Each row is unique
    - 2NF: in tables where the PK is composite, no partial dependency must exist
    - 3NF: no transitive dependency; non-key columns don't depend on other non-key columns
    - 4NF/5NF