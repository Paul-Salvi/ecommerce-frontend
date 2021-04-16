import React from 'react';
import Image from 'next/image'

import NavBar from '../navBar/index';
import Header from '../header/index';
import Product from '../common/productCard/index';
import Footer from '../footer/index';
import CategoryCard from '../common/product-category-card/index'

const Layout = props => (
  <div>
  
    {/* <Header /> */}
    <NavBar />
    <main>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">

        <div className="grid grid-cols-2 gap-4">

        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        


        </div>

      </div>
      <Product />




      
    </main>

    



































    <Footer />
  </div>
);

export default Layout;