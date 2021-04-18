import { useRouter } from 'next/router'
import Layout from '../../../components/common/layout/index'
import ProductInfo from '../../../components/productDetails/index'
import ProductManger from '../../../plugins/productManger';

function ProductDetails({ productInfo }) {
   const router = useRouter();
   const id = parseInt(router.query.id);
   console.log(id)
   var productManger = new ProductManger();
   var product = productManger.GetProduct(id);
   console.log(product);
   return (
      <Layout>
         <ProductInfo
            productDetails={product}
         />
      </Layout>
   )
};
export default ProductDetails;
