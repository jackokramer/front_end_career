/**
 * this: reference to an object, the object its assoicated with can vary on how the function is called.
 * 
 * 4 rules to 'this'. How is it called? Method calls on object protoypcial inheritance
 * 
 * 1) global context (global, undefined in strict mode)
 * 2) as a method of an object(object on the left side of the dot)
 * 3) as a constructor function or a class constructor (instance iteself wiht new)
 * 4) as a DOM event handler
 */

 // global context

 console.log(this)

 //functions have their own context as well

 /*
 function whatIsThis(){
     'use strict';
     console.log(this);
 }

 whatIsThis();

 const userInfo = {
     title: 'developer',
     user: {
     first_name: 'jack',
     last_name: 'kramer',
     greetUser(){
         console.log(`Hi, ${this.first_name} ${this.last_name}`)
     }
    }
 }

console.log(userInfo.user.greetUser());
*/
/* ///Class Example
class User {
    constructor(first, age){
        this.first = first;
        this.age = age
    }
    getAge() {
        console.log(`${this.first} age is ${this.age}`)
    }    
}

const user = new User('Nina', 23)
user.getAge()
*/

/*
//constructor functon example.

function User(first , age){
    this.first = first;
    this.age = age;
}

User.prototype.getAge = function(){
    console.log(`${this.first}'s age is ${this.age}`);
}

const user2= new User('jane', 30)
user2.getAge()
*/

//DOM Event Handle

/*
const button = document.createElement('button');
button.textContent = 'Click';
document.body.appendChild(button);

const func = button.addEventListener('click', funnction(){ 
    console.log(this);
})

*/

//call(), apply(), bind()

const user = {
    name: 'Jack',
    title: 'developer',
}
/*
function printUser(){
    console.log(`${this.name} is a ${this.title}`)
}

printUser.call(user)
printUser.apply(user)

function whatIsThis(){
    console.log(this);
}

console.log(whatIsThis.call({first: 'jack'}))
*/

function printBio(city, country){
    console.log(`${this.name} is a ${this.title} in ${city}, ${country}`)
}

printBio.apply(user, ['San Fran', 'USA'])

function printUser(){
    console.log(`${this.name} is a ${this.title}`)
}
const userDescrip = printUser.bind(user);
userDescrip()

const user2 = {
    name: 'Douggie',
    title: 'Sales Rep'
}

printUser.bind(user2)
//bind doesn't change its immutable

const users = {
first:'Sara',
fn(){
    console.log(this.first);
},
    arrowFn: ()=> {console.log(this.first)}
}

users.arrowFn()