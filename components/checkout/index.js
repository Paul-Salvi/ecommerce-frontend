
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useForm } from "react-hook-form";

import SignInManager from '../../plugins/signInManager';

import { GetAddresses} from '../../plugins/addressManager';
import { useRouter } from 'next/router';
import CartItems from '../cart';
import PaymentStatus from '../paymentStatus';
import CartManger from '../../plugins/cartManger';

 const Checkout = () =>  {
    const router = useRouter();
    
    const [paymentMode,setpaymentMode] = useState('razor');
    const [paymentStatus,setPaymentStatus] = useState('inprogress');
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
  
    setSelectedAddress(id);
    
};
 
function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
}
async function displayRazorpay() {
    console.log('called');
    const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
    }

    // creating a new order
    console.log('called 1');
    const result = await axios.post("http://localhost:4000/api/v1/payment/orders");

    if (!result) {
        alert("Server error. Are you online?");
        return;
    }
    console.log('called 2');

    // Getting the order details back
    const { amount, id: order_id, currency } = result.data;
    var address_details=address.find((data) => {
        data.id==selectedAddress;
        return data;
     })
     var total_amount=0;
     var cartManger = new CartManger();
     cartManger.GetCartItems().map((item) => {
        total_amount=total_amount + (item.quantity*item.price);
        console.log(item.quantity*item.price,"total_amount" ,total_amount)
      }) 
    const options = {
        key: "rzp_test_Z3r3fpXU1Jus0c", // Enter the Key ID generated from the Dashboard
        amount: total_amount.toString(),
        currency: currency,
        name: "Shop IT.",
        description: "Test Transaction",
        order_id: order_id,
        handler: async function (response) {
            const data = {
                orderCreationId: order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
            };

            const result = await axios.post("http://localhost:4000/api/v1/payment/success", data);
            setPaymentStatus(result.data.msg)
        },
        prefill: {
            name: address_details['firstName']+' '+address_details['firstName'],
            email: address_details['email'],
            contact:address_details['phone'],
        },
        notes: {
            address: address_details['city']+','+address_details['state']+','+address_details['zip'],
        },
        theme: {
            color: "#61dafb",
        },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
}
   
  if(paymentStatus!='inprogress')
  {
    return (
        <PaymentStatus status={paymentStatus} />   
      )
  }
  else{
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
        <button type="submit" onClick={()=>{ displayRazorpay()}} className="flex ml-4  text-white bg-indigo-500 border-0 py-2 px-6  focus:outline-none hover:bg-indigo-600 rounded">Proceed To Checkout</button>
    
    </form>
          </div>
  
      
  </div>
  
     );
  } 
  
}

export default Checkout;

