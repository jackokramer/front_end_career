//const isAuthenticated = false;
// let cartItemCount = 0;

/*
if(isAuthenticated){
    // add item to cart
    cartItemCount =1
} else {
    //tell user to login with prompt
    //console.log('Please login');
    cartItemCount = 0
}
*/

// const cartItemCount = isAuthenticated ? 1: console.log('please login') // ternaries are expressions 

 //console.log(cartItemCount);

 // ternaries easily assign a variable and expression without repitition but when you want to assign an actionuse a normal if statement

 /**User Age example */

 //const age  = 20;

/*let greeting;

 if(age<10){
     greeting = 'Hi there';
 } else if(age>20){
     greeting = `Grettings`;å
 } else if (age>10){
     greeting = `What's up?`
 } else {
     greeting = `how's being a teenager`
 }
 console.log(greeting)
*/
//const greeting = age < 10? `Hey there`: age > 18 ? `whats up`: `thats an interesting age`;

//console.log(greeting);

// Challenge 1: Check if the user is allowed to add an "iPad" to its shopping cart. Write a ternary that sets the shoppingCart variable to "iPad" if the user is authenticated, and an empty string if the user isn't authenticated

const isAuthenticated = true;
let shoppingCart;

// write your code here
if(isAuthenticated){
    shoppingCart += 1
    console.log('adding an ipad to your cart')
} else{
    shoppingCart = 0;
    console.log('please login to continue')
}

// solution  terinary example shoppingCart = isAuthenticated ? 'ipad' : '';

console.log("shoppingCart: ", shoppingCart);



// Challenge 2: Check if user is old enough. Write a ternary that sets allowedAccess to true if the age is 18 or more, or false if not
const age = 20;
//let allowedAccess;

// write your code here

//const allowedAccess =age> 18? `Please proceed to the site`: age< 18? `Sorry you can't access this material at this time`;

// per solution
allowedAccess = age >= 18 ? true : false;


console.log("allowedAccess: ", allowedAccess);

