"use strict";

// class expression
// const Person = class {};

// class declaration
class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2020 - this.birthYear);
  }
}

const jessica = new Person("Jessica", 1998);
console.log(jessica);
jessica.calcAge();

Person.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

jessica.greet();

// 1. Classes are NOT hoisted
// 2. Class are first-class citizens
// 3. Classes are executed in strict mode
