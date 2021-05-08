import Layout from '../components/common/layout/index'
import WishlistManager from '../plugins/wishlistManager';
import WishlistItems from '../components/wishlist/index';

function ShoppingWishlist({ props }) {

   var wishlistManager = new WishlistManager();
   return (
      <Layout>
         <WishlistItems 
            WishlistItems = {wishlistManager.GetWishlistItems()}
         />
      </Layout>
   )
};

export default ShoppingWishlist;