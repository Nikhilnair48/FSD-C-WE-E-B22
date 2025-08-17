# Database model design

Why this matter
- Good design should reduce duplication, prevent anomalies, and makes queries simpler and faster
- You should be able to justify each table and and column

Approach

1. write user questions and access patterns
2. identify entities and relationships
3. for each entity, define your columns and constraints
4. normalize to at least 3NF
5. validate with real queries
6. add indexes for the queries you run often