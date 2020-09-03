const temperatures =[
    {degrees: 71, isRecordTemp: false},
    {degrees: 43, isRecordTemp: false},
    {degrees: 91, isRecordTemp: false},
    {degrees: 101, isRecordTemp: true},
    {degrees: 64, isRecordTemp: false},
]

//const newTemps = temperatures.map(temperature => {
//    temperature.isHigh =true; // transforms the entire array of the exact same array without changing it
//    return temperature;
//})

const newTemps = temperatures.map(temperature =>
    temperature.degrees> 70 ? {...temperature, isHigh: true}: temperature);

newTemps.forEach(temperature =>{
    if(temperature.isHigh){
        console.log(`temperature ${temperature.degrees} was a record high last week!`)
    }
})
console.log(newTemps);

const restaurants = [
    {name: 'Stuft Pizza', milesAway: 28},
    {name: 'La Pasatria', milesAway: 32},
    {name: 'La Cabania', milesAway: 42},
    {name: 'Dany Coyles', milesAway: 1.2},
    {name: 'City Tavern', milesAway: 34},
    {name: 'Shake Shack', milesAway: 21}
]

const results = restaurants.filter(restaurant => restaurant.name.startsWith(`L`))

console.log(results);