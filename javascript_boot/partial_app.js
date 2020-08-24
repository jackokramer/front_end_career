/*function handleLikePost(step){
    let likeCOunt = 0;
    return function addLike(){
        likeCOunt +=step;
        return likeCOunt
    }
}

const doubleLike = handleLikePost(2);

console.log(doubleLike(4))
console.log(doubleLike(4))
console.log(doubleLike(4))
*/

const getData = baseUrl =>  route => callback =>
            fetch(`${baseURL}${route}`)
                .then(response=> response.json())
                .then(data=> callback(data));


const getSocialData = getData('https://jsonplaceholder.typicode.com', '/posts')
const getSocialPosts = getSocialData('/posts');
const getSocialMediaComments = getSocialData('/comments');

getSocialPosts(posts =>{
    posts.forEach(posts=> console.log(post.title));
})