import productData from '../shared/products.json'

class CartManger {
   GetCartItems(userId) {      
      var items = productData.slice(1, 3); 
      return items;
   };

}
export default CartManger;