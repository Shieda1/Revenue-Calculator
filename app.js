// https://www.omnicalculator.com/finance/revenue

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const totalrevenueRadio = document.getElementById('totalrevenueRadio');
const priceRadio = document.getElementById('priceRadio');
const quantityRadio = document.getElementById('quantityRadio');

let totalrevenue;
let price = v1;
let quantity = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

totalrevenueRadio.addEventListener('click', function() {
  variable1.textContent = 'Price';
  variable2.textContent = 'Quantity';
  price = v1;
  quantity = v2;
  result.textContent = '';
});

priceRadio.addEventListener('click', function() {
  variable1.textContent = 'Total revenue';
  variable2.textContent = 'Quantity';
  totalrevenue = v1;
  quantity = v2;
  result.textContent = '';
});

quantityRadio.addEventListener('click', function() {
  variable1.textContent = 'Total revenue';
  variable2.textContent = 'Price';
  totalrevenue = v1;
  price = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(totalrevenueRadio.checked)
    result.textContent = `Total revenue = ${computetotalrevenue().toFixed(2)}`;

  else if(priceRadio.checked)
    result.textContent = `Price = ${computeprice().toFixed(2)}`;

  else if(quantityRadio.checked)
    result.textContent = `Quantity = ${computequantity().toFixed(2)}`;
})

// calculation

function computetotalrevenue() {
  return Number(price.value) * Number(quantity.value);
}

function computeprice() {
  return Number(totalrevenue.value) / Number(quantity.value);
}

function computequantity() {
  return Number(totalrevenue.value) / Number(price.value);
}