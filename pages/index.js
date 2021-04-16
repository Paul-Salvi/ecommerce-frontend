import NavBar from '../components/common/navBar/index';
import Welcome from '../components/welcome/index'
import Products from '../components/products/index'
import ProductDetails from '../components/productDetail/index'
function Home({ props }) {
   return (
      <div>
         <NavBar />
         <main>
            {/* <Products /> */}
            <ProductDetails />
         </main>
      </div>
   )
};

export default Home;