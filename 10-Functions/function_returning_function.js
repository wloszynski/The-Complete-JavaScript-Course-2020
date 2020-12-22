'use strict';

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

const greeterHey = greet('Hey');
greeterHey('Adrian');

greet('Hello')('Adrian');
greetArrow('Hello')('Adrian');
