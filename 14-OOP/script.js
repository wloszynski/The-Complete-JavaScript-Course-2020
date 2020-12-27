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

const jessica = new Person("Jessica Davis", 1998);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

Person.hey();

Person.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

jessica.greet();
jessica.fullName = "tim tam";
console.log(jessica.fullName);

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

console.log(account.latest);

account.latest = 50;
