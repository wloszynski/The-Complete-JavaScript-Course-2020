"use strict";

const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log("B737"[0]);

console.log(airline.indexOf("A"));
console.log(airline.lastIndexOf("A"));
console.log(airline.indexOf("Portugal"));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const c = seat.slice(-1);
  //   console.log(c);
  if (c === "B" || c === "E") {
    return true;
  }
  return false;
};

console.log(checkMiddleSeat("11B"));
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(airline.toLowerCase());

// Fix capitalization in name
const passenger = "aDRiaN";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = "hello@adrian.io";
const loginEmail = "    Hello@Adrian.IO \n";

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(email === normalizedEmail);

// Replacing
const priceGB = "288,97PLN";
const priceUS = priceGB.replace("PLN", "$").replace(",", ".");
console.log(priceUS);

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";

console.log(announcement.replaceAll("door", "gate"));

console.log(announcement.replace(/door/g, "gate"));

// Booleans
const plane2 = "Airbus A320neo";
console.log(plane2.includes("A320"));
console.log(plane2.startsWith("Air"));
console.log(plane2.startsWith("Airbus"));
console.log(plane2.startsWith("Aib"));

if (plane2.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the NEW Airbus family");
}

// Practice exercice
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are not allowed on board");
  } else {
    console.log("Welcome aboard");
  }
};
checkBaggage("I have a laptop, some Food and a Pocket knife");
checkBaggage("I have a laptop");

console.log("a+very+nice+string".split("+"));

const [firstName, lastName] = "Adrian Wloszynski".split(" ");
console.log(firstName, lastName);

console.log(["Mr.", firstName, lastName.toUpperCase()].join(" "));

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
    // namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper);
};

const passenger2 = "jessica ann smith davis";
capitalizeName(passenger2);

// Padding
const message = "Go to gate 23!";
console.log(message.padStart(20, "+").padEnd(30, "+"));

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(124356534213536532));
console.log(maskCreditCard("124356534213536532"));

// Repeat
const message2 = "Bad weather... All Departures Delayed... ";
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line`);
};

planesInLine(4);
