//geolocation avaliable on the wndow option

let cont = navigator.geolocation.getCurrentPosition(position =>{ //get current position takes some time and checks the call back function provided
    console.log(position);
    getResturaunts(position, resturaunts =>{
        console.log(resturaunts)
        console.log(`done`)
    }) // not good for many asynch callback function
})

//inversion of control problem

// setTimeout()
//eventListener = addEventListner()

let timeoutID;

function delayedAlert(){
    timeoutID = window.setTimeout(window.alert, 2*1000, `very slow responese`)
}

function clearAlert(){
    window.clearTimeout(timeoutID)
}

const title = document.querySelector(`h2`);
title.addEventListener('click', event =>{
    console.log(event.target.textContent)
})

