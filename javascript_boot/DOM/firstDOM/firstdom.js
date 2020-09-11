// html -> css, DOM - Dociment Object Model;
//console.log(document.body);

//const p = document.createElement('p');
//p.innerText = `We're here`
//document.body.append(p);

//document.body.style.background = 'paleogoldenrod';
//p.style.color = `#05f`;

//p.addEventListener(`click`, ()=> console.log('clicked'))

//const el = document.getElementById(`home`)
// elments should only have unique id values
//console.log(el);

/*
const links = document.querySelectorAll(`a`);
//console.log(links);

links.forEach(link => {
    if(link.matches('a[href="/login]')){
        const loginInLink = link;
        console.log(loginInLink)
    }
})

const divs = document.getElementsByTagName('div')
console.log(div)
*/

const newPost = document.createElement('div');
newPost.className = 'top-post';
newPost.innerHTML = "<strong> this is a new post </strong>"

//document.body.prepend(newPost);
const post = document.querySelector('.post');

post.prepend(newPost);