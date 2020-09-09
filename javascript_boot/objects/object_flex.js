const obj = {
    one: 1, 
    two:2
}

for (key in obj){
    console.log(`key`, obj[key])
}

// object.keys()
//object.values()
//object.entries()

const user = {
    name: `jack`,
    age: 29
}

const users = {
    '214577':{
    name: `jack`,
    age: 29
    },
    '4354098':{
    name: `jack`,
    age: 30
    },
    '4343546':{
        name: `Kat`,
        age: 24
        },
} 

console.log(Object.keys(user));

console.log(Object.entries(user))

console.log(Object.entries(users).reduce((acc, [id, user])=> {
    if(user.age>20){
        acc.push({...user, id})
    }
    return acc;
}, [])); // map and filter can both be implemented with reduce

/*
const ageExists = Object.keys(user).includes('age');
console.log(ageExists);

const values = Object.keys(user).map(key => user[key]);
console.log(values)
*/

console.log(Object.values(user));
const monthlyExpenses ={
    food: 400,
    rent: 1200,
    insurance: 80,
    internet: 70,
    phone: 80
}

const montlyTotal = Object.values(monthlyExpenses).reduce(
    (acc, expense) => acc+ expense, 0
);
//all vlaues of a given object use object.values

console.log(montlyTotal);