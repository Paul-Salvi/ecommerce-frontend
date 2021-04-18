import Layout from '../components/common/layout/index'
import CartManger from '../plugins/cartManger';
import CartItems from '../components/cart/index';

function ShoppingCart({ props }) {

   var cartManger = new CartManger();
   return (
      <Layout>
         <CartItems 
            cartItems = {cartManger.GetCartItems()}
         />
      </Layout>
   )
};

export default ShoppingCart;