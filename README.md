Procedural Programming (eg: C)

entry point: index.js
instruction 1
instruction 2
....
instruction 10

Object Oriented Language (eg: Java, C++)

Person
- names
- dob
- height
- weight

Student - inherit the properties of a Person
- university
- major
- classes

Functional programming (Haskell, Javascript)
F(x) = 3x
F(3) = 3(3) => 9 (output)

F(G(x)) = 4x

Side-effect: your function actually modifies the state outside that function


String concatenation ->

"hello" + " world" => "hello world"


Modulo - %

10 / 2 
Quotient: 5
Remainder: 0    // modulo

10 / 3
Quotient: 3
Remainder: 1    // modulo

10 % 2 => 0
10 % 3 => 1
20 % 4 => 0
40 % 12 => 4


AND operator
"windowOpen?" and "am i running github?"
true AND true => true
false AND true => false
true AND false => false
false AND false => false

OR operator
true OR true => true
false OR true => true
true OR false => true
false OR false => false

NOT operator -> negate the original value
true => false
false => true

// initial value is true
let isBrowserOpen = true
// value changes tofalse
isBrowserOpen = !isBrowserOpen

let a = 5
let b = "5"
a == b -> true. Because there is not data type check
a === b -> false. Because we actually check the data type

a != b -> false
a !== b -> true