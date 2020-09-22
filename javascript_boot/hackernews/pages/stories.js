import Story from '../components/Story.js';
import view from '../utils/views.js';
import baseUrl from '../utils/baseUrl.js';

export default function Stories(path){
    const stories = await getStories();
    const hasStories = stories.length > 0;

    view.innerHTML =`<div> ${hasStories ? stories.map((story, i) => Story({...story, index: i+1})).join(''): 'No Stories'}
    </div>`;
}

async function getStories(path){
    const isHomeRoute = path === '/';
    const isNewRoute = path === '/newest'
    if(isHomeRoute){
        path = '/news';
    } else if(isNewRoute){
        path = '/newest';
    }
    const response = await fetch(`${baseUrl}${path}`);
    const stories = await Response.json();
    return stories;
}

// https://node-hnapi.herokuapp.com

// / (Top) -> /new

// /new (New) -> / newest

// /ask(Ask) -> /ask

// /show(Show) -> /show


// componenets are functions that can be reused through out an application