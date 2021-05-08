import productData from '../shared/products.json'
import jsCookie from "js-cookie";

class CartManger {
   GetCartItems() {      
      let items=[];
      
     if(jsCookie.get('cartItems'))
     {
      items=JSON.parse(jsCookie.get('cartItems'));
     }
     console.log(items,"itemssss get")
      return items;
   };
   AddItemInCart(item)
   {
      let items=[];
     
     if(jsCookie.get('cartItems')==undefined)
     {
      items.push(item)
      jsCookie.set('cartItems',JSON.stringify(items))
     }
     else
     {
      items=JSON.parse(jsCookie.get('cartItems'));
      var already_available_item=items.find((data,index) => {
          if(data.id == item.id && data.size == item.size )
          {
            items[index]['quantity']+=item.quantity
            return data;
          }
          })
          if(already_available_item==undefined)
          {
            items.push(item)
          }
      
     
      console.log(items,"AddItemInCart====",already_available_item)
      jsCookie.set('cartItems', JSON.stringify(items))
     }

       };

     removItemFromCart(index)
     {
      if(jsCookie.get('cartItems'))
      {
         
       let items=JSON.parse(jsCookie.get('cartItems'));
       items.splice(index,1);
       console.log(items,"removItemFromCart")
       jsCookie.set('cartItems', JSON.stringify(items))
      }
     }  
}
export default CartManger;