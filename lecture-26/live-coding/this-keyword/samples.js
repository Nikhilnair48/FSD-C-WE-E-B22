// Example 1
function sayHi() {
    console.log("Hi from", this);
}

// Output: the global window object
sayHi();

const person = {
    name: "Vimal",
    // sayHi is a property of the person object
    // reference: 1234
    sayHi: function () {
        console.log("Hello", this.name);
    }
}

// Example 2
// Output: Hello Vimal
person.sayHi();

// Example 3
const greet = person.sayHi;
// Output: Hello Vimal
greet();

