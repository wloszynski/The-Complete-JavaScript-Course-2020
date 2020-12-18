'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');


function calcAge(birthYear) {
    return 2020 - birthYear;
}

const calcAge2 = function (birthYear) {
    return 2020 - birthYear;
}

// Arrow function
const calcAge3 = birthYear => 2020 - birthYear;
const age3 = calcAge3(2000);
console.log(age3)

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2020 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`
}
console.log(yearsUntilRetirement(2000, 'Adrian'))

const tab = ['tim', 'to'];
tab[2] = 'toom';
console.log(tab[2])