const temperatures = [{degrees: 69, isRecordTemp: false}, 
        {degrees:82, isRecordTemp: true}, 
        {degrees:73, isRecordTemp: false}, 
        {degrees:42, isRecordTemp: false}
    ]; // is record temp cannot use include here, instead use some

//console.log(temperatures.indexOf(50)> -1); clunky example

const result =temperatures.some(temperature => temperature.isRecordTemp===false);//true / false
console.log(result);

//console.log(temperatures.includes(50));


// -1 means it couldn't find the value and therefore it doesn't exist

const results = temperatures.every(temperature => !temperature.isRecordTemp); // true / false


// Challenge:
// Here's a list of 5 most popular songs on Spotify.
// 1) Check if any song has won a Grammy
// 2) Check if all the songs were streamed for at least 1.5 million times
// Note: the timesStreamed value is already in million

const songs = [
    {song: "Shape of You", timesStreamed: 2.384, wonGrammy: true},
    {song: "One Dance", timesStreamed: 1.791, wonGrammy: false},
    {song: "Rockstar", timesStreamed: 1.781	, wonGrammy: false},
    {song: "Closer", timesStreamed: 1.688, wonGrammy: false},
    {song: "Thinking Out Loud", timesStreamed: 1.461, wonGrammy: true}
]

const wonAGrammy = songs.some(song=> song.wonGrammy);

console.log(wonAGrammy)

const allMegahits = songs.every(song => song.timesStreamed > 1.5);
console.log(allMegahits);

//every goes through every array element we give it

const newTemps = temperatures.map(temperature =>
    temperature.degrees > 70 ? {...temperature.isHigh = true}: temperature
);

//foreach doesn't create new arrays

console.log(newTemps);

newTemps.forEach(temperature =>{
    if(temperature.isHigh){
        console.log(`temperature ${temperature.degrees} was a record high last week`)
    }
})