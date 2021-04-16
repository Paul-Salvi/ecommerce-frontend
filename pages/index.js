import NavBar from '../components/common/navBar/index';
import Welcome from './welcome'
import Products from './products'
import ProductDetails from './productDetails'
import Layout from '../components/common/layout/index'
import CategoryCard from '../components/common/product-category-card/'
function Home({ props }) {
    return (
        <Layout>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">

                <div className="grid grid-cols-2 gap-4">

                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />



                </div>

            </div>

            <Welcome />


        </Layout>

    )
};

export default Home;