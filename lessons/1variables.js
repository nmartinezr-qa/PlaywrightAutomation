//1. Hello World
console.log("Hello World");

//2. Variables
var firstName = "John"; // Can be redeclared and updated
let lastName = "Doe"; // Can be updated but not redeclared
const age = 30; // Can't be redeclared or updated

//3. Data Types
let myName = "John"; // String
let myAge = 30; // Number
let hasKids = false; // Boolean
let car = null; // Null
let test; // Undefined
let sym = Symbol('uniqueIdentifier'); // Symbol

//4. Concatenation and Interpolation
let messageToPrint = "My name is " + myName + " and I am " + myAge;
let messageToPrint2 = `My name is ${myName} and I am ${myAge}`;
console.log(messageToPrint);
console.log(messageToPrint2);

