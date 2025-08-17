# Solutions — Travel Log Database Homework

## Part 1: Create the Database

```sql
CREATE DATABASE travel_log;
USE travel_log;
```

## Part 2: Create the `trips` Table (initial schema)

```sql
CREATE TABLE trips (
  id INT PRIMARY KEY AUTO_INCREMENT,
  traveler VARCHAR(50) NOT NULL,
  destination VARCHAR(100) NOT NULL,
  country VARCHAR(50),
  days_spent TINYINT UNSIGNED,
  cost_usd DECIMAL(10,2),
  traveled_on DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;
```

## Part 3: Insert Sample Data (example set)

```sql
INSERT INTO trips (traveler, destination, country, days_spent, cost_usd, traveled_on) VALUES
('Ananya', 'Kyoto', 'Japan', 5, 1200.50, '2023-11-01'),
('Rahul', 'Reykjavik', 'Iceland', 7, 2400.00, '2024-01-10'),
('Maya', 'Machu Picchu', 'Peru', 4, 1800.75, '2024-02-18'),
('Liam', 'Cairo', 'Egypt', 6, 1500.00, '2024-03-05'),
('Ananya', 'Oslo', 'Norway', 3, 900.00, '2024-04-20'),
('Rahul', 'Tokyo', 'Japan', 5, 1600.00, '2024-05-15'),
('Maya', 'Cusco', 'Peru', 2, 500.00, '2024-05-17'),
('Liam', 'Alexandria', 'Egypt', 2, 400.00, '2024-06-01');
```

> Any 6–8+ rows are fine; above provides variety for aggregation and filters.


## Part 4: Alter the Table

```sql
-- 1) Add notes column
ALTER TABLE trips ADD COLUMN notes TEXT;

-- 2) Change days_spent type from TINYINT to SMALLINT
ALTER TABLE trips MODIFY days_spent SMALLINT UNSIGNED;

-- 3) Rename cost_usd to trip_cost
ALTER TABLE trips RENAME COLUMN cost_usd TO trip_cost;
```

## Part 5: Queries to Practice (solutions)

1. All trips for one traveler (example: Ananya):

```sql
SELECT * FROM trips
WHERE traveler = 'Ananya';
```

2. Unique countries visited:

```sql
SELECT DISTINCT country
FROM trips;
```

3. Trips longer than 5 days:

```sql
SELECT traveler, destination, days_spent
FROM trips
WHERE days_spent > 5;
```

4. Three most expensive trips, sorted by cost:

```sql
SELECT traveler, destination, trip_cost
FROM trips
ORDER BY trip_cost DESC
LIMIT 3;
```

5. Trip count per traveler (highest first):

```sql
SELECT traveler, COUNT(*) AS total_trips
FROM trips
GROUP BY traveler
ORDER BY total_trips DESC, traveler ASC;
```

6. Average trip cost per country (only avg > 1000):

```sql
SELECT country, AVG(trip_cost) AS avg_cost
FROM trips
GROUP BY country
HAVING AVG(trip_cost) > 1000
ORDER BY avg_cost DESC;
```

7. Pagination — show trips 11–15 by id (works regardless of row count):

```sql
SELECT *
FROM trips
ORDER BY id
LIMIT 5 OFFSET 10;
```

8. Latest trip date for each traveler:

```sql
SELECT traveler, MAX(traveled_on) AS last_trip
FROM trips
GROUP BY traveler
ORDER BY traveler;
```

> If you also want the destination of the latest trip, a common pattern is a self-join:

```sql
SELECT t1.traveler, t1.destination, t1.country, t1.traveled_on
FROM trips t1
JOIN (
  SELECT traveler, MAX(traveled_on) AS last_trip
  FROM trips
  GROUP BY traveler
) t2
ON t1.traveler = t2.traveler AND t1.traveled_on = t2.last_trip;
```

9. Top spender overall:

```sql
SELECT traveler, SUM(trip_cost) AS total_spent
FROM trips
GROUP BY traveler
ORDER BY total_spent DESC
LIMIT 1;
```

10. Bonus — distinct email domains (if traveler stored emails):

```sql
SELECT DISTINCT SUBSTRING_INDEX(traveler, '@', -1) AS domain
FROM trips
WHERE traveler LIKE '%@%';
```



## Part 6: Extra Challenge (example answers)

1. Add yourself and insert a trip:

```sql
INSERT INTO trips (traveler, destination, country, days_spent, trip_cost, traveled_on, notes)
VALUES ('Your Name', 'Lisbon', 'Portugal', 4, 950.00, '2024-07-12', 'Summer break');
```

2. Update one of your trips to increase cost:

```sql
UPDATE trips
SET trip_cost = trip_cost + 150.00
WHERE traveler = 'Your Name' AND destination = 'Lisbon';
```

3. Delete trips shorter than 2 days:

```sql
DELETE FROM trips
WHERE days_spent < 2;
```

4. Add ratings and query average by country:

```sql
-- Add column
ALTER TABLE trips ADD COLUMN rating TINYINT UNSIGNED;

-- Update a few rows with ratings (examples)
UPDATE trips SET rating = 5 WHERE destination = 'Kyoto';
UPDATE trips SET rating = 4 WHERE destination = 'Reykjavik';
UPDATE trips SET rating = 3 WHERE destination = 'Cairo';

-- Average rating per country (exclude NULLs automatically)
SELECT country, AVG(rating) AS avg_rating, COUNT(rating) AS rated_trips
FROM trips
GROUP BY country
ORDER BY avg_rating DESC NULLS LAST, rated_trips DESC;
```

> If your MySQL version doesn’t accept `NULLS LAST`, remove it:

```sql
SELECT country, AVG(rating) AS avg_rating, COUNT(rating) AS rated_trips
FROM trips
GROUP BY country
ORDER BY avg_rating DESC, rated_trips DESC;
```
