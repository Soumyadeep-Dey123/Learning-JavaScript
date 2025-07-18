// !Objects 
// Objects are basically a collection of key-value pairs
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isEmployed: true,
    hobbies: ["reading", "traveling", "coding"],
    greet: function () {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
    }
};

// an object can also contain a nested object
// Values are accessed using dot notation or bracket notation
console.log(person.firstName); // Outputs: John 

// assign function is used to merge two or more objects
// object.assign(target, ...sources)
// The first parameter is the target object, and the rest are source objects.
// An empty target object should be used while merging objects.
let target = {};
let source1 = { a: 1, b: 2 };
let source2 = { c: 3, d: 4 };
let mergedObject = Object.assign(target, source1, source2);
console.log(mergedObject); // Outputs: { a: 1, b: 2, c: 3, d: 4 }
console.log(target); // Outputs: { a: 1, b: 2, c: 3, d: 4 } (target is modified as well)
console.log(target === mergedObject); // Outputs: true (both refer to the same object in memory)

// You can also use the spread operator to merge objects
let mergedObjectWithSpread = { ...source1, ...source2 };
console.log(mergedObjectWithSpread); // Outputs: { a: 1, b: 2, c: 3, d: 4 }

// Whenever recieving data from a DB or API, it is usually in the form of an object
let apiResponse = {
    status: "success",
    data: {
        userId: 1,
        id: 1,
        title: "Sample Title",
        body: "This is a sample body of the response."
    }
};

// Often, youll recieve an array of objects from a database or API
let dbData = [
    {
        name: "Alice",
        age: 25,
        hobbies: ["reading", "gaming"]
    },
    {
        name: "Bob",
        age: 28,
        hobbies: ["cooking", "hiking"]
    },
    {
        name: "Charlie",
        age: 22,
        hobbies: ["painting", "cycling"]
    }
]
console.log(dbData[1]); // Outputs: { name: 'Bob', age: 28, hobbies: [ 'cooking', 'hiking' ] }
console.log(dbData[2].age); // Outputs: 22
console.log(Object.keys(apiResponse)); // Outputs: [ 'status', 'data' ]
console.log(Object.values(apiResponse)); // Outputs: [ 'success', { userId: 1, id: 1, title: 'Sample Title', body: 'This is a sample body of the response.' } ]
// Other functions like length, entries, and hasOwnProperty can also be used with objects
// hasOwnProperty checks if the object has a specific property
console.log(apiResponse.hasOwnProperty('status')); // Outputs: true
console.log(Object.entries(apiResponse)); // Outputs: [ [ 'status', 'success' ], [ 'data', { userId: 1, id: 1, title: 'Sample Title', body: 'This is a sample body of the response.' } ]

console.log(apiResponse.data.title); // Outputs: Sample Title

// Destructuring objects
let { firstName: personFname, lastName, age } = person;
console.log(lastName, age); // Outputs: John Doe 30
console.log(personFname); // Outputs: John

// This keyword in objects
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    getDetails: function () {
        return `${this.brand} ${this.model}, ${this.year}`;
    }
};
console.log(car.getDetails()); // Outputs: Toyota Corolla, 2020
// The this keyword refers to the object itself, allowing access to its properties and methods
// Objects can also be used to create classes in JavaScript
// Classes are a blueprint for creating objects with shared properties and methods  