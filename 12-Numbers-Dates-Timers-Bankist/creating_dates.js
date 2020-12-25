"use strict";

// Create a date
const now = new Date();
console.log(now);

console.log(new Date("Dec 25 2020 10:01:24"));

// console.log(new Date(account1.movementsDates[0]));
console.log(new Date(2077, 10, 12));
console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMilliseconds());
console.log(future.getTime());

console.log(Date.now());

future.setFullYear(2040);
console.log(future);
