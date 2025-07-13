// Example 1 - callback

function greetUser(name, callback) {
    console.log("Hi " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greetUser("Vimalan", sayBye);


// callback - example 2
// Read from a file/Making an API call -- 10 seconds
setTimeout(() => { console.log("This runs after 2 seconds") }, 2000);

// Callback hell

// ==========Promises==========
/* 
    What's a promise?
        A built-in Javascript object. Represents an eventual result of an asynchronous operation

    A promise has one of three states:
        - Pending: operation hasn't finished yet
        - Fulfilled: operation has been successfully completed
        - Rejected: operation failed

*/
// new instance of promise is created
const promise = new  Promise((resolve, reject) => {
    const success = true;
    if(success === true) {
        resolve("Success!");
    } else {
        reject("Failed");
    }
});

// Promise chaining
promise.then(...).then(...).catch(() => {});

// Promise.all() - to execute multiple operations at once


/*
    Async/Await - syntax feature (syntactic sugar) in Javascript (version: ES2017) to write asynchronous code that looks
        and behavies like a synchrous code

    
    They are built on top of Promises and make your code:
        - Easier to read
        - Easier to debug

    async keyword
    When you mark a function with async, it means:
        - function always returns a Promise
        - even if your function returns a value (not a Promise),
            Javascript will wrap that value in a Promise.resolve(value)
        - You can then use await keyword inside that function

    await keyword
        - used inside an async function to pause execution
             until the given Promise settles (resolve or reject)
*/  

async function getData() {
    return 42;  // return Promise.resolve(42)
}

async function fetchData() {
    const response = await fetch(".....");  // returns a Promise containing Response object
    const data = await response.json(); // returns a promise
    return data;
}

