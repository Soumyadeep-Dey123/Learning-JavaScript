// ! Scope in JavaScript

let a = 10; // Global scope
function exampleFunction() {
    let b = 20; // Function scope
    let a = 30; // This 'a' is different from the global 'a'
    var c = 40; // Function-scoped variable, accessible throughout the function
    console.log(`Inside function: a = ${a}, b = ${b}`); // Outputs: Inside function: a = 30, b = 20
}
console.log(`Global scope: a = ${c}`); // Outputs: Global scope: a = 10

console.log(`Global scope: a = ${a}`); // Outputs: Global scope: a = 10

// bigger people can access smaller people's variables
// but smaller people cannot access bigger people's variables

function one() {
    let a = 10; // Function scope
    function two() {
        let b = 20; // Function scope
        console.log(`Inside two: a = ${a}, b = ${b}`); // Outputs: Inside two: a = 10, b = 20
    }
    two();
    console.log(`Inside one: a = ${a}`); // Outputs: Inside one: a = 10

}
one(); // Call the outer function to see the output