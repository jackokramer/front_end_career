//const  todos = {};

const todos = [];

const todo1 = {
    text: `wash the dishes`,
    complete: false  // add any object to a key to add a corresponding value to it
};

const todo2 = {
    text: `complete laundry`,
    complete: false  // add any object to a key to add a corresponding value to it
};

todos[1] = todo1;
todos[2] = todo2;

//objects are good when you know exactly what you want to do. but limited in how you order them around

console.log(todos);

/**
 * Arrays example
 */

 todos.push(todo1, todo2);
 console.log(todos);

 todos.pop(todo2);
 console.log(todos)

 // Challenge: 
// 1. Create an array - favouriteSongs[] -  and add your 3 favourite songs using push()
// 2. Log out the last song in the array, and make it so that your solution will log out the last one regardless of how many items there are in the array
// 3. Invoke the pop method on your created array. What values do you have left in the array? 

const favouriteSongs= [

]

const song1 = {
    song: 'kiss from a rose',
    artist: `seal`,
    duration: 180
}

const song2 = {
    song: 'Mmmbop',
    artist: `Hanson`,
    duration: 162
}

const song3 = {
    song: 'Truly Madly Deeply',
    artist: `Savage Garden`,
    duration: 200
}

favouriteSongs[0] = song1;
favouriteSongs[1] = song2;
favouriteSongs[2] = song3;

console.log(favouriteSongs);

favouriteSongs.pop(2);

console.log(favouriteSongs)