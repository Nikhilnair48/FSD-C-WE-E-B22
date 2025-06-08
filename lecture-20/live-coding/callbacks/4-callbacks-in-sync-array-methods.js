const numbers = [1, 2, 3, 4, 5];

console.log("Using forEach with a callback:");
numbers.forEach(function(number, index) {
  console.log(`Number at index ${index}: ${number}`);
});

console.log("\nUsing map with a callback to double numbers:");
const doubledNumbers = numbers.map(function(number) {
  return number * 2;
});
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

console.log("\nUsing filter with a callback to get even numbers:");
const evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});
console.log(evenNumbers); // [2, 4]