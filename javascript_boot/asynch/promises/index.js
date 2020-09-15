//callback -> promises

//promises give us controll
//states of a promise - once its created it has a value of pending
//pending
//fufilled
//rejected

/*
const promise = new Promise((resolve, reject)=> {
    setTimeout(() => resolve(`done`), 1000);
});

console.log(promise.then().catch())

promise
    .then(value=> console.log(value))
    .catch(() => console.log(`failure`))
    .finally(() => console.log(`done`))
    */


const promise = new Promise((resolve, reject) =>{
    navigator.geolocation.getCurrentPosition(position => {
    console.log(position)
}, error => {
    reject(error);
    })
})

promise
    .then(position => console.log(position))
    .catch(error => console.error(error))
    .finally(() => console.log(`done`));

    // setTimeout pause works as a set timeout pause but is a promise

