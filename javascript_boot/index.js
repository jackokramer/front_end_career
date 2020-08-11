'use strict'; // wont allow any undeclared variabels line 16


// hoisting - access a varibale before its been created see line 5-7 below cant access a variable before its been initialized
var age;
console.log(age); // undefined
age = 27;


/* let and const are temporal dead zones. Meaning it doesn't exist yet
Choose const over let
const - restircitions that make code more readable
1) must be initialized the value
2) can't be reaassigned after declaration*/

/// cammel case = first word lowercase second first letter is capitalized

// variable names only contain letters numbers, and symbol $ _
// First character can't be a number or a - sign at the end

//**
//var firstname = "Reed ";

//var surName = "Barger";

//var oneThousand = 1000;

//console.log(firstname + surName)

//stuff = 'whole family' // still logs it but on the global scope

/**global object can be accessed anywhere in the code type 
browser - window
server global
**/ 
//console.log(stuff) 
console.log('hi');

//* Slooppy mode - default in scripts
// strict mode - throws more error messages, prevents pitfalls


'use strict';

// Challenge 1: We want to log out the name "Reed", but it doesn't work. Can you fix it?
//const name = "Reed";
//name = "Reed";
//console.log(name);

// Challenge 2: We want 102 to be logged out. But we're getting an error instead. Try to fix it!
//let count = 100;
//count = 101;
//count = 102;
//console.log(count);

//  Challenge 3: We want to log out the price (50), but it doesn't work. Can you fix it?
//let price;
//price = 50;
//console.log(price);


/**
 * Why BLOCK SCOPING MATTERS
 * Example below is called vaiable shadowing


var  price = 20;
const isSale = true;

// let and const  - block scoping
if(isSale){
    //discount price of the product
    let price  = 20 - 2;
    // do somehting else
    console.log('sale price', price)
}

console.log('price', price);

let userName= `Jane Doe`;

// 12 + '12' concatinates and combines strings
let messages = `Hi ${userName}, how are you?`; // string interpolation example

console.log(messages);
const weight = 170;

const moonWeight = `You weigh this ${weight * 0.165}lbs amount on the moon.`
console.log(moonWeight);

// template literal

`I'm a string....`;

const threeLines = `This is a string that
spans acorss
three lines`;
console.log(threeLines);

// Challenge: Help Darth Vader express himself to his son!
const mySon = "Luke";
const parentalStatus = "father";
const message = `${mySon}, I am your ${parentalStatus}`;
console.log(message);
 */

 /**How Variables Should be named
  * 
  */

  const name = 'Jane';
  const Name = 'Mark';
  const NAME = 'Fred';

  console.log(name, Name, NAME);

  let fullName = `${firstName} ${lastaName}`; // self descrptive  shouldn't require comments for others to understand write them in camel case

// booleans prefixed with is... or has...CamelCase
  let isModalVisible = true; // prefix with ts makes it easy to read in conditionals

  if(isModalVisible){
      //do something
  }

  const redColor = '#f000';