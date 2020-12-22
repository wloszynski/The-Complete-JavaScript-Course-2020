"use strict";

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    let answer = Number(
      prompt(`${this.question} \n${this.options.join("\n")}`)
    );
    if (answer && answer >= 0 && answer <= 3) {
      this.answers[answer] += 1;
    } else {
      alert("Wrong input");
    }
    this.displayResults();
    this.displayResults("string");
  },
  displayResults(type = "array", answersArray = this.answers) {
    if (type === "array") {
      console.log(answersArray);
    } else if (type === "string") {
      console.log(`Poll results are ${answersArray.join(", ")}`);
    }
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

const data1 = [5, 2, 3];
const data2 = [1, 5, 3, 9, 6, 1];

poll.displayResults("string", data2);
// poll.displayResults.call({answers: [5, 2, 3]});
