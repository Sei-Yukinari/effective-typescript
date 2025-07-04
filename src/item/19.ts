function fetchProduct(productId: string) {
  return productId;
}

function fetchProductBySerialNumber(productId: number) {
  return productId;
}

let productId: string | number = '12-34-56';
fetchProduct(productId);

productId = 123456;
fetchProductBySerialNumber(productId);
