import productData from '../shared/products.json'

class ProductManger {
   GetProducts(category) {
      var products = productData;
      return productData;
   };

   GetProduct(productId) {
      var product = productData.filter(prd => prd.id == productId);
      return product[0];
   };
}
export default ProductManger;