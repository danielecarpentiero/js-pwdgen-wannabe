"use strict";

const elementName = document.getElementById("name");
const elementSurname = document.getElementById("surname");
const elementFavColor = document.getElementById("favColor");
const elementFavNumber = document.getElementById("favNumber");

elementName.innerHTML = prompt("What's your name?");
elementSurname.innerHTML = prompt("What's your surname?");
elementFavColor.innerHTML = prompt("What's your favorite color?");
elementFavNumber.innerHTML = Math.floor(Math.random() * 50 + 1);

console.log(
  `${elementName}${elementSurname}${elementFavColor}${elementFavNumber}`
);
