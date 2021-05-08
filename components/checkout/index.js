
import React, { useEffect, useState } from 'react';

import { useForm } from "react-hook-form";

import SignInManager from '../../plugins/signInManager';

import { GetAddresses} from '../../plugins/addressManager';
import { useRouter } from 'next/router';
import CartItems from '../cart';


 const Checkout = () =>  {
    const router = useRouter();
    
    const [paymentMode,setpaymentMode] = useState('razor');
    const [address, setAddress] = useState(GetAddresses());
    const [selectedAddress, setSelectedAddress] = useState(address[0].id)
  
    const submitPaymentMethod = (event) => {
        event.preventDefault();
       console.log("size",paymentMode)
   };
   const onValueChange = (event) => {
     setpaymentMode(event.target.value)
    console.log(event.target.value);
};
 
const gotoAddress = () => {
    console.log("gotoAddress")
    router.push({ pathname: '/addAddress' })
};
const onAddressChange = (id) => {
    console.log(id,"dddddd")
    setSelectedAddress(id);
};
 
 
    
   return (
       
      <div className="py-16 flex justify-center mx-auto">
      <CartItems hidden="hidden" />
          <div className="relative ">
           <h1 className="text-center block text-lg font-hk hover:font-bold transition-all text-secondary hover:text-primary border-b-2 border-white hover:border-primary px-2">Delivering To</h1>
           <div className="overflow-auto h-96 w-72">
           { address.map((data) => 
                       <div className="mt-2 bg-gray-200 py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
                       <p className="text-xl font-semibold my-2">{data.firstName} {data.lastName}</p>
                       <div className="flex space-x-2 text-gray-400 text-sm">
                       <input type="radio" value={data.id} checked={selectedAddress === data.id}
        onChange={() =>{onAddressChange(data.id)}} name="address"/> 
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                           </svg>
                           <div>
                           <p>{data.address1} {data.address2}
                                </p> 
                                <p>city :{ data.city} 
                                </p> 
                                <p>State :{ data.state} 
                                </p> 
                                <p>Zipcode :{ data.zip} 
                                </p> 

                           </div>

                       </div>               
         </div>
           )
           }
          </div>
          <div className="border-t-2"></div>
           <div className="text-center font-semibold my-2">OR</div>
           <button onClick={gotoAddress} className="font-semibold my-2 rounded-lg ring-2 focus:ring-grey"><span >+</span> add new address</button>
         
  <form  onSubmit={submitPaymentMethod} className="w-full max-w-lg">
  <p className="text-xl font-semibold my-2">Method Of Payments</p>
  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
 
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        <input type="radio" value="razor" checked={paymentMode === "razor"}
              onChange={onValueChange} name="payment"/>  Razor Pay
        </label>
      
<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
<input type="radio" value="cod" checked={paymentMode === "cod"}
              onChange={onValueChange} name="payment"/> COD
        </label>
       
          </div>
      <button type="submit" className="flex ml-4  text-white bg-indigo-500 border-0 py-2 px-6  focus:outline-none hover:bg-indigo-600 rounded">Proceed To Checkout</button>
  
  </form>
        </div>

    
</div>

   );
}

export default Checkout;

