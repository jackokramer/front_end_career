const numbers = [1,2,3,4,5];

for(let x = 0; numbers.length>x; x++){
    console.log(numbers[x])
}

/// aim to use the right tool for the job

// one that does the job better

numbers.forEach(number =>{
    console.log(number)
})