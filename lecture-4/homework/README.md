**Programming Assignment: JavaScript Fundamentals**

**Instructions:** 
Complete the following exercises using the learnings from Lectures 1-4 (particularly 2, 3 & 4).

---

**Exercise 1: Variables, Datatypes & Operators**

*   **Objective:**  Practice string manipulation and basic input/output.
*   **Tasks:**
    *   Prompt the user to enter their full name.
    *   Calculate and display (using `alert()`) the following:
        *   The length of their name.
        *   The first letter of their name.
        *   The last letter of their name.
*   **Concepts Covered:**
    *   String operations (e.g., `.length`, accessing characters by index)
    *   String concatenation
    *   Input/Output using `prompt()` and `alert()`

---

**Exercise 2: Functions & Conditionals**

*   **Objective:**  Implement a function with conditional logic.
*   **Tasks:**
    *   Write a function named `checkTemperature(temp)` that accepts a single numeric argument `temp` representing a temperature.
    *   Implement the following logic within the function:
        *   If `temp` is greater than 30, return the string "Hot day!".
        *   If `temp` is between 20 and 30 (inclusive), return the string "Nice weather!".
        *   Otherwise (if `temp` is less than 20), return the string "Cold day!".
    *   Prompt the user to enter a temperature value.
    *   Call the `checkTemperature()` function with the user's input and display the returned message using `alert()`.
*   **Concepts Covered:**
    *   Function definition and invocation
    *   Conditional statements (`if`, `else if`, `else`)
    *   Comparison operators (`>`, `>=`, `<=`)
    *   Return values

---

**Exercise 3: Loops & Arrays**

*   **Objective:**  Work with arrays and loops to calculate an average.
*   **Tasks:**
    *   Create a function named `calculateAverage()`.
    *   Inside the function:
        *   Use a loop (e.g., `while` or `do...while`) to repeatedly prompt the user for numeric inputs (scores).  Continue prompting until the user cancels the input (e.g., by pressing "Cancel").
        *   Store each valid numeric input in an array.  Consider using `parseFloat()` to convert the input string to a number. Validate the input to ensure it's a number before adding it to the array.
        *   After the user finishes entering scores, calculate the average of all the numbers in the array.  Handle the case where the array is empty (no scores were entered) to avoid division by zero.
        *   Display the calculated average score using `alert()`.
*   **Concepts Covered:**
    *   Array creation and manipulation (adding elements)
    *   Loops (`while` or `do...while`)
    *   Input validation (checking for valid numbers)
    *   Aggregation (summing elements, calculating the average)
    *   Handling edge cases (empty array)

---

**Exercise 4: Scope & Hoisting**

*   **Objective:** Understand and analyze the differences between `var` and `let` variable declarations, both inside and outside loops, focusing on JavaScript's concepts of scope and hoisting.

*   **Tasks:**

    1.  **Code Analysis and Prediction:**
        *   Carefully examine the following JavaScript code snippet:

        ```javascript
        var message = "Outside loop";

        for (var i = 0; i < 3; i++) {
          var messageVar = "Inside var loop: " + i;
          let messageLet = "Inside let loop: " + i;
          console.log(messageVar); // Predict Output?
          console.log(messageLet); // Predict Output?
        }

        var messageVar = "I am declared with var outside the loop";
        let messageLet = "I am declared with let outside the loop";

        console.log(messageVar);  // Predict Output?
        console.log(messageLet);  // Predict Output?
        ```

        *   **Before running the code,** write down your predictions for the output of *each* `console.log()` statement.  Consider what the value of each variable will be at each point.

    2.  **Verification:**
        *   Run the code in a JavaScript environment (browser console, Node.js, etc.).
        *   Compare the actual output to your predictions.

    3.  **Explanation:**
        *   Write a clear and detailed explanation of the observed behavior, addressing the following points:
            *   **Console Output:** What was actually written to the console for each `console.log()` statement?
            *   **Reasoning:**  *Why* did each line of output behave the way it did? Explain the execution flow step-by-step.
            *   **`var` vs. `let` Scope:**  Discuss the differences in scope between variables declared with `var` and those declared with `let`.  How does scope affect the visibility and lifetime of these variables?
            *   **Hoisting:** Explain how hoisting influences the observed outputs.  How does hoisting affect `var` declarations differently from `let` declarations?  Specifically address the concept of the Temporal Dead Zone (TDZ).
            * **Redeclaration**: Explain how `var` and `let` behave differently when a variable is declared again.

*   **Concepts Covered:**
    *   Variable scope (`var` vs. `let`)
    *   Hoisting
    *   Temporal Dead Zone (TDZ)
    *   Block scope
    *   Function scope
    *   Global scope
    *   Variable redeclaration

---

**Exercise 5: Objects & JSON**

*   **Objective:**  Practice creating and manipulating JavaScript objects and converting them to/from JSON.
*   **Tasks:**
    *   Define a JavaScript object representing a student.  The object should have the following keys:
        *   `name` (string)
        *   `age` (number)
        *   `favoriteSubjects` (an array of strings)
    *   Convert the student object to a JSON string using `JSON.stringify()`. Log the resulting JSON string to the console.
    *   Convert the JSON string back to a JavaScript object using `JSON.parse()`.
    *   Use a loop (e.g., `for`) to iterate through the `favoriteSubjects` array of the reconstructed object and log each favorite subject to the console.
*   **Concepts Covered:**
    *   Object literals
    *   JSON serialization (`JSON.stringify()`)
    *   JSON deserialization (`JSON.parse()`)
    *   Iterating through array elements

---

**Exercise 6: Comprehensive Shopping Cart Calculator (Advanced)**

*   **Objective:**  Combine multiple concepts to create a more capable Shopping Cart.
*   **Tasks:**
    *   Create a shopping cart application that allows users to add items and calculate the total cost.
    *   Prompt the user for item names and prices repeatedly until the user cancels the input. You may ask for names and prices in two different prompts.
    *    Validate each input:
        *  Check item name and price. Skip the item if invalid. Eg: if if item is valid & price is invalid, show an alert "Invalid price"
    *   Store each item as an object with the following structure: `{ name: "cup", price: 250 }` inside an array.
    *   After the user finishes adding items:
        *   Calculate the total cost of all items in the cart.
        *   Display an itemized receipt in the console (listing each item's name and price). Eg: "Cup: Rs 250"
        *   If the total cost is greater than 1000, offer a 10% discount.
        *   Display the final total cost after the discount (if applicable) using `alert()`.
*   **Concepts Covered:**
    *   Objects
    *   Arrays
    *   Loops
    *   Functions
    *   Conditionals
    *   Input validation

---