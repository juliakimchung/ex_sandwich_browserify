"use strict";
let meatPrices = {"salamiMeat": 0.55,
  "turkey": 0.75,
  "roastBeefMeat": 0.80,
  "hamMeat": 0.90};

let addMeat = (topping) => {
    return meatPrices[topping];
  };
module.exports = {addMeat};
  


