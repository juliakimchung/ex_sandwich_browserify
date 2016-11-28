"use strict";

let breadPrices = {"whiteBread": 0.50,
	"wheatBread": 0.70,
	"multigrain": 0.90};

let addBread = (topping) => {
		return breadPrices[topping];
};

module.exports = {addBread};