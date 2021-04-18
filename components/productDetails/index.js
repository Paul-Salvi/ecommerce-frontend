import Button from '../common/button/index'
import FavButton from '../common/favButton/index'
import StarRatings from '../common/productStarRatings/index'
import ProductColorOptions from '../common/productColorOption'
import ProductSizeOptions from '../common/productSizeOption'
import ProductSocialMediaOptions from '../common/productSocialMediaOptions'
function ProductDetails({ productDetails }) {

   if (!productDetails) {
      return (<> </>);
   }
   return (
      <section className="text-gray-600 body-font overflow-hidden">
         <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
               <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={productDetails.image} />
               <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h2 className="text-sm title-font text-gray-500 tracking-widest">{productDetails.category}</h2>
                  <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{productDetails.title}</h1>
                  <div className="flex mb-4">
                     <span className="flex items-center">
                        <StarRatings />
                     </span>
                     <ProductSocialMediaOptions />
                  </div>
                  <p className="leading-relaxed">{productDetails.description}</p>
                  <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                     <ProductColorOptions />
                     <ProductSizeOptions />
                  </div>
                  <div className="flex">
                     <span className="title-font font-medium text-2xl text-gray-900">${productDetails.price}</span>
                     <Button
                        text="Add to Cart" />
                     <FavButton />
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
};

export default ProductDetails;