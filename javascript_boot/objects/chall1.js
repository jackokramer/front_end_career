// Challenge: 
// 1. Create three variables - bar, cafe, restaurant - and set their values to a bar, a cafe and a restaurant in your city

const bar = 'Mucky Duck'
const cafe = 'Wooden Horse'
const restaurant = 'Andale'
// 2. Create an object - favouritePlaces - and populate it with your variables from task 1

const favPlace = {
    bar,
    cafe,
    restaurant,
    greeting(){
        console.log(`hello there`)
    }
}

console.log(favPlace);

favPlace.greeting()

console.log(favPlace.restaurant)

// 3. If you're not already using the object property shorthand, refactor your code to do so
// 4. Create a method on the object - greeting() -  that logs out a message to the console
// 5. Invoke the greeting() method and also log out your favourite restaurant to the console

