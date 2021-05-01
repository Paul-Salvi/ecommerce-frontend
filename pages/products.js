import ProductCards from '../components/common/productCard/index'
import Layout from '../components/common/layout/index'
import ProductManger from '../plugins/productManger';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router'

function Products() {

   const router = useRouter();
   const productName = router.query.name;
   const productManger = new ProductManger();
   let products = "";
   if (productName) {
      products = productManger.GetProductsByName(productName);
   } else {
      products = productManger.GetAllProducts();
   }
   return (
      <Layout>
         <ProductCards
            items={products} />
      </Layout>
   )
}

Products.propTypes = {
   productName: PropTypes.string
}

export default Products;