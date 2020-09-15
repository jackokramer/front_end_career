/*
const post = docment.querySelectorAll('post');
post.forEach(post =>{
    post.addEventListner('click', event =>{
    //console.log(event.target);// target creates the most interesting piece of informationfrom the function
    console.log('do you ant to edit the post')
    });
})
*/

document.body.addEventListener('click', event =>{
    if(!event.target.closest('.post')) return;
    console.log(`Do you want to edit this post`)
}) // short hand notation of the code above


//mouse over allows you to check a certain area
// mouse out 
//key up taps on the keyboard gets an event

//key down and key press