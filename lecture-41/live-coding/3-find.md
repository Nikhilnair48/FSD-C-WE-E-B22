# Read data in collection

## Querying basics 

```javascript
db.students.find();

// SELECT * FROM students;
```

```javascript
db.students.find({ city: 'Bengaluru' });

// SELECT * FROM students WHERE city = "Bengaluru";
```

```javascript
db.students.find({ age: { $gte: 21 }});

// SELECT * FROM students WHERE age >= 21;


db.students.find({ age: { $gt: 20, $lt: 25 }});

// SELECT * FROM students WHERE age > 20 AND age < 25;

```


## Projection

```javascript
db.students.find(
    { age: { $gte : 21 }},
    { name: 1, city: 1, _id: 0 }
);

// SELECT name, city FROM students WHERE age > 20;
```

```javascript
db.students.find(
    {},
    { contact: 0 }
);
```

### Sorting & Pagination

```javascript
// Top 3 oldest students
db.students.find().sort({ age: -1 }).limit(3);

// page 2, 3-per-page (skip the first 3, then take 3)
db.students.find().sort({ age: -1 }).skip(3).limit(3);

```

## Case insensitive search

```javascript
// Emails ending with @example.com
db.students.find({ email: /@gmail\.com$/i })
```

## Localization - TODO: provide references

## Dates

```javascript
db.students.insertOne({
    name: "Sivaram",
    email: "si@gmail.com",
    age: 22,
    city: "Thiruvananthapuram",
    skills: ["React", "HTML", "CSS"],
    contact: { phone: "9871231234" },
    createdAt: new Date()
});
```

```javascript
// the 5 latest students that were added
db.students.find().sort({ createdAt: -1 }).limit(5);
```

```javascript
// find students created in the last 7 days
db.students.find( { createdAt: { $gte: new Date(Date.now() - 7*24*60*60*1000) } });
```

## Filtering on complex data types

```javascript

db.students.find({ "contact.phone": "9871231234" });

// Searching for a single element in skills array
db.students.find({ skills: "React" });

// Require multiple elements to be present in skills array
db.students.find({ skills: { $all: ["React", "JS" ] } });

```
```
db.students.findOne({})
```
