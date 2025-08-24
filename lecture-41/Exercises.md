MongoDB mini-exercises: bookstore

Setup (seed your collection)

```javascript
use bookstore

db.books.drop()

db.books.insertMany([
  {
    title: "MongoDB Basics",
    author: "A. Gupta",
    price: 499,
    rating: 4.5,
    genres: ["databases", "programming"],
    inStock: true,
    publishedYear: 2023,
    pages: 280,
    seller: { name: "TechBooks", city: "Bengaluru" },
    createdAt: new Date("2024-11-10T10:00:00Z")
  },
  {
    title: "Node.js in Practice",
    author: "M. Khan",
    price: 699,
    rating: 4.2,
    genres: ["programming", "javascript"],
    inStock: true,
    publishedYear: 2021,
    pages: 420,
    seller: { name: "CodeMart", city: "Mumbai" },
    createdAt: new Date("2024-08-15T10:00:00Z")
  },
  {
    title: "Python for All",
    author: "S. Rao",
    price: 399,
    rating: 4.0,
    genres: ["programming", "python"],
    inStock: false,
    publishedYear: 2019,
    pages: 350,
    seller: { name: "TechBooks", city: "Bengaluru" },
    createdAt: new Date("2022-12-01T10:00:00Z")
  },
  {
    title: "Clean Data",
    author: "J. Mehta",
    price: 599,
    rating: 4.8,
    genres: ["data", "best-practices"],
    inStock: true,
    publishedYear: 2022,
    pages: 320,
    seller: { name: "BookHub", city: "Pune" },
    createdAt: new Date("2023-05-20T10:00:00Z")
  },
  {
    title: "Algorithms Illustrated",
    author: "P. Iyer",
    price: 799,
    rating: 4.7,
    genres: ["cs", "algorithms"],
    inStock: true,
    publishedYear: 2020,
    pages: 500,
    seller: { name: "CodeMart", city: "Mumbai" },
    createdAt: new Date("2021-09-10T10:00:00Z")
  },
  {
    title: "Learning React",
    author: "R. Das",
    price: 549,
    rating: 4.1,
    genres: ["programming", "javascript", "react"],
    inStock: false,
    publishedYear: 2024,
    pages: 380,
    seller: { name: "BookHub", city: "Pune" },
    createdAt: new Date("2025-01-05T10:00:00Z")
  }
])
```

Exercises

1. Verify your setup
   Show the total number of books, then list all titles.
   Hint: countDocuments, projection.

2. Simple filters
   Find all books sold in Bengaluru.
   Find all books where inStock is false.

3. Range queries
   Find books priced between 500 and 700.
   Find books published after 2021.

4. Projection
   Return only title and price for all books, hiding \_id.
   Then return everything except the seller field.

5. Sorting and limiting
   List the three most expensive books.
   List the two highest rated books, showing title and rating only.

6. Pagination
   Show page 2 of the price-descending list, with page size 2.
   Hint: sort, skip, limit.

7. Regex search
   Find books whose title contains the word data (case-insensitive).

8. Arrays
   Find books that include javascript in genres.
   Find books that include both programming and javascript.
   Hint: \$all.

9. Dot notation
   Find all books where the seller city is Mumbai.
   Find all books sold by BookHub.

10. Basic updates
    Set inStock to true for the book titled Learning React.
    Increase price by 50 for all books sold in Mumbai.
    Hint: updateOne with \$set, updateMany with \$inc.

11. Array updates
    Add the genre best-seller to any book with rating >= 4.7, avoiding duplicates.
    Then remove react from the Learning React genres.
    Hint: \$addToSet, \$pull.

12. Deletes
    Delete one book by exact title match.
    Delete all books with rating less than 4.1.
