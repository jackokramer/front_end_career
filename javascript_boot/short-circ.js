const response = `reed`;
const isEmailVerfied = true;

let username;

if(response){
    if(isEmailVerfied){
        username = response
    }
} else {
    username = `guest`;
} // a little verbose

// logical operator

//const result = true|| false; // or operator will always pick up the truthy value even if there is a fasle operator
//console.log()

//const username = resposnse ? response : `guest`; // terinary example but

//const username = resposnse || `guest`;

const result  = true && false; // AND unlike OR will return a false value if mentioned in the expresion
console.log(result);

const email = isEmailVerfied && 'reed@gmail.com';
console.log(email);

console.log(username);


// important to note how operator presidence plays a factor here. becareful writing terninaries and short circuiting. also if you want a something called on first wrap it in parenthesis