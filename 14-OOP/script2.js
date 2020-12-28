"use strict";

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  //   this.calcAge = function(){
  //       console.log(2020 - this.birthYear)
  //   }
};

const adrian = new Person("Adrian", 2000);
console.log(adrian);
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person("Matilda", 1999);
console.log(matilda);
console.log(matilda instanceof Person);

// Prototypes
Person.prototype.calcAge = function () {
  console.log(2020 - this.birthYear);
};
console.log(Person.prototype);

adrian.calcAge();

console.log(adrian.__proto__);

console.log(Person.prototype.isPrototypeOf(adrian));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = "Homo Sapiens";
console.log(adrian.hasOwnProperty("firstName"));
console.log(adrian.hasOwnProperty("species"));

console.log(adrian.__proto__);
console.log(adrian.__proto__.__proto__);
console.log(adrian.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [1, 2, 3, 1, 1, 2];
console.log(arr.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
