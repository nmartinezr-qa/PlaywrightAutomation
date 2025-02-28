// Conditional statements are used to perform different actions based on different conditions.

// The if statement executes a block of code if a specified condition is true.
// The syntax is:
// if (condition) { code to execute }
//
// The else statement executes a block of code if the same condition is false.
// The syntax is:
// if (condition) { code to execute } else { code to execute }
//
// The else if statement executes a block of code if a different condition is true.
// The syntax is:
// if (condition) { code to execute } else if (different condition) { code to execute } else { code to execute }
//
// The switch statement is used to select one of many code blocks to be executed.
// The syntax is:
// switch (expression) { case x: code to execute break; case y: code to execute break; default: code to execute }
//
// The break statement "jumps out" of a switch statement.
// The syntax is:
// break;

// Write a conditional statement that checks if a number is positive, negative, or zero.
// If the number is positive, print "Positive".
// If the number is negative, print "Negative".
// If the number is zero, print "Zero".
// Use the following number:
let number = 5;

if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// Write a conditional statement that checks if a number is even or odd.
// If the number is even, print "Even".
// If the number is odd, print "Odd".
// Use the following number:
number = 5;

if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// Write a conditional statement that checks if a number is between 1 and 10.
// If the number is between 1 and 10, print "Between 1 and 10".
// If the number is less than 1, print "Less than 1".       
// If the number is greater than 10, print "Greater than 10".
// Use the following number:
number = 5;

if (number >= 1 && number <= 10) {
    console.log("Between 1 and 10");
} else if (number < 1) {
    console.log("Less than 1");
} else {
    console.log("Greater than 10");
}

// Write a conditional statement that checks if a number is a multiple of 3, 5, or both.
// If the number is a multiple of 3, print "Multiple of 3". 
// If the number is a multiple of 5, print "Multiple of 5".
// If the number is a multiple of both 3 and 5, print "Multiple of 3 and 5".
// If the number is not a multiple of 3 or 5, print "Not a multiple of 3 or 5".
// Use the following number:
number = 15;

if (number % 3 === 0 && number % 5 === 0) {
    console.log("Multiple of 3 and 5");
} else if (number % 3 === 0) {
    console.log("Multiple of 3");
} else if (number % 5 === 0) {
    console.log("Multiple of 5");
} else {
    console.log("Not a multiple of 3 or 5");
}

// Write a conditional statement that checks if a number is a prime number.
// A prime number is a number greater than 1 that is only divisible by 1 and itself.    
// If the number is a prime number, print "Prime number".
// If the number is not a prime number, print "Not a prime number".
// Use the following number:
number = 7;
let isPrime = true;

if (number <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log("Prime number");
} else {
    console.log("Not a prime number");
}

// USE SWITCH STATEMENT
// Write a conditional statement that checks if a day is a weekday or weekend.
// If the day is a weekday, print "Weekday".
// If the day is a weekend, print "Weekend".
// Use the following day:
let day = "Saturday";

switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("Weekday");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend");
        break;
}