const a: number = 1;

console.log(a);

let b: string = "Hello World";
console.log(b);

class Person {
  constructor(public name: string) {}
}

const user = new Person("Grazie");

console.log(user);

let myName: any = "Gracey";

console.log(myName);

let myAge: unknown = 99;
myAge = "999";
console.log(myAge);

// Condition

// if () {}
// else {}

// switch (key) {
//   case value:
    
//     break;

//   default:
//     break;
// }

// do {
  
// } while (condition) {

// }

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
  
// }

// for (const key in object) {
//   if (Object.prototype.hasOwnProperty.call(object, key)) {
//     const element = object[key];
    
//   }
// }

// array.forEach(element => {
  
// });

function add(n1: number, n2: number): number {
  return n1 + n2
}

add(1, 2)