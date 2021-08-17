// ITERATION 1

function updateSubtotal(product) {
  //creating variables
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input');
  const subprice = price * quantity.value;
  // console.log(price); 
  // console.log(quantity.value);         <= some variable outputs testing
  // console.log(subprice);

  //changing the value of subtotal and returning subtotal price
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = subprice;
  return subprice;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');                        
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //creating variables
  const allProducts = document.getElementsByClassName('product');
  const allProductsArray = [...allProducts];

  //calculating total
  let total = 0;
  allProductsArray.forEach((product) => {
    total += updateSubtotal(product);
  });
  //... your code goes here

  // ITERATION 3
  //assigning total to html element
  document.querySelector('#total-value span').innerText = total;
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
