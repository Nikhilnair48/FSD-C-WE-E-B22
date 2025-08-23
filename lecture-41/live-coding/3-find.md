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

