import Welcome from './welcome'
import Layout from '../components/common/layout/index'
import CategoryCard from '../components/common/product-category-card/'
function Home({ props }) {
    return (
        <Layout>
           

                <div className=" container-sm px-60">
                   <div className=" flex flex-wrap p-5 flex-row md-auto">
                       
                    <CategoryCard imagePath="/images/tShirts.jpg" productName="T-shirt" />
                    <CategoryCard imagePath="/images/jeans.jpg" productName="Jeans" />
                    </div>
                    <div className=" flex flex-wrap p-5 flex-row md-auto">
                    <CategoryCard imagePath="/images/backpack.jpg" productName="Backpack" />
                    <CategoryCard imagePath="/images/necklace.jpg" productName="Necklase" />
                    </div>


                </div>

                
            <Welcome />


        </Layout>

    )
};

export default Home;