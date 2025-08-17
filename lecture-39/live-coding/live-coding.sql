-- DB creation

CREATE DATABASE guvi_fsd;

USE guvi_fsd;

-- CREATE TABLE students (...) ENGINE=MEMORY

CREATE TABLE students (
		id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(50) NOT NULL,
        email VARCHAR(100) UNIQUE,
        -- 1 byte of data -- 8 bits -> 2^8 -> 256
        -- SIGNED VS UNSIGNED
        age TINYINT UNSIGNED,
		city VARCHAR(40),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;


-- Insert students into the DB
INSERT INTO students (name,email,age,city) VALUES
	("Arun", "arun@example.com", 19, "Chennai"),
    ("Ishaan", "ishaan@gmail.com", 25, "Mumbai"),
    ("Devansh", "devansh@yahoo.com", 29, "Trivandrum");

INSERT INTO students (name,email,age,city) VALUES
	("Anu", "anu@yahoo.com", 26, "Trivandrum");
-- Update a student
UPDATE students
SET city="Thiruvananthapuram"
WHERE city="Trivandrum";

-- Update the DDL to store phone numbers
ALTER TABLE students ADD COLUMN phone VARCHAR(15) AFTER email;
ALTER TABLE students RENAME COLUMN phone TO mobile;
ALTER TABLE students MODIFY age SMALLINT UNSIGNED;

-- projection - selection (name, city, etc)
-- Query students and select columns
SELECT name, city, age FROM students;
-- Query all students
SELECT * FROM students;

-- Sorting
SELECT name, city, age FROM students ORDER BY age;
SELECT name, city, age FROM students ORDER BY age DESC;

-- Filter
SELECT * FROM students WHERE age >= 21;

-- students from city starting with "c"
SELECT * FROM students WHERE city LIKE 'c%';

-- students between 18 and 22
SELECT * FROM students WHERE age BETWEEN 18 AND 22;

-- Distinct cities in the students table
SELECT DISTINCT city FROM students;

-- Pagination
-- First three students in the table
SELECT * FROM students ORDER BY id LIMIT 3;

SELECT * FROM students ORDER BY id LIMIT 3 OFFSET 3;

-- Aggregation
-- Total number of students in the table
SELECT COUNT(*) AS total_students from students;

-- Group data in students
SELECT city, COUNT(*) AS n
FROM students
GROUP BY city;

-- Filtering groups with HAVING
-- Cities where the average age is >= 21
SELECT city, ROUND(AVG(age)) AS avg_age
FROM students
GROUP BY city
HAVING AVG(age) >= 21
ORDER BY avg_age DESC
LIMIT 2;




