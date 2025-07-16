let stringVar = "123"


console.log("Null to String:", String(nullVar)) // Converts null to string "null"
console.log("Undefined to String:", String(undefinedVar)) // Converts undefined to string "undefined"

console.log("#####################################################");

console.log("String to Boolean:", Boolean(stringVar)) // Converts non-empty string to true
console.log("Number to Boolean:", Boolean(numberVar)) // Converts non-zero number to true
console.log("Null to Boolean:", Boolean(nullVar)) // Converts null to false
console.log("Undefined to Boolean:", Boolean(undefinedVar)) // Converts undefined to false
console.log("Empty String to Boolean:", Boolean(emptyStringVar)) // Converts empty string to false
console.log("Empty Number to Boolean:", Boolean(emptyNumberVar)) // Converts 0 to false

console.log("#####################################################");

console.log("String to Null:", stringVar ? null : nullVar) // Non-empty string to null
console.log("Number to Null:", numberVar ? null : nullVar) // Non-zero number
console.log("Boolean to Null:", booleanVar ? null : nullVar) // Non-false boolean to null
console.log("Empty String to Null:", emptyStringVar ? null : nullVar) // Empty string to null
console.log("Empty Number to Null:", emptyNumberVar ? null : nullVar) // 0 to null

console.log("#####################################################");

console.log("String to Undefined:", stringVar ? undefined : undefinedVar) // Non-empty string to undefined
console.log("Number to Undefined:", numberVar ? undefined : undefinedVar) // Non-zero number
console.log("Boolean to Undefined:", booleanVar ? undefined : undefinedVar) // Non-false boolean to undefined
console.log("Empty String to Undefined:", emptyStringVar ? undefined : undefinedVar) // Empty
console.log("Empty Number to Undefined:", emptyNumberVar ? undefined : undefinedVar) // 0 to undefined

console.log("#####################################################");

console.log("String to Empty String:", stringVar ? "" : emptyStringVar) // Non-empty string to empty string
console.log("Number to Empty String:", numberVar ? "" : emptyStringVar) // Non-zero number to empty string
console.log("Boolean to Empty String:", booleanVar ? "" : emptyStringVar) // Non-false boolean to empty string
console.log("Null to Empty String:", nullVar ? "" : emptyStringVar) // Null to empty string
console.log("Undefined to Empty String:", undefinedVar ? "" : emptyStringVar) // Undefined to empty string

console.log("#####################################################");

