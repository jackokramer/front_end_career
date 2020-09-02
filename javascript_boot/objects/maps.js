const nums ={
    1: 1, // keys have to be strings or 
    true: true
}

Object.keys(nums).length;

console.log(Object.keys(nums))

/**
 * MAPS are like Objects Plus
 * introduced for ES6 and inlcudes a new datatype symbol
 * keys can be any primative type.
 */

 const map1 = new Map([
     //['key', 'value'],
     [1, 1],
     [true, true]
 ])

//map1.set('key', 'value');

//map1.forEach((value, key)=>{
//    console.log(key, value);
//})

console.log([...map1.keys()])

 console.log(Map);

//
const user1 = {name: 'jack'}
const user2 = {name: 'mary'}

 const secretKey1 = 'asldjfalskdjf';
 const secretKey2 = 'alkswenrewb';

const secretKeyMap= new Map([
    [user1, secretKey1],
    [user2, secretKey2]
])

console.log(secretKeyMap)

const key = secretKeyMap.get(user1)

console.log(key);

const user = {
    name: 'jack',
    verified: 'true'
}

const userMap = new Map ([
    ['name', 'jack'],
    ['verified', true]
])

console.log(userMap.size)

// Challenge: 
// 1. Take the object (contains a favourite place in Brighton, UK), and turn it into a Map
// 2. Add a boolean property 'visited', to indicate places that you've been to it
// 3. Add an integer property 'averageBill' with how much you spend there on average
// 4. Fetch one of the properties using the get() method

const favouritePlace = {
    music: "jazz",
    name: "Paris House",
    visited: false,
    averageBill: 15
};

const faveMap = new Map ([
    ['music', 'jazz'],
    ['name', 'Paris House'],
    ['visited', false],
    ['averageBill', 15]
])

console.log(faveMap.get('averageBill'))