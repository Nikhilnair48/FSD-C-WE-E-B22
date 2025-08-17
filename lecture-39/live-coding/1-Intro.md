# Welcome to lecture 39! (Lectuer 32 MERN - Learning Path)

## Objectives
- Introduction into databases - MySQL
- The different kinds of database engines
- Data definition language
- Data manipulation language
- Query data
- Quiz

## Break time

- Instructions to download MySQL
- How can you run, connect and execute SQL queries

## Why do we need databases?

- When we built our applications (React/JS), we needed to use the state to drive user interactions and data presented to the user

### Why databases?

- Persistence - not about just storing data in `localStorage`
- What if we're switching applications? Devices?
- What about secure storage? Concepts like encryption are relevant
- Backups


## What is a database?

A database is a software that stores data durably and permits a large number of operations (eg: queries/updates) in a safe and efficient manner

### Relational Databse (RDBMS):

What's a relational database?

Data that is organized in tables (like spreadsheets):
    - Table -> collection (eg: students, buildings, computers)
    - Row/Record -> one item (eg: one student, one building)
    - Column/Field -> a property (eg: name, age, city, address)
    - Schema -> the structure (columns + types)
    - Primary Key (PK) -> unique ID for each row (eg: id)

### Mapping from our JS model to SQL

```js
const students = [
    { id: 1, name: "Kashish", email: "k@gmail.com", grade: null },
    { id: 2, name: "Vimal", email: "v@gmail.com", grade: null }
]
```

### What makes relational DBs trustworthy? - A.C.I.D principle

#### Atomicity

A change is all-or-nothing. Eg: if you sign up to a platform, signup + profile creation fails halfway, nothing should be saved

#### Consistency

Data always obeys rules. (Emails are unique, age is valid, etc)

#### Isolation

Many users update the data concurrently without corrupting each other's data

#### Durability

Once saved, data survive any crashes


### SQL vs MySQL?

SQL is the language we use to talk to relational databases (ask questions, insert, update, etc)

MySQL is the database system (software) that implements SQL

Flow: You (SQL) <-> MySQL (the engine) <-> files on disk



### Notes

- When do you use SQL?