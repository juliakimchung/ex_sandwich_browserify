"use strict";

let sandwichMaker = require("./sandwichAll");
console.log("sandwichMaker",sandwichMaker );
function topping() {

console.log("target id", event.target.id);
 if (event.target.id === event.currentTarget.id) {
  throw event.currentTarget;
 }  else {

  let currentTargetId = event.currentTarget.id;
   console.log("event.currentTarget.id", event.currentTarget.id );
   console.log("price of this item:", sandwichMaker[currentTargetId]);

  let itemPrice = sandwichMaker[currentTargetId](event.target.id);

    sandwichMaker.addToppingPrice(itemPrice);
}
    console.log("Total Price:", sandwichMaker.getTotalPrice());
 
    sandwichMaker.addToppingList(event.target.value);

    console.log("toppinglist", sandwichMaker.getToppingList());

  let totalPriceDOM = document.getElementById("totalPrice");
  totalPriceDOM.innerHTML = `<p>Total Price: $ ${sandwichMaker.getTotalPrice().toFixed(2)}</p>
  <p>${sandwichMaker.getToppingList()}</p>`;

}

  let meatChoices = document.getElementById("addMeat");

  meatChoices.addEventListener("click", topping);

  let veggieChoices = document.getElementById("addVeggies");

  veggieChoices.addEventListener("click", topping);

  let cheeseChoices = document.getElementById("addCheese");

  cheeseChoices.addEventListener("click", topping);

  let breadChoices = document.getElementById("addBread");

  breadChoices.addEventListener("click", topping);

  let condimentChoices = document.getElementById("addCondiments");

  condimentChoices.addEventListener("click", topping);

