// Array method: splice

const fruits = ["apple", "banana", "mango", "orange"];
             //    0         1        2         3

// remove banana from this array?
fruits.splice(1, 1);
// console.log(fruits);

// current state of the array: [ 'apple', 'mango', 'orange' ]
// fruits.push("kiwi");
// updated state of the array: [ 'apple', 'mango', 'orange', 'kiwi' ]

fruits.splice(2, 0, "kiwi");
// console.log(fruits);

// Array method: reduce

const prices = [100, 200, 199];
// total: number
const total = prices.reduce((accumulator, currentValue, 
    currentIndex, array) => {
    // console.log(accumulator);
    // console.log(currentValue);
    // console.log(currentIndex);
    // console.log(array);
    return accumulator + currentValue;
}, 0);
// console.log("Total " + total);

const myDuplicateFruits = ["apple", "banana", "mango", "orange", "apple", "mango", "mango", "kiwi", "banana"];
// output { apple: <number of occurences>, banana: 1, etc }

const count = myDuplicateFruits.reduce((acc, fruit) => {
    // I want to update my accumulator object
    // if i see apple for the first time, acc["apple"] - undefined; 
    //  (acc[fruit] || 1) -> 1 + 1 -> 2
    acc[fruit] = (acc[fruit] || 0);
    acc[fruit]++;
    // acc[fruit] = acc[fruit] === undefined ? 1 : acc[fruit] + 1;
    return acc;
}, {})

console.log(count);

// Exercise for you
const arrayOfObjects  = [ { id: 1, name: "Pen" }, { id: 2, name: "Book" } ]