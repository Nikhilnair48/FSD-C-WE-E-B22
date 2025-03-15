import express from "express";

const app = express();
const PORT = 3000;



// define a resource via express with resource path: /
app.get(
    "/user", 
    (request, response) => {
        // perform some operation
        // middleware
        // is this an admin?
    },
    (request, response) => {
        response.json(
            { 
                message: "Hello from the backend" 
            }
        );
    }
);

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
})

// ~64,000
// 1000-10000

// What is a cache? Something like local storage to reduce network calls (client-server calls)
// Terminal/Command Prompt: the tool used navigate your system but essentially
        // perform any operation done by applications on your system

