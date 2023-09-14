// ariphmetic operators: + - * / % **
let number = +prompt("Enter your number:");
console.log(`${number} + ${number} = ${number + number}`);
console.log(`${number} - ${number} = ${number - number}`);
console.log(`${number} * ${number} = ${number * number}`);
console.log(`${number} / ${number} = ${number / number}`);
console.log(`${number} % 2 = ${number % 2}`); //




// exponentiation  **
console.log(`${number} ** 3 = ${number ** 3}`); // stepin


// logic operators

console.log(`a > b: ${5 > 3}`); // true
console.log(`a < b: ${5 < 3}`); // false
console.log(`a >= b: ${5 >= 3}`); // true
console.log(`a <= b: ${20 <= 20}`); // true

console.log(`0 == 0: ${0 == 0}`); //true 
console.log(`a == b: ${"1" == 1}`); //true

// false value : false, null, undefined, 0 , "", '', NaN.

console.log(`a == b: ${"5" == 5}`); //true 
console.log(`a != b: ${5 != 3}`); //true

console.log(`null == undefined: ${null == undefined}`); //true
console.log(`null === undefined: ${null === undefined}`); //false


// strict - compare types also
console.log(`a === b: ${"5" === 5}`); //false 
console.log(`a !== b: ${5 !== 3}`); //true



// increment ++

let bonus = 1;
++bonus;

//  decrement --
--bonus;