import productData from '../shared/products.json'
import Fuse from "fuse.js";

const fuseOptions = {   
    threshold: 0.2,
   keys: ["title","category"]
};
const fuse = new Fuse(productData, fuseOptions );


class ProductManger {

   GetProductsByCategory(category) {      
      const products = fuse.search(category);
      return products;
   }
   GetAllProducts() {    
      const list = productData.map((doc, idx) => ({
         item: doc,
         score: 1,
         refIndex: idx
       }))
      return list;
   }

   GetProductsByName(name) {
      const products = fuse.search(name);
      return products;
   }

   GetProduct(productId) {
      var product = productData.filter(prd => prd.id == productId);
      return product[0];
   }
}
export default ProductManger;