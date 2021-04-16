import ProductCards from '../common/productCard/index'
import productData from '../../shared/products.json'

function Products({ props }) {
   return (
      <ProductCards
         items={productData} />
   )
};

export default Products;