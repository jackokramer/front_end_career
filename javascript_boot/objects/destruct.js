const user ={
    name: 'Jack',
    username: 'Jackkramer',
    email: 'jackramer@yahoo.com',
    details: {
        title: 'developer'
    }
};

//const {username, email} = user; 
const{title} =user.details

const { name, details: {title} } = user;

function displayUserBio({name, details:{title}}){
    console.log(`${name} is a ${title}`);
}

displayUserBio(user)

/*
function displayUser() {
    console.log(`username: ${user.username}, email ${email}`);
}

displayUser()
*/