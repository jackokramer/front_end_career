const userData = {
    username: 'Jacko',
    title: 'Programmer',
    getBio:()=>{
        console.log(`user ${this.username} is a ${this.title}`) // don't have to look at the variable name
    },
    askToFriend(){
        //let that = this;// arrow functions work for the work around  and allows to jump into the scope above lexical this by the surrounding scope
        setTimeout(()=>{
            console.log(`would you like to add ${this.username}?`)
        }, 2000)
    }
}

userData.askToFriend();

//this keyword - value is determined dynamically and how its refernced
/**
 * Relieves us from a lot of tedious work
 * arrow functions are great to use for:
 * already have a context
 * want to use the function inside another function
 */