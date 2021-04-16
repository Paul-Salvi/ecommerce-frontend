import NavBar from '../navBar/';

const Layout = props => (
  <div>
    <NavBar />
    <main>
      {props.children}
    </main>
  </div>
);

export default Layout;