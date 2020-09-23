import RouterHandler from './router.js';

window.onhashchange = () => {
    setActiveLink();
}

function setActiveLink(){
    document.querySelectorAll('.header-link');
    links.forEach(link => {
        const linkPath = link.getAttribute('href');
        const currentPath = window.location.hash;
        if(currentPath === linkPath){
            link.classList.add('active');
        }else {
            link.classList.remove('active')
        }
    })
}

class App{
    constructor(){
        new RouterHandler();
    }
}

//use a router to link around your app

new App();