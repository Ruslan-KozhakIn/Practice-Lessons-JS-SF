//  working with console

console.log("Message from the separate js file");
console.warn('Some warning message!');
console.error('Some error message!');


//  variables
// create variable 

let email = "ruslageraklyon@gmail.com";

//  string concatenation: str + str 
console.log("My email: " + email);

// string interpolation: `text...${expression}...`
console.log(`My email: ${email}`);


console.log("Email type:", typeof (email));


//  data types

let username = 'programmer'; // str
let price = 120.3; // number
let isValid = true; // boolean
let emptyObject = null; // null
let undefinedValue = undefined; // undefined

console.log(`Username: ${username}, type: ${typeof (username)}`);
console.log(`Price: ${price}, type: ${typeof (price)}`);
console.log(`Is Valid: ${isValid}, type: ${typeof (isValid)}`);
console.log(`Empty Object: ${emptyObject}, type: ${typeof (emptyObject)}`);
console.log(`Undefined Value: ${undefinedValue}, type: ${typeof (undefinedValue)}`);


// browser dialogs

alert('Hello from alert!');
// prompt return str
let color = prompt("Enter Your favorite color");
// ?? - null-condition operator 
console.log(`User favorite color is: ${color ?? "transparent"}`);

let currentYear = +prompt("Enter current year!");
console.log(`Next year: ${currentYear + 1}`);

// confirm() -  ask user bool value
confirm("Do you want to continue?");




// ariphmetic operators: + - * / % **
let number = +prompt("Enter your number:");
console.log(`${number} + ${number} = ${number + number}`);
console.log(`${number} - ${number} = ${number - number}`);
console.log(`${number} * ${number} = ${number * number}`);
console.log(`${number} / ${number} = ${number / number}`);
console.log(`${number} % 2 = ${number % 2}`); //
console.log(`${number} ** 3 = ${number ** 3}`); // stepin




