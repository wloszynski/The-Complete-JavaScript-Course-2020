'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  }
};

const arr = [2, 3, 4];
let a = arr[0];
let b = arr[1];
let c = arr[2];

const [x, y, z] = arr;

console.log(x, y, z)
console.log(arr);

// const [first, second] = restaurant.categories;
// console.log(first, second)

const [first, , third] = restaurant.categories;
console.log(first, third);

[a, b] = [b, a];
console.log(a, b);

const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p=1, q=1, r=1] = [8, 9];
console.log(p, q , r);