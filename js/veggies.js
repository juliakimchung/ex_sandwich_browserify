"use strict";

let veggiePrices = {"tomato": 0.59,
"sprout": 0.76,
"red onions": 0.80,
"avocado": 0.90};

let addVeggies = (topping) => {
return veggiePrices[topping];
};

module.exports = {addVeggies};