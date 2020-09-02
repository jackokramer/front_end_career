const user = {
    name: '',
    username: '',
    phoneNumber: '',
    email: '',
    password: ''
}

const newUser = {
    username: 'jackokramer',
    email: 'reeeder@gmail.com',
    password: 'myp$$word'
}


//const verifiedDefault = {
//    verified: false;
//}

const createdUser = { ...user, ...newUser, verified: false}; // makes sure to include updated values

console.log(createdUser)

//console.log(Object.assign({}, user, newUser, {verified: false}));//allows you to update an object with properties from another object.
//console.log(user);