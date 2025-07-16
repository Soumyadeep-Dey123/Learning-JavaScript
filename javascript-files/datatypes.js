// !Primitive - Call by value
let username = "John Doe" // string datatype
let age = 30 // number datatype
let isEmployed = true // boolean datatype

// number => 2^53
// bigint => 2^64
let bigNumber = 1234567890123456789012345678901234567890n // bigint datatype
// string => ""

// null => standalone value => represenation of no value
let salary = null // null datatype
// undefined => no value
let address // undefined datatype

// symbol => unique and immutable value
let uniqueId = Symbol('id') // symbol datatype
let anotherUniqueId = Symbol('id') // different symbol, even though the description is the same
// If uniqueId === anotherUniqueId returns false

console.log(typeof username) //returns "string"
console.log(typeof salary) //returns "object" (null is considered an object in JavaScript)
console.log(typeof address) //returns "undefined"
console.log(typeof uniqueId) //returns "symbol"
console.log(typeof bigNumber) //returns "bigint";   

// Small note : Refer personal-learnings/global-property.md for an error in the code which i later resolved

// !Reference

// Arrays, Objects, Functions

let userhobbies = ["reading", "traveling", "coding"] // array datatype

// Objects -> inside curly braces -> key-value pairs -> can be any datatype (primitive or reference)
// Keys are always strings, but values can be of any datatype
let user = {
    name: "John Doe",
    age: 30,
    isEmployed: true,
    hobbies: userhobbies
}; // object datatype

// Functions 
function greet() {
    console.log("Hello, " + user.name);
} // function datatype

console.log("Type of array 'user': ", typeof userhobbies); // returns "object" (arrays are a type of object in JavaScript)
console.log("Type of object 'user' :", typeof user); // returns "object"
console.log("Type of function 'greet': ", typeof greet); // returns "function"

// All reference types are also known as "objects" in JavaScript
// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


// !Reference types are stored in the heap memory
// !Primitive types are stored in the stack memory

// Strings (The better way)
let name = "Alice";
let greeting = `Hello, ${name}!`; // Template literals for string interpolation
console.log(greeting); // Outputs: Hello, Alice!

let newName = new String("Alice"); // Using the String constructor to create a string object and storing Alice in newName
console.log(newName); // Outputs: [String: 'Alice']
console.log(typeof newName); // Outputs: object (because it's an object wrapper around the string). 

// Objects : continued in objects.js


