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
const num = 51;
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
console.log(1 || "-");
console.log(1 && "-");
console.log(null || "-");
console.log(undefined && "");

// Number

console.log(1);
console.log(1.1);
console.log(1.1e4); // e4 => * 10^4
console.log(1.1e-4); // -e4 => / 10 ^4
console.log(100_000_000_000_000);

console.log(Number(1));
console.log(Number("1.1"));
console.log(Number("1.1e4"));
console.log(Number("11px"));

console.log(parseFloat("1.1100"));
console.log(parseInt("1.1100"));
console.log(parseInt("11px"));
console.log(parseInt("11", 2));
console.log(parseInt("11", 10));

// function    input --> [] ----outut
function makeCar() {
  console.log("Making the car ......");
}

makeCar();

const makeCarExpression = function makeCar() {
  console.log("Making Car expression");
};

makeCarExpression();
console.log(makeCarExpression.name);

const makeCarArrow = () => {
  console.log("Making Car arrow");
};

makeCarArrow();

const makeCarArrowShort = () => console.log("Makeing Car arrow short");
makeCarArrowShort();

console.log(typeof makeCar);
console.log(typeof makeCarExpression);
console.log(typeof makeCarArrow);
console.log(typeof makeCarArrowShort);

function makeCarWithParams(name) {
  console.log("Making car " + name + "  .....");
}
makeCarWithParams("Grazie");

function makeCarWithDefaultParams(name = "Matteo") {
  console.log("Making car " + name + "  .....");
}

makeCarWithDefaultParams();
makeCarWithDefaultParams("Antoneo");

function makeCarPrice() {
  console.log(arguments, Array.isArray(arguments));
  console.log(Array.from(arguments)[1]);
}

makeCarPrice(1, 90, 3);

function makeCarPriceWithRest(...params) {
  console.log(params);
}

makeCarPriceWithRest(1, 2, 3);

function makeCarPartId(id) {
  const localId = "J" + id;
  return function (name) {
    return `${localId}___${name}`;
  };
}

const carPartId = makeCarPartId("00001");
console.log(carPartId("AAAAA"));
console.log(carPartId("BBBBB"));

const otherCarPartId = makeCarPartId("4567");
console.log(otherCarPartId("AAAAA"));
console.log(otherCarPartId("BBBBB"));

(function (name) {
  console.log(name + " IIFE");
})("Alessadro");

// (function () {
//   console.log("AAAA");
// })();

// (function (nameP) {
//   console.log("Grazie " + nameP);
// })("Matteo");

// const car1 = (function makeCarPartId(id) {
//   const localId = "J" + id;
//   return function (name) {
//     return `${localId}___${name}`;
//   };
// })("34567");

// console.log(car1("SSS"));
// console.log(car1("WWWW"));

const carPartId2 = makeCarPartId.call(this, "00001");
// .call --> pass argiments
// .bind --> function attach to return new function - function(function) {return newFunction}
// .apply --> pass arguments makeCarPartId.apply(this, [1234  ])
console.log(carPartId2("ARTTU"));

// Object
const drink = {
  name: "Pepsi",
  price: {
    sale: 9,
    origin: 6,
  },
  getPriceIncludeVat: function () {
    return this.price.sale * 1.07;
  },
};

console.log("Drink is : ", drink);
console.log("Totla is ", drink.getPriceIncludeVat());
console.log(drink.price.sale);
console.log(drink["price"]["sale"]);

console.log({ ...drink, color: "brown" });
console.log(drink.hasOwnProperty("name"));
console.log(Object.entries(drink));
for (const key in drink) {
  console.log("for in key", key);
  console.log("forin drink key ", drink[key]);
}

console.log("Type of drink =  ", typeof drink);

// array
// promise
