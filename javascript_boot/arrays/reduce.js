const numbers = [1,2,3,4,5,6];

const doubleNumbers = numbers.reduce((acc, num)=> {
    acc.push(num * 2);
    return acc;
}, []);

// or write it out like this
//const doubleNums = numbers.map(num=> num *2); //shorthand example

console.log(`doubled numbers`, doubleNumbers);
console.log(`numbers`, numbers)

const greatNums = numbers.reduce((acc, num)=> {
    if(num>3){
        acc.push(num);
    }

    return acc;
}, []);

//less steps use filter see example below

//const greatNums = numbers.filter(num => num>3);
console.log(greatNums);

// every array methods can be created woth reduce