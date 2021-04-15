import Header from '../header/index';
import NavBar from '../navBar/index';
import Product from '../common/productCard/index'

const Layout = props => (
  <div>
    <NavBar />
    <main>
      <Product />
    </main>
  </div>
);

export default Layout;