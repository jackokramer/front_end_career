/*const student1 = {
    id: 1,
    name: 'Jack',
    subjects: [],
    addSubject(subject){
        this.subjects = [...this.subjects, subject];
    }
}
*/
//constructor function - represents the data not the function like we did before
function Student(id, name, subjects= []) {
    this.id = id;
    this.name = name;
    this.subjects = subjects
    return this
}

Student.prototype.addSubject = function(newSubject){
    this.subjects = [...this.subjects, newSubject]; //error message here saying subjects is not irritable
}

const student1 = new Student(1, 'Jack')
const student3 = new Student(3, 'Maria')


console.log(new Student(1, 'Jack')) // need to use new
student1.addSubject(`Math`);
student1.addSubject(`Science`);
student3.addSubject(`Spanish`);
console.log(student1.subjects);

const student2 = new Student(2, 'Jess')
student2.addSubject('Art');



console.log(student2)