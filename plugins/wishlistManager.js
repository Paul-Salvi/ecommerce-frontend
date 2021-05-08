import productData from '../shared/products.json'
import jsCookie from "js-cookie";

class WishlistManger {
   GetWishlistItems() {
      let items = [];

      if (jsCookie.get('wishlistItems')) {
         items = JSON.parse(jsCookie.get('wishlistItems'));
      }
      return items;
   };
   AddItemInWishlist(item) {
      let items = [];
      if (jsCookie.get('wishlistItems') == undefined) {
         items.push(item)
         jsCookie.set('wishlistItems', JSON.stringify(items))
      }
      else {
         items = JSON.parse(jsCookie.get('wishlistItems'));
         items.push(item)
         jsCookie.set('wishlistItems', JSON.stringify(items))
      }

   }
   removeItemFromWishlist(index) {
      if (jsCookie.get('wishlistItems')) {
         let items = JSON.parse(jsCookie.get('wishlistItems'));
         items.splice(index, 1);
         jsCookie.set('wishlistItems', JSON.stringify(items))
      }
   }
   moveToCart(index) {
      if (jsCookie.get('wishlistItems')) {
         let items = JSON.parse(jsCookie.get('wishlistItems'));
         let itemToBeRemoved=items[index];
         items.splice(index, 1);
         jsCookie.set('wishlistItems', JSON.stringify(items))
         return itemToBeRemoved;
      }
   }
}
export default WishlistManger;