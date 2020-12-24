"use strict";

console.log(23 === 23.0);

// Base 10 - 0 to 9.1/10 = 0.1 3/10 = 3.333333
// Binary base 2 - 0 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// Conversion
console.log(Number("23"));
console.log(typeof +"23");

// Parsing
console.log(Number.parseInt("30px", 10));
console.log(Number.parseInt("30px", 16));
console.log(Number.parseInt("px30"));

console.log(Number.parseInt("2.5rem"));
console.log(Number.parseFloat("2.5rem"));

// Check of value is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN("2"));
console.log(Number.isNaN(+"20X"));
console.log(Number.isNaN(23 / 0));

// Checking if value is number
console.log(Number.isFinite(20));
console.log(Number.isFinite("20"));
console.log(Number.isFinite(23 / 0));

// Checking if value is integer
console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));

console.log(Math.sqrt(4));
console.log(4 ** (1 / 2));

console.log(Math.max(5, 18, 24));
console.log(Math.max(5, 18, "24"));
console.log(Math.max(5, 18, "24px"));

console.log(Math.PI);

console.log(Math.random());

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1 + min);
// 0...1 -> 0...(max-min) -> min...max
console.log(randomInt(10, 20));

// Rounding integers
// Cut the ,... part
console.log(Math.trunc(Math.PI));
// Rounding to the closest number
console.log(Math.round(Math.PI));
// Rounding up
console.log(Math.ceil(Math.PI));
// Rounding down
console.log(Math.floor(Math.PI));
