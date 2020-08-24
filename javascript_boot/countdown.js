// Challenge: Write a countdown function with a hard-coded starting number inside closure
// Stretch goal: Write a countdown function that can count from a provided number,
// with a provided step

// Start
/*function countdown(num) {
    // write your code here
    let num = 0;
    for(let x = num; x>0; x--){
        return x
    }
  }
  */

function countdown(startingNum, step){
    let countFromNum= startingNum + step;
    return function decrease(){
        countFromNum -= step;
        return countFromNum;
    }
}


const countingDown = countdown(20, 5);
  
console.log(countingDown());
console.log(countingDown());
console.log(countingDown());
  