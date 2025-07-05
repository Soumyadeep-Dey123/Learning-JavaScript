const constantValue = 42; // Example of a constant declaration
let variableName = "example"; // Example of a variable declaration
var anotherVariable = "test"; // Example of a variable declaration using var
let anotherVariable2;

console.table([constantValue, variableName, anotherVariable, anotherVariable2]);

// Output:
// ┌─────────┬───────────┐
// │ (index) │ Values    │
// ├─────────┼───────────┤
// │ 0       │ 42        │
// │ 1       │ 'example' │
// │ 2       │ 'test'    │
// │ 3       │ undefined │
// └─────────┴───────────┘

