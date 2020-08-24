/**
 * DATATYPES
 * undefined, null, boolean, number, strings, symbol
 */

 const  num = 42;

 const anotherNum = 42;

 console.log(num === anotherNum);

 //objects are passed by reference -types
 const obj = {};
 const anotherobj = {};

 console.log(obj===anotherobj) // gives us false they aren't the same. Dynamivally add properties to them and the subtypes of objects. Primitive values are immutable Not unique