function showAllProducts(products) {
  products.forEach(product => {
    newProductCard(product);
  });
}

function getFilteredProducts(productNames, query) {
  const filteredProducts = productNames.filter(productName => productName.toLowerCase().includes(query.toLowerCase()));
  return filteredProducts;
}

function getConvertedPrices(productPrices, currency) {
  const conversionRates = {
    usd: 1, 
    gbp: 0.73,
    jpy: 114.57
  };
  const convertedPrices = productPrices.map(price => (price * conversionRates[currency]).toFixed(2));
  return convertedPrices;
}

function getCartTotal(cartPrices) {
  const cartTotal = cartPrices.reduce((total, price) => total + price, 0);
  return cartTotal.toFixed(2);
}

showAllProducts(PRODUCTS);
