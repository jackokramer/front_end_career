//prototypical inheritance - each instance object (from the constructor function) inherts from prototype

// every object has prototype


console.log(Object.getPrototypeOf({}).constructor)

console.log(new Object());

function Student(id, name, subjects = []) {
    this.id = id;
    this.name = name;
    this.subjects = subjects;
  }
  
const student1 = new Student(1, 'Jack'); // prototypes leave a chain bck to the original type

console.log(Object.getPrototypeOf(student1).constructor)// true

console.log(student1.__proto__.__proto__ === Object.prototype)//true

console.log(student1.__proto__.__proto__.__proto__) // null