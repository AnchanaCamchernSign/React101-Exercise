// const { log } = require("console");

// Condition
let condition = true;
if (condition) {
} else {
}

const number = 5;
if (number % 3 == 0) {
  console.log("Fizz");
} else if (number % 5 == 0) {
  console.log("Buzz");
} else {
  console.log(`${number}`);
}

// ternary operator
const num = 51
const result = num % 3 == 0 ? "Fizz" : num % 5 == 0 ? "Buzz" : `${num}`;
console.log(result);

switch (true) {
  case num % 3 == 0:
    console.log("Fizz");
    break;
  case num % 5 == 0:
    console.log("Buzz");
    break;
  default:
    console.log(`${num}`);
    break;
}
console.log(1 || '-');
console.log(1 && '-');
console.log(null || '-');
console.log(undefined && '');


// Number

console.log(1);
console.log(1.1);
console.log(1.1e4);  // e4 => * 10^4
console.log(1.1e-4); // -e4 => / 10 ^4
console.log(100_000_000_000_000);


console.log(Number(1));
console.log(Number('1.1'));
console.log(Number('1.1e4'));
console.log(Number('11px'));

console.log(parseFloat('1.1100'));
console.log(parseInt('1.1100'));
console.log(parseInt('11px'));
console.log(parseInt('11', 2));
console.log(parseInt('11', 10));



