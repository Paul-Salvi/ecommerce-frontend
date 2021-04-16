import NavBar from '../navBar/';
import Footer from '../footer/';
const Layout = props => (
  <div>
    <NavBar />
    <main>
      {props.children}
    </main>
    <Footer />
  </div>
  
);

export default Layout;