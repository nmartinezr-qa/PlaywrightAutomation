export function printAge(age) {
  console.log(`Age: ${age}`);
}

export class CustomerDetails {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
/**
 * Print the customer details
 * @returns {void}
 */
  printDetails() {
    console.log(`Name: ${this.name}`);
    printAge("Age: " + this.age);
  }
}

class PrintHelper {
  constructor() {
    console.log('PrintHelper constructor');
  }
  printMessage(message) {
    console.log(message);
  }
}

export const printHelperAlias = new PrintHelper();