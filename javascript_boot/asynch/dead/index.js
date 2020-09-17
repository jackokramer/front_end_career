//
/*
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => console.log(data));
*/

async function getPost(){
    const responses = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await responses.json();
    console.log(data)

}

getPost();


async function getBlogPost(){
   const promise =  new Promise((resolve, reject) =>{
        setTimeout(() => resolve(`blog post`), 1000);
    })
const result =  await promise 
console.log(result);
console.log(`done`);
//        .then(value => console.log(value))
//        .finally(() => console.log(`done`));
}

getBlogPost()
