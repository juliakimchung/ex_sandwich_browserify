"use strict";
console.log("cheese.js is loaded");
// Private variable to store the different meat prices
let cheesePrices = {"blueCheese": 0.59,
  "swissCheese": 0.76,
  "cheddarCheese": 0.80};

let addCheese = (topping) => {

    console.log("cheesePrices[topping]", cheesePrices[topping]);
    return cheesePrices[topping];
  };

 module.exports = {addCheese};