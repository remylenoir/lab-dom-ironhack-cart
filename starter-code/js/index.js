function deleteItem(e) {}

function getPriceByProduct() {
  let unitPriceArray = [];

  document.querySelectorAll(".unit-price").forEach(price => {
    unitPriceArray.push(price.innerText.replace(/[^0-9]/, ""));
  });
  console.log("TCL: getPriceByProduct -> unitPriceArray", unitPriceArray);
  return unitPriceArray;
}

function createQuantityInput() {
  let quantityArray = [];
  document.querySelectorAll(".unit-input input").forEach(quantity => {
    quantityArray.push(quantity.value);
  });
  console.log("TCL: createQuantityInput -> quantity", quantityArray);
  return quantityArray;
}

function updatePriceByProduct(productPrice, index) {
  let updatedPriceArray = [];

  document.querySelectorAll(".total-price").forEach(updatedPrice => {
    updatedPriceArray.push(updatedPrice.innerText.replace(/[^0-9]/, ""));
  });
  console.log("TCL: updatePriceByProduct -> updatedPriceArray", updatedPriceArray);
  return updatedPriceArray;
}

function getTotalPrice() {
  let totalPrice = 0;
  getPriceByProduct();
  createQuantityInput();
  updatePriceByProduct();
}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {}

window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  calculatePriceButton.addEventListener("click", evt => {
    getTotalPrice();
  });
  // var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  // calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
