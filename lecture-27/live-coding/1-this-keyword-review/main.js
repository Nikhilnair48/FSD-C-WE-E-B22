// Predict the output

/*
What's the purpose of "this" keyword in Javascript?

- pointers; access some specific variable using this
- bind to the object to access the key/value
- in a function call, getting the argument as an object

- this keyword refers to the object that is currently executing the function
- Where a function is called from, not where it is defined, defines the value of this. This is called runtime binding
*/

// Challenge 1
console.log(this);

// Output: browser's Window object
// Insight: When this keyword is used outside of any function, if refers to the global object

// Challenge 2
const movie = {
    title: "Mission Impossible",
    year: 2025,
    getYear: function() {
        return this.year;
    }
}

movie.getYear();

// Output: 2025
// Insight: "this" refers to the "movie" object, so "this.year" evaluates to 2025

const country = {
    name: "India",
    getCensusData() {
        console.log(`Census Data for ${this.name} as of 2020: 1.45B`);
    }
}

const censusFn = country.getCensusData;
censusFn();

// Output: Census Data for as of 2020: 1.45B
// Insight: Here, we've separated the method (getCensusData) from the object (country). So, when censusFn is invoked, it doesn't have "this.name" in it's context


/*
    Purpose of use "use strict"

    1. Eliminate silent errors: silent errors become exceptions
    2. In strict mode, this keyword in a function defaults to undefined instead of the global object
    3. Prevent certain syntax: duplicate parameter names are disallowed
*/


"use strict"

const country = {
    name: "India",
    getCensusData() {
        console.log(`Census Data for ${this.name} as of 2020: 1.45B`);
    }
}

// const boundCensusData = country.getCensusData.bind(country);
// boundCensusData();

const censusFn = country.getCensusData;

// This will succeed
// censusFn.call(country);
// censusFn.apply(country);

// This will fail
// censusFn();