// Challenge: Write a function splitBill() that lets you know how much 
// you need to pay to split any bill between you and your friends. 
// It should return a message with a number. 

// Write your code below:

//function splitBill(pers1, pers2){
//    let bill = pers1 +pers2
//    return bill
//}

//or 

function splitBill(amount, numberPeople){
    return `Each person needs to pay ${amount/ numberPeople}`
}

console.log(splitBill(1,2))

// Testing your solution
console.log(splitBill(10, 2))
console.log(splitBill(16, 4))
console.log(splitBill(350, 9))
