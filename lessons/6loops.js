// Loops
// 1. for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 2. while loop
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// 3. do while loop
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);

// 4. for in loop   
let obj = { a: 1, b: 2, c: 3 };
for (let prop in obj) {
  console.log(obj[prop]);
}

// 5. for of loop
let arr = [1, 2, 3];
for (let val of arr) {
  console.log(val);
}

// 6. forEach loop
arr.forEach(function(val) {
  console.log(val);
});

// foreach loop with index
arr.forEach(function(val, index) {
  console.log(index, val);
});

// foreach with arrow function
arr.forEach((val) => {
  console.log(val);
});

// 7. map loop
arr.map(function(val) {
  console.log(val);
});