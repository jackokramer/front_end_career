
const isAuthenticated =  true;

/**
let cartItemCount = 0;

if(isAuthenticated){
    // add item to cart
    cartItemCount = 1
} else{
    //tell user to login
    // console.log('Please log in)
    cartItemcount = 0;
}
 */

const cartItemCount = isAuthenticated ? 1 : console.log(`please log in`)// wont work you'll need a validation as an if else statement // correct way of doing this only reference the variable once and clear the variable abovee
console.log(cartItemCount);
// use the colon if its false :

const age = 9;

/*
let greeting;

if (age < 10) {
  greeting = "Hey there"; 
} else if (age > 18) {
  greeting = "Greetings";  
} else if (age > 10) {
  greeting = "What's up?";  
} else {
  greeting = "That's an interesting age!";  
}
console.log(greeting);


*/
const greeting = age < 10 ? 'hey there' : age> 18 ? `greetings`: age>10 ? `whats up!` : `thats an interesting age`;

console.log(greeting);

//avoid using terninaries since they're hard to read. Use if statements instead