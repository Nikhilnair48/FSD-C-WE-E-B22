# Exercises: SQL

# Homework: Building a Travel Log Database in MySQL

In this exercise, you will practice MySQL by building and querying a simple Travel Log database. You will:

* Create a database and a table
* Insert sample rows
* Alter the table structure
* Run queries to explore and analyze data

Follow the steps carefully. You may run queries multiple times to check your understanding.

## Part 1: Create the Database

1. Create a database called `travel_log`.
2. Switch to using that database.



## Part 2: Create the `trips` Table

Create a table called `trips` with the following columns:

| Column        | Data Type        | Details                               |
| ------------- | ---------------- | ------------------------------------- |
| `id`          | INT              | Primary key, auto-increment           |
| `traveler`    | VARCHAR(50)      | Name of traveler, required (NOT NULL) |
| `destination` | VARCHAR(100)     | City or place visited                 |
| `country`     | VARCHAR(50)      | Country of the destination            |
| `days_spent`  | TINYINT UNSIGNED | Number of days spent                  |
| `cost_usd`    | DECIMAL(10,2)    | Total cost in USD                     |
| `traveled_on` | DATE             | Date of travel                        |
| `created_at`  | TIMESTAMP        | Default: current timestamp            |



## Part 3: Insert Sample Data

Insert at least 6–8 rows into the `trips` table.

* Include at least 2 different travelers.
* Each traveler should have visited at least 2 destinations.
* Mix up the number of days and costs so queries later give interesting results.


## Part 4: Alter the Table

1. Add a new column `notes` of type `TEXT`.
2. Change the data type of `days_spent` from `TINYINT` to `SMALLINT`.
3. Rename the column `cost_usd` to `trip_cost`.



## Part 5: Queries to Practice

Answer the following using `SELECT` queries:

1. Show all trips made by one traveler of your choice.
2. List all unique countries visited.
3. Find all trips that lasted more than 5 days.
4. Show the 3 most expensive trips, sorted by cost.
5. Count how many trips each traveler has made.
6. Find the average trip cost per country, but only show countries where the average cost is greater than 1000.
7. Show the trips ranked by `id`, but only display trips 11–15 (simulate pagination).
8. Find the latest trip for each traveler.
9. Find the traveler who has spent the most money overall.
10. Bonus: If the `traveler` column had emails instead of names, write a query to list all distinct email domains.

## Part 6: Extra Challenge

1. Add yourself as a traveler and insert a trip.
2. Update one of your trips to increase the cost.
3. Delete any trip shorter than 2 days.
4. Add a new column `rating` (TINYINT, 1–5). Update a few rows with ratings and query the average rating per country.
