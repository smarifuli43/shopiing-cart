updateTotal();
// product update function
function updateProduct(inputId, price, isIncreaing) {
  const productInput = document.getElementById(inputId + '-number');
  let productQuantity = parseInt( productInput.value);
  if (isIncreaing) {
    productQuantity = productQuantity + 1;
  } else if (productQuantity > 0) {
    productQuantity = productQuantity - 1;
  }
  productInput.value = productQuantity;
  const productPrice = document.getElementById(inputId + '-total');
  productPrice.innerText = productQuantity * price;
  updateTotal();
}
function getProductQuantity(inputId) {
  const productQuantity = document.getElementById(inputId + '-number').value;
  return productQuantity
}
// total price
function updateTotal() {
  const subTotal = getProductQuantity('phone') * 1220 + getProductQuantity('case') * 59;
  const tax = subTotal * 0.1;
  const total = subTotal + tax;
  document.getElementById('sub-total').innerText = subTotal;
  document.getElementById('tax-amount').innerText = tax.toFixed(2);
  document.getElementById('total-price').innerText = total.toFixed(2);
}

// phone event handler
document.getElementById('phone-plus').addEventListener('click', function () {
  updateProduct('phone', 1220, true);
});
document.getElementById('phone-minus').addEventListener('click', function () {
  updateProduct('phone', 1220, false);
});
// case event handler
document.getElementById('case-plus').addEventListener('click', function () {
  updateProduct('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function () {
  updateProduct('case', 59, false);
});
