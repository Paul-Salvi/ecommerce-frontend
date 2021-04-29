import Layout from '../components/common/layout/index'
import CartManger from '../plugins/cartManger';
import AddAddress from '../components/addAddress/index';

function Address({ props }) {

   var cartManger = new CartManger();
   return (
      <Layout>
         <AddAddress />
      </Layout>
   )
};

export default Address;