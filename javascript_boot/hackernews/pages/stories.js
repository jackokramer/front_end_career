import Story from '../components/Story.js';
import view from '../utils/views.js';
import checkFavorite from '../utils/checkfav.js';
import baseUrl from '../utils/baseUrl.js';
import store from '../store.js';

export default function Stories(path){
    const {favorites} = store.getState();
    const stories = await getStories();
    const hasStories = stories.length > 0;

    view.innerHTML =`<div> ${hasStories ? stories.map((story, i) => Story({...story, index: i+1, isFavorite: checkFavorite(favorites, story)})).join(''): 'No Stories'}
    </div>`;
    document.querySelector('.favorite').forEach(favoriteBUtton =>{
        favoriteBUtton.addEventListner('click', async function (){
           const story = JSON.parse(this.dataset.story);
           const isFavorited = checkFavorite(favorites, story);
               store.dispatch({type: isFavorited ? "REMOVE FAVORITE": 'ADD_FAVORITE', payload: {favorite:story} })
           await Stories(path);
        })
    })
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