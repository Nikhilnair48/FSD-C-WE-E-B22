# Objectives

- Cover spread and destructuring in Javascript
    - Live coding
    - Exercise
- Questions from class
- Break
- Quiz -> 11
- JS Challenges -> 4

- Bug: why's character Id not incrementing?

# Spread

The spread operator (...) expands an array or object into individual elements or properties

const array1 = [1,2,3];
const array2 = [4,5];
// Result: [1,2,3,4,5]
const combined = [...array1, ...array2];

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
// Object: key/value
// Result: { a: 1, b: 3, c: 4 }
const merged = { ...obj1, ...obj2 };
merged["a"]
merged.b

# Rest

The rest operator (...) collects the remaining elements into an array(s) or object(s)

// Outcome: first = 10; rest = [20,30,40]
const [first, ...rest] = [10,20,30,40];
console.log(first); 
console.log(rest); 

// a: 1, b: 2, rest: [3,4,5]
function sum(a, b, ...rest) {
    return a + a;
}
sum(1,2,3,4,5);

# Array Destructing

What's destructuring? Dismantle

const nums = [100,200,300];
const [a,b,c] = nums;

<!-- 
Alternative
const a = nums[0];  // 100
const b = nums[1];  // 200
const c = nums[2];  // 300
-->
// x = 1, y = 3
const [x,,y] = [1,2,3];

# Object Destructing

Lets you unpack properties of an object into variables with matching names

const person = { name: "Nikhil", city: "Bangalore", country: "India" };
// what are the keys of the object person? name, city, country
// what are the values of the object person? "Nikhil", "Bangalore", "India"

// variable name = "Nikhil" and variable city = "Bangalore"
const { name, city } = person;

<!-- 
const name = person.name;
const city = person.city;
-->