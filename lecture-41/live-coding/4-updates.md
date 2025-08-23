# Updates to the collection

## Updates: updateOne, updateMany, replaceOne
```javascript
    db.students.updateOne(
        { email: "m@gmail.com" },
        { $set: { city: "Thiruvananthapuram", "contact.phone": "9876543211" }}
    );
```

```javascript
    db.students.updateMany(
        {},
        { $set: { createdAt: new Date() }}
    );
```

```javascript
    db.students.replaceOne(
        { email: "s@gmail.com" },
        { name: "Aswathi", email: "a@gmail.com", age: 21, city: "Chennai", createdAt: new Date(), skills: ["JS", "Node"] }
    );
```

```javascript
    db.students.updateOne(
        { email: "g@gmail.com" },
        { $push: { skills: "React" } }
    );
    // student.skills.push("React");

    db.students.updateOne(
        { email: "g@gmail.com" },
        { $addToSet: { skills: "React" } }
    );
    
    db.students.updateOne(
        { email: "g@gmail.com" },
        { $pull: { skills: "React" } }
    );
```



## Delete

```javascript
db.students.updateOne(
    { email: "sa@gmail.com" },
    { $unset: { contact: "" }}
);

db.students.deleteOne({ email: "sa@gmail.com" });

db.students.deleteMany({ city: "Bengaluru" });
```


