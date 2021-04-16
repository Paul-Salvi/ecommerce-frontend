import NavBar from '../components/common/navBar/index';
import Welcome from './welcome'
import Products from './products'
import ProductDetails from './productDetails'
import Layout from '../components/common/layout/index'

function Home({ props }) {
   return (
      <Layout>
         <Welcome />
      </Layout>
   )
};

export default Home;