import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../common/button/index'
import FavButton from '../common/favButton/index'
import StarRatings from '../common/productStarRatings/index'
import ProductColorOptions from '../common/productColorOption'
import ProductSizeOptions from '../common/productSizeOption'
import ProductSocialMediaOptions from '../common/productSocialMediaOptions'
import CartManger from '../../plugins/cartManger';

import { useRouter } from 'next/router'
import ProductQuantity from '../common/productQuantity';
function ProductDetails({ productDetails }) {
   var cartManger = new CartManger();
   const router = useRouter();
   const [productSizeOption,setProductSizeOption]=useState([
      {
         "size":"XS",
         "value":"XS"
      },
      {
         "size":"M",
         "value":"M"
      },
      {
         "size":"L",
         "value":"L"
      }

   ]);
   const [quantity,setQuantity]=useState(1);
   const [productColorOption,setProductColorOption]=useState([
      {
         "color":"red",
         "value":"red"
      },
      {
         "color":"white",
         "value":"white"
      },
      {
         "color":"blue",
         "value":"blue"
      }

   ]);
   const [productSize,setProductSize]=useState('SM');
   const [productColor,setProductColor]=useState('');
   
   const addToCart = (productDetails) => {
     let product=
     {
        "id":productDetails.id,
        "title":productDetails.title,
        "price":productDetails.price,
        "category":productDetails.category,
        "image":productDetails.image,
       "size":productSize,
       "color":productColor,
       "quantity":quantity
     }
     cartManger.AddItemInCart(product);
     router.push({ pathname: '/cart' })
     console.log(productSize,"size",productColor,productDetails)
  };

   if (!productDetails) {
      return (<> </>);
   }
   return (
      <section className="text-gray-600 body-font overflow-hidden">
         <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
               <img alt="product" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={productDetails.image} />
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
                     <ProductColorOptions options={productColorOption} getColor={(color)=>{setProductColor(color)}}/>
                     <ProductSizeOptions options={productSizeOption} getProductSize={(size)=>{setProductSize(size)}} />
                      <ProductQuantity quantity={quantity}  getQuantity={(quantity)=>{setQuantity(quantity) }} />
                       </div>
                  <div className="flex">
                     <span className="title-font font-medium text-2xl text-gray-900">${productDetails.price}</span>
                     <Button click={() => { addToCart(productDetails)}}
                        text="Add to Cart" />
                     <FavButton />
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

ProductDetails.propTypes = {
   productDetails: PropTypes.string.isRequired
 }

export default ProductDetails;