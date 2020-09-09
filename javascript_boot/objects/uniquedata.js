const customerDishes = [
    'Chicken Wings',
    'Fish Sandwiches',
    'Beef Strognoff',
    'Grilled Cheese',
    'Chicken Wings',
    'Chicken Pot Pie'
]

const uniqueDishes = [...new Set(customerDishes)];

console.log(uniqueDishes)

// set where each value in it can be used once. Will flag things once
const numbers = new Set([[0],[1],[2]].size);

//arrays are object types/reference types making them unique

for(const num of numbers){
    console.log(num);
}

//spread operator, converting operators into arrays