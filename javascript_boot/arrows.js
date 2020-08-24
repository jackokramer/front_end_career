//ARROW functions =>

const username = 'reed';

const capitalized = name =>  `${name.charAt(0).toUpperCase()}${name.slice(1)}`;

function greetUser(name, callback){
    return callback(capitalized(name));
}

const result = greetUser (username, name => `hi there ${name}`);

console.log(capitalized(username));


// Challenge: Rewrite your first function from a previous challnge to be an arrow function. 
// Stretch goal: Rewrite counting down closure in arrow function form. 


// Challenge start 
const splitBill = (amount, numPeople) => `Each person needs to pay ${amount / numPeople}`


console.log(splitBill(10, 2));
console.log(splitBill(10, 4));
// console.log(splitBill(10, 5));


// Stretch goal start
const countdown = (startingNumber, step) => {
  let countFromNum = startingNumber + step;
  return () => countFromNum -= step;
}

const countingDown = countdown(20, 2);

console.log(countingDown(15));
console.log(countingDown(17));
console.log(countingDown(18));
