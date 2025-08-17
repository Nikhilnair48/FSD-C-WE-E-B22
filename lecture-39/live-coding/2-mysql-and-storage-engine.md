# Section 2: What is MySQL? What are storage engines?

---

## What is MySQL?

MySQL is a relational database system.

- Let's you organize data into tables/rows
- You can perform CRUD operations using the SQL language
- Stores data durably on disk
- Allows multiple users or programs to create connections to work on the same data safely

### Example

- Student portal
    - Table: Students
        - Columns: id, name, email, dob, creationDate, updationDate
    - Table: Grades
        - Columns: id, courseId, studentId, creationDate, updationDate
    - Table: Projects
        - Columns: id, title, description, assignDate, deadline

### SQL vs MySQL - Part 2

- SQL
    - Create: INSERT (to create a row in a table), CREATE (used to create databases)
    - Read: SELECT
    - Update: UPDATE
    - Delete: DELETE

```sql
--- SQL (language)
SELECT name
FROM students
WHERE id = 1;
```
This query is interpreted and executed by MySQL

## SQL Data Types

### Why do we need datatypes?

- Every column in SQL requires a data type
- A data type tells MySQL what kind of values the column can hold, how much space to use and rulles to enforce

### Data types

Main categories of SQL datatypes:

#### `INT` / `SMALLINT` / `TINYINT`

- While numbers with different size limits
- Comparable to "Number" in Javascript
    - const age = 25;

### `DEMICAL` / `FLOAT`

- Can be called like this: DEMICAL(10, 2)
- Numbers with decimals
- Comparable to "Number" in Javascript
    - const age = 199.99;

### `VARCHAR`

- Variable length text up to n character
    - Set n character as follows: VARCHAR(50)
- Comparable to "String" in Javascript
    - const name = "full stack dev";

### `TEXT`

- Large text blocks
- Comparable to "String" in Javascript
    - const name = "this is research paper...";

### `DATE` / `DATETIME` / `TIMESTAMP`

- Dates & times
- Comparable to "Date" object in Javascript
    - new Date()

### `BOOLEAN`

- True/false values
- Comparable to "boolean" in Javascript
    - const test = true;

## Storage Engine

A storage engine is the part of MySQL that decies how tables are stored, updated and protected. When you create a table, you chose the engine.

We'll cover three main storage engines.

### MyISAM (older engine)

MyISAM was the default engine in MySQL before 2010. Simple and fast for reading, but limited for everything else.

- Locking: uses table-level locking
    - This means if you update one row, the while table is locked
    - Example: if you've 2,00,000 students in a system and 2,000 students trying to update their profile - the very first student who tries to make a change will prevent 1,999 users from updating their profile
- Transactions: not supported
    - A transcation is group of changes that succeed or fail together
    - Without transactions, partial updates can leave your data inconsistent
    - Example: library system; if you try to issue a book, two things should happen:
        - 1. the book's status is marked as "borrowed"
        - 2. the student's record is updated to show the borrowed book
- Foreign Keys: not supported
    - A foreign key is a rule that ensures relationships between tables remain valid
- Crash Recovery: not supported
    - If the server crashes, you may lose or corrupt data

### MEMORY (RAM-based engine)

The MEMORY engine stores all table data in RAM, not on disk.

- Storage: because it's in memory, it's extremely fast. But if your database server restarts, all data is lost.
- Locking: uses table-level locking.
- Transactions: not supported
- Foreign Keys: not supported

Typical use for MEMORY involves temporary or derived data.

### InnoDB (current default)

InnoDB is the current default storage engine in MySQL. 

- Locking: uses row-level locking
- Transactions: fully supported
    - Example: a student enrolls in a course:
        - Insert a record in the enrollments table
        - Decrease available seats in the courses table
- Foreign Keys: supported
    - You can now define rules to enforce relationships between tables
- Crash Recovery: fully supported
    - writes changes to a log before committing them
    - if the server changes, it replays the log to restore completed transactions
