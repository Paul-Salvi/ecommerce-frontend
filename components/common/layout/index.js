import NavBar from '../navBar/';
import Products from '../productCard/index'
import productData from '../../../shared/products.json'


function Layout({ props }) {

  return (
    <div>
      <NavBar />
      <main>
        <Products
          items={productData} />       
      </main>
    </div>
  )
};

export default Layout;