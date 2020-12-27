"use strict";

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  //   this.calcAge = function(){
  //       console.log(2037 - this.birthYear)
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
