"use strict";
let getTotalPrice = require("./sandwichCalc"),
 addTopping = require("./sandwichCalc"),
 getToppingList = require("./sandwichCalc"),
 addToppingList = require("./sandwichCalc"),

 addCheese = require("./cheese"),
 addBread = require("./bread"),
 addMeat = require("./meat"),
 addVeggies = require("./veggies"),
 addCondiments = require("./condiments");


let sandwichMaker = {
  getTotalPrice, addTopping, getToppingList, addToppingList, addCheese, addBread, addMeat, addVeggies, addCondiments
};

module.exports = {sandwichMaker};