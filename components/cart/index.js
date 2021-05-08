import Text from '../common/text/index'
import Image from '../common/image/index'
import Button from '../common/button/index'
import ProductColorOptions from '../common/productColorOption/index'
import ProductSizeOptions from '../common/productSizeOption/index'
import { useState } from 'react'
import * as React from 'react'
import CartManger from '../../plugins/cartManger';
import { useRouter } from 'next/router';
import ProductQuantity from '../common/productQuantity'



 const CartItems = (props) =>  {
   var cartManger = new CartManger();
   const router = useRouter();

    const [cartItem, setCartItem]=useState(cartManger.GetCartItems());
     const  removeItem = (index) =>  {
      console.log(index,"indexxx")
      cartManger.removItemFromCart(index);
      setCartItem(cartManger.GetCartItems());
   };
   const updateQuantity = (quantity,productDetails) => {
     
      let product=
      {
         "id":productDetails.id,
         "title":productDetails.title,
         "price":productDetails.price,
         "category":productDetails.category,
         "image":productDetails.image,
        "size":productDetails.size,
        "color":productDetails.color,
        "quantity":quantity > productDetails.quantity ? 1 : -1
      }
      console.log(product,'productproductproduct')
      cartManger.AddItemInCart(product);
      setCartItem(cartManger.GetCartItems())
   }
   
   var total_amount=0;
  cartItem.map((item) => { 
     total_amount=total_amount + (item.quantity*item.price);
     console.log(item.quantity*item.price,"total_amount" ,total_amount)
   }) 
   const  proceed = () =>  {
      
      router.push({ pathname: '/checkout' })
   };
   console.log(cartItem,"cart")
    if (!cartItem || cartItem.length <= 0) {
         return (
            <div className="py-16 flex justify-center mx-auto">
               <Text
                  text="No Cart items found." />
            </div>
         );
      }

      
    
   return (
      
      <div className="container py-12  grid grid-flow-row auto-rows-max  overflow-scroll">
         {cartItem.map((productItem, index) => {
             
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
                  <h2 className="text-gray-900  title-font font-medium ">Total : $ { productItem.price * productItem.quantity }</h2>
                
                  <div className="flex mt-6 items-center pb-5 ">
                    
                   <ProductColorOptions readonly="pointer-events-none" options={ [ {
         "color":productItem.color,
         "value":productItem.color
      }]} />
                     <ProductSizeOptions readonly="pointer-events-none" options={ [ {
         "size":productItem.size,
         "value":productItem.size
      }]}  />
             <ProductQuantity  quantity={productItem.quantity} getQuantity={(quantity)=>{ updateQuantity(quantity,productItem)  }}  />
          
                    <div className={props.hidden} >
                     <Button  click={() => { removeItem(index)}}
                        text= "Remove"
                     />
                     </div>
                  </div>
               </div>
               
            </div>
            
         }
         )
         
         }
       
         <div className="flex pl-96">
            <div className={`w-10 ${props.hidden}`}>
            <Button click={() => { proceed()}}
                         text= "proceed"
                      />
            </div>
            <div className="ml-40"> 
                  <h2 className="text-gray-900  title-font font-medium ">Total Amount :$ { total_amount }</h2>
         </div>
                       </div>
                     
           
                      
      </div>
      

   );
}

export default CartItems;