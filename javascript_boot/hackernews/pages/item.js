
import Story from '../components/Story.js'
import Comment from '../components/Comment.js'
import baseUrl from '../utils/baseUrl.js';
import view from '../utils/views.js'

export default function Item(){
    let story = null;
    let hasComments = false;
    let hasError = false;
    try {
        const story = await getStory();
    } catch(error){
        hasError = true
        console.error(error);
    const hasComments = story.comments.length > 0;
    }

    if(hasError){
        view.innerHTML = `<div class='error'> Error fetching story</div>`;
    }
    view.innerHTML = `<div> 
        ${Story(story)}
    </div>
    <hr/>
    ${hasComments ? story.comments.map(comment => Comment(comment)).join(''): 'No comments'}
    `

}

function getStory(){
    const storyId = window.location.hash.split('?id=')[1];
    //console.log(storyId);
    const respose = await fetch(`${baseUrl}${storyId}`)
    const story = await respose.json();
    return story;
}