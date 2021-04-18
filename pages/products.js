import ProductCards from '../components/common/productCard/index'
import Layout from '../components/common/layout/index'
import ProductManger from '../plugins/productManger';

function Products({ props }) {

   var productManger = new  ProductManger();

   return (
      <Layout>
         <ProductCards
            items={productManger.GetProducts("")} />
      </Layout>
   )
};

export default Products;