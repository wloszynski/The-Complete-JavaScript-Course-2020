'use strict';

const flight = 'LH234';
const adrian = {
  name: 'Adrian Wloszynski',
  passport: 2345435342343,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 2345435342343) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, adrian);
// console.log(flight);
// console.log(adrian);

const newPassport = function (person) {
  person.passport = 111111111111111;
};

// newPassport(adrian);
// console.log(adrian);
// checkIn(flight, adrian);
// console.log(flight);
// console.log(adrian);
