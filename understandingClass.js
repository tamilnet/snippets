//Class Declaration

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     console.log(`Hi, I'm ${this.name}`);
//   }
// }
// let person = new Person('Prabha');
// person.sayHi(); // Hi, I'm Prabha


//Class and inheritance

class Age {
  constructor(age) {
    this.age = age;
  }
  sayAge() {
    console.log(`My age is ${this.age}`);
  }
}
class Person extends Age {
  constructor(name, age) {
    super(age);
    this.name = name;
  }
  sayHi() {
    console.log(`Hi, I'm ${this.name}`);
  }
}
let person = new Person('Prabha', 25);
person.sayHi(); // Hi, I'm Prabha
person.sayAge(); // My age is 25