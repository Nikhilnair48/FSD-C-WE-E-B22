## # Welcome to lecture 42! (Lecture 36 MERN - Learning Path)

## Today's objectives

- Recap and address any MongoDB questions/concerns
- Introduction to Node.js
- Understanding node modules, package*.json
- In built packages, third party packages, etc
- DevDependencies vs dependencies

## Mongo import

mongoimport --db fsd_mongo --collection users --file users.json
mongoimport --db fsd_mongo --collection orders --file orders.json

db.orders.aggregate([
    { 
        $lookup: {
            from: "users",
            localField: "userId",
            foreignField: "_id",
            as: "userDetails"
        }
    }
]);

Relationships between collections in Mongo or tables in SQL can be of different types:
- One-to-one
- One-to-many
- Many-to-many