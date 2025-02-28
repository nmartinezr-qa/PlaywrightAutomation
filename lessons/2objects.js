// Declare an object
let customer = {
    name: "John",
    age: 30,
    isGold: true,
    cars: ["BMW", "Audi", "Mercedes"]
};
console.log(customer); // { name: 'John', age: 30, isGold: true, cars: [ 'BMW', 'Audi', 'Mercedes' ] }
console.log(customer.name); // John
console.log(customer["age"]); // 30
console.log(customer.cars[1]); // Audi

// Reassigning the value of an object
customer.name = "Jane";
console.log(customer); // { name: 'Jane', age: 30, isGold: true, cars: [ 'BMW', 'Audi', 'Mercedes' ] }


// Declare an array of objects
let customers = [
    {name: "John", age: 30},
    {name: "Jane", age: 25},
    {name: "Jack", age: 40}
];  
console.log(customers);
console.log(customers[2]);// { name: 'Jack', age: 40 }
console.log(customers[2].name);// Jack
console.log(customers[2]["age"]);// 40

