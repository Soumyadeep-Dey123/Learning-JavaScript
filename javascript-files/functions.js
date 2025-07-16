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