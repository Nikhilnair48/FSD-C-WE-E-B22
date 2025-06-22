1. Which keyword is used to declare a variable that
can be reassigned, but is limited to the
block ({...}) it was defined in?
A) var -- old approach to declaring, don't use anymore
B) const -- constant, immutable
C) static -- doesn't exist
D) let -- a variable that be reassigned

Correct Answer: D

2. What will be the data type of the result variable
in the following code?
const result = "5" - 3; // output: "53"

A) Number
B) String
C) Boolean
D) undefined

Correct Answer: B


3. Which operator checks for both equal value AND equal type, ensuring no type coercion occurs?
A) ==
B) !=
C) ===
D) =

Correct Answer: C
Eg:
"5" == 5 // true
"5" === 5 // false

4. In the function call calculateArea(10, 20);, what are 10 and 20 officially called?
A) Parameters
B) Variables
C) Arguments
D) Properties

// a,b: parameters
function calculateArea(a, b) {
    return a * b;
}
calculateArea(10,20); // 10,20 are arugments
Correct Answer: C

5. How would you access the second element ("Banana") from the following array?
// 0th index: "Apple", 1st index: "Banana"
const fruits = ["Apple", "Banana", "Cherry"];
A) fruits[1]
B) fruits(2)
C) fruits[2]
D) fruits.get(1)

Correct Answer: A

6. Given the object const user = { name: 'Alice' };,
how do you access the name property?
A) user['name'] -- bracket notation
B) user.name -- dot notation
C) user(name)
D) Both A and B are correct

Correct Answer: D

7. Which JavaScript method is best for selecting a single, unique HTML element when you know its ID?
A) document.querySelector()
B) document.getElementsByClassName()
C) document.getElementById()
D) document.getElement()

Correct Answer: C

8. You have an element <p id="message">Hello</p>. Which line of code will change the displayed text to "Goodbye"?
A) message.innerHTML = "Goodbye";
B) message.textContent = "Goodbye";
C. message.value = "Goodbye";
D. Both A and B are correct and safe to use here.

Correct Answer: D

9. What is the standard and most flexible method for making an HTML element react to a user event like a click?
A) Using an onclick attribute in the HTML tag.
B. element.addEventListener('click', myFunction);
C. element.listen('click', myFunction);
D. new EventListener('click', element, myFunction);

Correct Answer: B

10. Inside an event handler function, which property of the event object tells you which specific element triggered the event?
A) event.src
B) event.element
C) event.this
D) event.target

Correct Answer: D
