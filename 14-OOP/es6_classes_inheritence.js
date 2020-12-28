"use strict";

"use strict";

// class expression
// const Person = class {};

// class declaration
class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2020 - this.birthYear);
  }

  get age() {
    return 2020 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log("hey");
    console.log(this);
  }
}

Person.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

// 1. Classes are NOT hoisted
// 2. Class are first-class citizens
// 3. Classes are executed in strict mode

const account = {
  owner: "Adrian",
  movements: [200, 2000, 3000],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

const PersonProto = {
  calcAge() {
    console.log(2020 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

class Student extends Person {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(`I'm ${2037 - this.birthYear} years old`);
  }
}

// const martha = new Student("Martha Jones", 2012);
const martha = new Student("Martha Jones", 2012, "Computer Science");
martha.introduce();
martha.calcAge();
