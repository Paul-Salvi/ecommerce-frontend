import ProductCards from '../components/common/productCard/index'
import productData from '../shared/products.json'
import Layout from '../components/common/layout/index'

function Products({ props }) {
   return (
      <Layout>
         <ProductCards
            items={productData} />
      </Layout>
   )
};

export default Products;