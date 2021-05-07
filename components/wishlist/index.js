import Text from '../common/text/index'
import Image from '../common/image/index'
import Button from '../common/button/index'
import ProductColorOptions from '../common/productColorOption/index'
import ProductSizeOptions from '../common/productSizeOption/index'
import { useState } from 'react'
import * as React from 'react'
import WishlistManger from '../../plugins/wishlistManager';
import CartManager from '../../plugins/cartManger';
import { useRouter } from 'next/router'
import { set } from 'js-cookie'
 const wishlistItems = () =>  {
   var wishlistManager = new WishlistManger();
   let cartManager=new CartManager();
   const router = useRouter();
    const [wishlistItem, setWishlistItem]=useState(wishlistManager.GetWishlistItems());
     const  removeItem = (index) =>  {
      wishlistManager.removeItemFromWishlist(index);
      setWishlistItem(wishlistManager.GetWishlistItems());
   };
   const  moveToCart= (index) =>  {
      let item=wishlistManager.moveToCart(index);
      cartManager.AddItemInCart(item);
      setWishlistItem(wishlistManager.GetWishlistItems());
   };
    if (!wishlistItem || wishlistItem.length <= 0) {
         return (
            <div className="py-16 flex justify-center mx-auto">
               <Text
                  text="No items found in your wishlist." />
            </div>
         );
      }

      
    
   return (
      
      <div className="container py-12  grid grid-flow-row auto-rows-max ">
         {wishlistItem.map((productItem, index) => {
             
          return  <div className="flex  mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-row">
               <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center  text-indigo-500 flex-shrink-0">
                  <Image
                     url={productItem.image}
                     imgAlt={productItem.title}
                  />
                  
               </div>
               <div className="flex-row sm:text-left text-center mt-6 sm:mt-0">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">{productItem.title}</h2>
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">$ {productItem.price}</h2>
                  <div className="flex mt-6 items-center pb-5 ">
                   <ProductColorOptions readonly="pointer-events-none" options={ [ {
         "color":productItem.color,
         "value":productItem.color
      }]} />
                     <ProductSizeOptions readonly="pointer-events-none" options={ [ {
         "size":productItem.size,
         "value":productItem.size
      }]}  />
           <Button click={() => { removeItem(index)}}
                        text= "Remove from Wishlist"
                     />
                     <Button click={() => { moveToCart(index)}}
                        text= "Add To Cart"
                     />
                  </div>
               </div>
            </div>
         }
         )         
         }
      </div>

   );
}

export default wishlistItems;