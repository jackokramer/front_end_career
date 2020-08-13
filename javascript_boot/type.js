/**
 * Primitive Types:
 * 
 * string
 * number
 * boolean
 * null
 * symbol
 * 
 * everything esse
 */

 let message = `some string`;
 console.log(typeof window);

 // 1) Excplicit type conversion to change type
 // 2) implicit type conversion(coercion)

 String(42) // glboal function

 console.log(Boolean(message));

 console.log(`1` * `2`); //coercien

 console.log('10' + 20);

 // commit tomorrow

 //conditionals work

 //truthy (true)
 //falsey (false)

 if(Boolean(value)=== true){
     // if true, do something with value
 } else{

 }

 //EX: 
 if(`hello`){
     console.log(`run`);
 } else{
     console.log(`skipped`);
 }

 // 0 will be coerced to false if passed as a boolean

 /**
  * 6 Values FALSY
  * false
  * 0
  * ''
  * null
  * undefined
  * NaN
  * FALSY VALUES
  */

  //1) Avoid direct comparisons in conditionals

  const username = ''; // any of the six values above will run the id statement

  if(username === false){ // can be recatogrized as  !username
    console.log(`no user`);
  }

  //2) Use triple equals === (strict equals operator)
  const uuser = null;

  if(null === undefined){
      console.log(`equals`);
  } else{
      console.log(`not equals`) // === will return not equals
  }

  //3) Convert to real boolean values when needed

  if(NaN === NaN){
    console.log(`equal`) // TO get 'equal' use  Boolean(NaN) === Bolean(NaN)
  } else {
      console.log(`not equals`)
  }

  // Challenge 1:
// What will the following console logs display? (they're all true and false)

console.log("Challenge 1:") // true
console.log(!undefined); // true
console.log(Boolean(NaN)); //false
console.log(false === false); // true
console.log(5 === "5"); // false
console.log("Hello" == "hello"); //true // false... correction

// Challenge 2:
// What will the following console logs display? (they're all true and false)
console.log("Challenge 2:") // true
console.log(Boolean(0)); // false
console.log(Boolean("0")); // true
console.log(Boolean("")); // false
console.log(!null); // true
console.log(!!"hello"); //true


// Challenge 3:
// List all the falsy values in JavaScript
// false
// 0
//''
// null
// undefined
// NaN