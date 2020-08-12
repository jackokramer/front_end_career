// if statements - evlaute boolean values
// befind the scenes else if is the same as an else statement

//const prefersDarkMode = false;
//const prefersSolarizedMode = true;

const colorMode = 'dark';

//create comparison operators to make this work now
// easier to do with a switch statement

switch (colorMode){
    case 'solarized':
        console.log(`solarized mode set!`);
        document.body.style.background = 'palegoldenrod';
    case 'dark':
        console.log(`dark shark set`);
        document.body.style.background = 'black';
        // include break once this case is met so it doesn't run everything
        break;
    default:
        console.log(`light mode set!`);
        document.body.style.background = `ghostwhite`;
}
/*
if(colorMode === 'dark'){
    console.log(`activate dark mode`);
    document.body.style.background = 'black';
} else if(colorMode === 'solarized'){
    console.log(`solarized Set color`);
    document.body.style.background = 'paleogoldenrod';
}else{
    console.log(`light mode set`);
    document.body.style.background ='ghostwhite';
}

console.log(`light mode set`);
document.body.style.background = `ghostwhite`
**/

// Challenge 1: create a conditional that logs out "Good morning!", "Good evening!" and so on depending on the value of time (<- a variable)

const isMorning = true;
const isAfternoon = false;

if(isMorning){
    console.log(`Good Morning`)
} else if(isAfternoon){
    console.log(`Good Afternoon`)
} else{
    console.log(`good evening`)
}

// Challenge 2: Rewrite the whole thing as a switch statement

switch(time){
    case 'morning':
        console.log(`morning`)
        break
    case 'afternoon':
        console.log(`afternoon`)
        break
    default:
        console.log(`good evening`)
}

const time = "morning" // could be "afternoon", "evening" and "night"
