

function greetUser(name) {
  return 'Hello ' + name;
}

let greeter = greetUser('John');
console.log(greeter); // Hello John

// Anonimous function
const greetUser1 = function(name) {
  return 'Hello ' + name;
}

console.log(greetUser1('Cena')); // Hello John

// Arrow function
const greetUser2 = (name) => {
  return 'Hello ' + name;
}

// function imported from printHelper.js
import { printAge } from '../helpers/printHelper.js';
printAge(25); // Age: 25

// import everything from printHelper.js
// import * as printHelper from '../helpers/printHelper.js';
// printHelper.printAge(25); // Age: 25

// Create an instace of a class
import { CustomerDetails } from '../helpers/printHelper.js';
let customer = new CustomerDetails('John', 25);
customer.printDetails(); // Name: John Age: 25

// import an instance of a class using alias defined in printHelper.js
import { printHelperAlias } from '../helpers/printHelper.js';
printHelperAlias.printMessage('Hello World'); // Hello World