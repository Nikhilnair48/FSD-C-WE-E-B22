# Creating a database, collections & documents

## Pick (or create) a database

```javascript
use fsd_mongo
```

## Create a collection

```javascript
db.createCollection("students");
```

## Insert documents

```javascript
// Single documents
db.students.insertOne({
    name: "Mohan",
    email: "m@gmail.com",
    age: 25,
    city: "Bengaluru",
    skills: ["React", "JS"],
    contact: { phone: "1231231234" }
})
```

```javascript
// Many documents (bulk writes)
db.students.insertMany([
    {
        name: "Gowthambalaji",
        email: "g@gmail.com",
        age: 25,
        city: "Mumbai",
        skills: ["Node", "JS"],
        contact: { phone: "4561231234" }
    },
    {
        name: "Shrabana",
        email: "s@gmail.com",
        age: 25,
        city: "Chennai",
        skills: ["Express", "JS"],
        contact: { phone: "8791231234" }
    }
])
```


```javascript
// Custom _id
db.students.insertOne({
    _id: "student_dev_001",
    name: "Saravanan",
    email: "sa@gmail.com",
    age: 25,
    city: "Hyderabad",
    skills: ["MongoDB", "Express"],
    contact: { phone: "8791231267" }
})
```

```javascript
db.runCommand({
    collMod: "students",
    validator: {
        $jsonSchema: {
            required: ["name", "email", "age"],
            properties: {
                name: { bsonType: "string", minLength: 1 },
                email: { bsonType: "string", pattern: "^\S+@\S+\.\S+$" },
                age: { bsonType: "int", minimum: 0 },
                city: { bsonType: ["string", "null"] },
                skills: { bsonType: "array" }

            }
        }
    }
})
```

```javascript
    // Regex: ^\S+@\S+\.\S+$
    "^" -> start of the string
    "$" -> start of the string

    "\S+"
        - \S -> matches any non-whitespace character (letters, digits, symbols, etc)
        - + -> means one or more characters
    


```

