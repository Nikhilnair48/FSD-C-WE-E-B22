// Custom error example from slide 11
function calculateArea(width, height) {
    if (width < 0 || height < 0) {
        throw new Error('Dimensions cannot be negative.');
    }
    return width * height;
}

// caller doesn't handle error. This is called an unhandled exception
calculateArea(-1, 5);


// try {
//     calculateArea(-1, 5);   // caller handles the error
// } catch(error) {
//     console.error("Error from calculateArea " + error.message);
// }