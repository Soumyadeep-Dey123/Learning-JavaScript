// !Functions in JavaScript

// Syntax
// function functionName(parameters) {
// code to be executed
// }

// Nothing is executed after return statement

function userHasLoggedIn(username) {
    return `${username} has logged in.`;
}

// Example usage
let loginMessage = userHasLoggedIn("John Doe");
console.log(loginMessage); // Outputs: John Doe has logged in.

// to assign a default value to a parameter
function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}
// undefined parameters will take the default value
greetUser(); // Outputs: Hello, Guest

//  "" -> considered as false
// 0 -> considered as false
// null -> considered as false
// undefined -> considered as false
// NaN -> considered as false
// Any other value is considered as true
// using ! operator infront of it makes it true

function addIntoCart(var1, var2, ...var3) {
    return var3
}
let cartItems = addIntoCart("apple", "banana", "orange", "grapes");
console.log(cartItems); // Outputs: [ 'orange', 'grapes' ] (rest parameters collect remaining arguments into an array)

// Can also have nested functions or functions inside loops or conditionals
// Main thing is that functions are contained in two curly braces '{}'


// Arrow functions
// Smarter way to write functions
// Syntax: (parameters) => { code to be executed }
const add = (a, b) => a + b;
console.log(add(5, 10)); // Outputs: 15

// Implicit return
const square = x => x * x; // or const square = (x) => (x * x);
console.log(square(4)); // Outputs: 16
// When scope is opened with curly braces, you must use return statement
const multiply = (a, b) => { return a * b; };
console.log(multiply(3, 4)); // Outputs: 12

// Immediately Invoked Function Expression (IIFE)
// A function that runs as soon as it is defined
(function iife() {
    // named iife
    console.log("This function runs immediately!");
})();
// Outputs: This function runs immediately!
//  How?
// function() { ... } is a function expression
// The parentheses () at the end invoke the function immediately, like functionName()
// IIFE can also take parameters
(function (name) {
    console.log(`Hello, ${name}!`);
})("Alice");
// Outputs: Hello, Alice!

// IIFE must be ended with a semicolon to avoid issues with other code that follows it
// IIFE can also be run using arrow function syntax
(() => {
    console.log("This is an IIFE using arrow function syntax!");
})();
// Outputs: This is an IIFE using arrow function syntax!