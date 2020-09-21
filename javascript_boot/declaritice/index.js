//declaritve -  code for people

// imperative - code for a computer

//imparitive example
const people = ['dougie', 'freddy', 'jane'];
const invitations = [];

for(let x = 0; x < people.length; x++){
    invitations[x] = `Hi ${people[x]}, come to my party!`
}

console.log(invitations);

const peoples = ['Geoff', 'Kat', 'Step'];
const inivitation = peoples.map(person=> `Hi ${person}, come to my party`);

console.log(inivitation);