//protoptype chain and how it works

// classes == constructor functions

//function Student(){}
class Student{
    constructor(id, name, subjects=[]){
        this.id = id;
        this.name = name;
        this.subjects = subjects;
    }
    getStudentName(){
        return `student: ${this.name}`
    }
    addSubjects(){}
}

const student1 = new Student(1,'jack')
console.log(student1);

console.log(Student.prototype.addSubjects)

console.log(typeof class Student{});

console.log(student1.getStudentName())