"use strict";

let totalPrice = 0;

let toppingList = [];


let getTotalPrice = () => {
    return totalPrice;
};
  
let addToppingPrice = (toppingPrice) => {
      console.log("no topping", totalPrice);
      totalPrice += toppingPrice;
      console.log("add topping", totalPrice);
};
let getToppingList = () => {
    console.log(toppingList);
    return toppingList;
};
let addToppingList = (topping) => {
     return toppingList.push(topping);
};

module.exports = {getTotalPrice, addToppingList, addToppingPrice, getToppingList
};