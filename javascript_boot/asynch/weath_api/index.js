// API - application programing interface: software to communicate with other software
//example window object
//API - helpful service
//REST API
//window.navigator.geolocation

//crud how data is used in common applications create(POST) -> read(Get) -> update(PUT, Patch require data to be called) -> delete(require data to be present to run)

//http://jsonplaceholder.typicode.com/posts REST API example 
//JSON data = JavaScript Object Notation
//fetch(url) - api endpoint url
//jsonplaceholder.typecode.com

//GET /posts/1 -single blogpost
// POST /posts
const blogPost ={
    title: 'cool post',
    body: 'lorem ipsum saeew;',
    userId: 1
} // normal javascript object - convert it into json

fetch(`https://jsonplaceholder.typicode.com/post/1`), {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(blogPost)
}
    .then(response => {
        if(!response.ok){
            throw new Error(response.status);
        }
    }) // method returns a promise
    .then(data => console.log(data.title))
    .catch(error => console.error(error))
    // https://github.com/public-apis/public-apis