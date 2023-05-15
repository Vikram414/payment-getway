// Coffee: price_1N6uNSSBiYB20bNgrJK8KBFG
// Sunglasses: price_1N6uPGSBiYB20bNgT9oEFsaA
// Camera: price_1N6uRTSBiYB20bNgv09YU0LA

const productsArray = [
  {
    id: "price_1N6uNSSBiYB20bNgrJK8KBFG",
    title: "Coffee",
    price: 200.0,
  },
  {
    id: "price_1N6uPGSBiYB20bNgT9oEFsaA",
    title: "Sunglasses",
    price: 2000.0,
  },
  {
    id: "price_1N6uRTSBiYB20bNgv09YU0LA",
    title: "Camera",
    price: 50000.0,
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData == undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }

  return productData;
}

export { productsArray, getProductData };


// "test": "echo \"Error: no test specified\" && exit 1",