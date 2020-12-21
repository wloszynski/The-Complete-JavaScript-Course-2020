"use strict";

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const inputValue = document.querySelector("textarea").value.split("\n");
  for (const inp of inputValue) {
    const [inpSplit1, inpSplit2] = inp.toLowerCase().split("_");

    console.log(
      inpSplit1 + inpSplit2.replace(inpSplit2[0], inpSplit2[0].toUpperCase())
    );
  }
});
