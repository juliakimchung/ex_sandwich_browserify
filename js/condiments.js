"use strict";
let condimentPrices = {"ketchup": 0.50,
  "mustard": 0.50,
  "vinigarett": 0.80};

let addCondiments = (topping) => {
    console.log("condimentPrices", condimentPrices[topping] );
    return condimentPrices[topping];
  };

  module.exports = {addCondiments};