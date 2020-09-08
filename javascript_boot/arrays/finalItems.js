const finalItems= [
    'American Cheeseburger',
    'Southern Fried Chicken',
    `Glazed Salmon`
]

const [winner, ...losers] = finalItems;

console.log({winner, losers});

const [first, second, third] = finalItems;
//console.log(`before`, {first})
//[second, first] = [first, second];
//* 
//let first = finalItems[0];
//let second = finalItems[1];
//let third = finalItems[2];

console.log({first}, {second}, {third})
console.log(finalItems);


// Challenge: 
// In our restaurant, the chef has some favourite dishes in two different categories.
// The chef loves all dishes that start with "S", while the rest are regular dishes
// Use array destructoring to create arrays of the chefs favourite dishes of meat and
// fish, and to create arrays of the regular meat and fish dishes

const fishDishes = ['Salmon Rillettes', 'Grilled Tuna Provencal', 'Fish and Chips']
const meatDishes = ['Lasagna', 'Spaghetti', 'Satay Chicken Skewers']

// Modify these four variables first
let [chefsFishDishes, ...regularFishDishes] = fishDishes

let [regularMeatDishes,...chefsMeatDishes] = meatDishes

console.log(chefsFishDishes)
console.log(regularFishDishes)
console.log(chefsMeatDishes)
console.log(regularMeatDishes)


// Finally, use the spread operator to create these two arrays as well
let chefsDishes = [...chefsMeatDishes, ...chefsFishDishes]
let regularDishes = [...regularFishDishes, regularMeatDishes]

console.log(chefsDishes);
console.log(regularDishes);