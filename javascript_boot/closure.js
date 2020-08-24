//let likeCount = 0; //global variable can be changed anywhere in the file or app

function handleLikePost(){
    let likeCount = 0;
    return function addLike(){
        likeCount +=1;
        return likeCount;
    }
    //addLike()
    //console.log('like count:', likeCount)
}

const like = handleLikePost();

console.log(like());

//closures a  a property of javascript functions - no other data type in the language does
//  call functions in differnt scope than where the funtion ws ornally defined

//closures allow us to remember values