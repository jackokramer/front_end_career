import getDate from './utils/date.js';

// Modules - allow us to share code between files
// still being able to share codes between files

class App{
    constructor(){
        this.render()
    }
    render(){
        document.getElementById('root').innerHTML = `
        <div>Date: ${getDate()}</div>`
    }
}

//import / export

//console.log(this);
//getDate() ;;;

new App()