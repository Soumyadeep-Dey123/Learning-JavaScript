const myArray = [1, 2, 3, 4, 5];

const myObject = {
    name: "Alice",
    age: 30,
    isStudent: false
};
const myMap = new Map([
    ["city", "New York"],
    ["country", "USA"],
    ["population", 8000000]
]);
// Using for...of loop to iterate over an array
console.log("-----------------for of loop Example-----------------");
for (const num of myArray) {
    console.log(`Number: ${num}`); // Outputs: Number: 1, Number: 2, ..., Number: 5
}
// for iterating maps, not objects
for (const [key, value] of myMap) {
    console.log(`${key}:-> ${value}`); // Outputs:city:-> New York country:-> USA population:-> 8000000

}

console.log("-----------------For In Example-----------------");
// Using for...in loop to iterate over an object
for (const key in myObject) {
    console.log(`${key}: ${myObject[key]}`); // Outputs: name: Alice, age: 30, isStudent: false
}
// Maps cannot be iterated with for...in loop

console.log("-----------------For Each Example-----------------");
// ! foreach loop for arrays
myArray.forEach((num, index) => {
    console.log(`Index: ${index}, Value: ${num}`); // Outputs: Index: 0, Value: 1, ..., Index: 4, Value: 5
});

// ! foreach loop for maps
myMap.forEach((value, key) => {
    console.log(`${key}: ${value}`); // Outputs: city: New York, country: USA, population: 8000000
});

// ! foreach loop for objects
Object.keys(myObject).forEach(key => {
    console.log(`${key}: ${myObject[key]}`); // Outputs: name: Alice, age: 30, isStudent: false
});

const people = [
    { name: "Bob", age: 25, isStudent: true },
    { name: "Carol", age: 28, isStudent: false },
    { name: "Dave", age: 22, isStudent: true }
];

console.log("-----------------For Each Loop Example2-----------------");
// for each loop for an array of objects
people.forEach(person => {
    console.log(`${person.name} is ${person.age} years old and is a student: ${person.isStudent}`);
    // Outputs: Bob is 25 years old and is a student: true, etc.
});

// for each loop doesnt return anything, it is used for side effects

// For returning values, use filter function
const filteredPeople = people.filter(person => person.isStudent);
console.log(filteredPeople); // Outputs: [{ name: "Bob", age: 25, isStudent: true }, { name: "Dave", age: 22, isStudent: true }]


// Map function to transform data
let myNumberArray = [1, 2, 3, 4, 5];
const numbers = myNumberArray.map((num) => num + 10);
console.log(numbers); // Outputs: [11, 12, 13, 14, 15]

// Filter function to select specific data using chaining
let newNums = myNumberArray
    .map((num) => num * 2) // Transforming each number by multiplying by 2
    .filter((num) => num > 5) // Filtering numbers greater than 5
    .sort((a, b) => a - b); // Sorting the resulting array in ascending order
console.log(newNums); // Outputs: [6, 8, 10]    
// here we are chaining map, filter and sort functions to transform, filter and sort the data in a single expression. where data is transformed, filtered and sorted in a single expression.


console.log("-----------------Reduce Function Example-----------------");

// Reduce function to accumulate data
const sum = myNumberArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Outputs: 15 (1 + 2 + 3 + 4 + 5)



// More simple example of reduce function
const numbersArray = [10, 20, 30, 40, 50];
const total = numbersArray.reduce((acc, num) => {
    console.log(`${acc} and ${num}`)
    return acc + num
}, 0);
console.log(total); // Outputs: 150 (10 + 20 + 30 + 40 + 50)
