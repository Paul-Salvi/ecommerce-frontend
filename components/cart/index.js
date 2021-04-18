import Text from '../common/text/index'
import Image from '../common/image/index'
import Button from '../common/button/index'
import ColorOption from '../common/productColorOption/index'
import SizeOption from '../common/productSizeOption/index'

function cartItems({ cartItems }) {
   if (!cartItems || cartItems.length <= 0) {
      return (
         <div className="py-16 flex justify-center mx-auto">
            <Text
               text="No Cart items found." />
         </div>
      );
   }

   return (
      <div className="container px-5 py-24 mx-auto">
         {cartItems.map((productItem, index) => {
            return <div className="flex  mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
               <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center  text-indigo-500 flex-shrink-0">
                  <Image
                     url={productItem.image}
                     imgAlt={productItem.title}
                  />
               </div>
               <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">{productItem.title}</h2>
                  <div className="flex mt-6 items-center pb-5 ">
                     <ColorOption />
                     <SizeOption />
                     <Button 
                        text= "Remove"
                     />
                  </div>
               </div>
            </div>
         })}

      </div>

   );
}

export default cartItems;