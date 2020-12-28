"use strict";

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

class Account {
  // Public fields (instances)
  locale = navigator.language;

  // Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // Protected property

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface
  // 3) Public methods

  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
    return this;
  }

  static helper() {
    console.log("Helper");
  }

  // 4) Private methods
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);
acc1.requestLoan("20");
// console.log(acc1.#movements);
console.log(acc1.getMovements());
// console.log(requestLoan(12));
Account.helper();

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(500);

console.log(acc1.getMovements());
