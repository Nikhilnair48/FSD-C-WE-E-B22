# JS Array Methods Review

// How do we declare and assign value to an array?

// Declare and initialize an arry
const arr = [];

arr[0] = 10;
arr.push(4);
for(let i = 0; i 10; i++) {
    arr[i] = i;
}

Method	                What it does
map(fn)	                transforms every element based on the predicate function we pass
filter(fn)	            keeps only elements in the array that passes the predicate               
reduce(fn, init)	    iterate over an array and accumulate a single value based on the predicate function
forEach(fn)	            run a function on each element (no return value)
push(val)	            adds an element to the end of the array 
pop()	                remove an element from the end of the array
slice(start, end)	    returns a shallow copy of the part of the array
splice(i, n, …)	        remove and/or insert elements in place
indexOf(val)	        finds the first index of a given value (-1 if none)

Array: [1,2,5,6]
arr.filter((element) => element > 3)
Predicate: (element) => element > 3
For element of the array, is the value of element greater than 3
1 > 3: false
2 > 3: false
5 > 3: true
6 > 3: true

Array: [1,2,5,6]
1) arr.splice(0,1)
remove the element at 0th index in the variable, arr
Returns the removed element(s)

2) arr.splice(0,0,5,2,15)
add elements 5,2,15 from the 0th index

3) splice can be used to replace elements.

[500, 450, 1240].reduce((accumulator, element) => accumulator + element, 0)
[1,2,[5],6,[2,3]]



<!-- Exercise 1 -->
const users = [
    {id: 1, name: "Mathesh", email: "m@gmail,com" },
    {id: 2, name: "Vimalan", email: "v@gmail,com" }
]

// Get a new array of email strings
const emails = users.map(user => user.email);

<!-- Exercise 2 -->

const products = [
    {id: 1, name: "Shoe", isStock: true },
    {id: 2, name: "Hat", isStock: false },
]
// I need an array of only in-stock products?
const inStockProducts = products.filter((product) => product.isStock);

<!-- Exercise 3 -->
const cart = [
    { sku: "X1", price: 540, quantity: 2 },
    { sku: "Y1", price: 520, quantity: 5 },
]
// I need one number: total cost of the cart
cart.reduce((acc, elem) => acc + elem.price, 0);

<!-- Exercise 4 -->
const students = ["Sivaram", "Kashish", "Shrabana", "Saravanan"];
// I want to console log each student name; no returns, transforms
students.forEach((student) => console.log(student));

<!-- Exercise 5 -->
const queue = ["apple", "banana"];
// Add a new snack to the queue, "cookie"
queue.push("cookie");
// Remove it from the queue?
const lastSnack = queue.pop(); // "cookie"

<!-- Exercise 6 -->
const colors = ["red", "green", "blue"];
// Where is "green" in this array?
const index = colors.indexOf("green");


<!-- Exercise 7 -->
let fruits = ["apple", "cherry", "date"];
fruits.splice(0,2);