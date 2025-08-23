# Introduction to MongoDB

## What is MongoDB?
MongoDB is a document database. You store records as documents (think JSON objects) inside collections within a database.

- Database -> Collections (tables in MySQL) -> Documents (rows in MySQL) -> Fields (columns in MySQL)
- Every document has a unique "_id" (primary keys in MySQL)
- Single-document operations are atomic (all-or-nothing on that single document)

### How does a React equivalent of a MongoDB document look?

```js
    const student = {
        name: "Vimalan",
        age: 25,
        city: "Bengaluru",
        skills: ["HTML", "JS"],
        contact: { phone: "1231231234" },
        active: true,
        createdAt: "01-01-2025"
    }
```

## Data types

MongoDB stores data as BSON (Binary JSON). BSON is JSON-like but typed and binary, so it's faster to parse and supports types JSON (eg: dates, decimals, binary)

Core data types:
- String: "Vimalan" in the student example above
- Numbers: 25 in the student example above
- Boolean: active in the student example above
- Date: createdAt in the student example above
- Array: skills
- Object: contact
- Null / Regex / Binary: null / `/Vi/i` / `BinData(...)`

## What is an ObjectId?

An ObjectId is MongoDB's default `_id` type -- a 12-byte (12b x 8 bits -> 96 characters) identifier designed to be globally unique and increase over time.

### What does an ObjectId look like?

ObjectId("507f1f77bcf86cd799439011")

### Structure of the 12 bytes
- 4 bytes: Unix timestamp (seconds) -> gives you a creation time
- 5 bytes: random value (per process/host)
- 3 bytes - incrementing counter

```javascript
    const id = new ObjectId();
    id.getTimestamp();
```

## Storage Engine

MongoDB's default engine is WiredTiger. At out level today, know that it provides:
- Durability
- Compression (efficient on disk)
- Document-level concurrency (good with many writers)
- Predictable performance characteristics at scale - especially dealing data writes

