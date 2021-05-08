
import * as React from 'react'

import { useForm } from "react-hook-form";
import FormError from '../common/form-error';

import { AddnewAddress } from '../../plugins/addressManager';
import { useRouter } from 'next/router';


 const AddAddress = () =>  {
  const router = useRouter();

  const { register, handleSubmit,formState: { errors } } = useForm();
  const registerUser = (data) => 
  {
    console.log( data );
    AddnewAddress(data);
    router.push({ pathname: '/checkout' })
  }
 
    
   return (
      <div className="py-16 flex justify-center mx-auto">
         
    <form  onSubmit={handleSubmit(registerUser)} className="w-full max-w-lg">
    <h1 className="p-5 text-center block text-lg font-hk hover:font-bold transition-all text-secondary hover:text-primary border-b-2 border-white hover:border-primary px-2">Add Delivery Address</h1>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
          First Name
        </label>
        <input type="text" name="first_name" id="firstName"   {...register("first_name", {
            required: "Required",
          })} className={`appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white `} id="grid-first-name" type="text" placeholder="Jane" />
     
       { errors.first_name &&    <FormError error="First Name Is invalid" /> }   
      </div>
      <div className="w-full md:w-1/2 px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
          Last Name
        </label>
        <input type="text" {...register("lastName", {
            required: "Required",
          })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
           { errors.last_name &&    <FormError error="Last Name Is invalid" />}   
      </div>
    </div>
    
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
          Address Line 1
        </label>
        <input type="text" name="address_1" {...register("address_1", {
            required: "Required",
          })} className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
        { errors.address_1 &&    <FormError error="Address Is invalid" />}   
      </div>
      <div className="w-full md:w-1/2 px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Address Line 2
        </label>
        <input type="text" name="address2" {...register("address2", {
            required: "Required",
          })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
       { errors.address_2 &&    <FormError error="Address Is invalid" />}   
      </div>
    </div>

    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
          Email
        </label>
        <input type="email" name="email" {...register("email", {
            required: "Required",
          })} className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
        { errors.email &&    <FormError error="email Is invalid" />}   
      </div>
      <div className="w-full md:w-1/2 px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Phone No
        </label>
        <input type="phone" name="phone" {...register("phone", {
            required: "Required",
          })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
      { errors.phone &&    <FormError error="Phone No Is invalid" />}   
      </div>
    </div>
    
    
    
    <div className="flex flex-wrap -mx-3 mb-2">
      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
          City
        </label>
        <input type="text"  {...register("city", {
            required: "Required",
          })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
       { errors.city &&    <FormError error="City name Is invalid" />}  
      </div>
      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
          State
        </label>
        <div className="relative">
          <select type="select"  {...register("state", {
            required: "Required",
          })} name="state" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
            <option>New Mexico</option>
            <option>Missouri</option>
            <option>Texas</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
          Zip
        </label>
        <input type="text" name="zip" {...register("zip", {
            required: "Required",
          })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
      { errors.zicode &&    <FormError error="zicode No Is invalid" />}  
      </div>
    </div>
    <div className="p-5 mx-40 items-center">
    <button type="submit" className="flex ml-4  text-white bg-indigo-500 border-0 py-2 px-6  focus:outline-none hover:bg-indigo-600 rounded">Submit</button>
  
    </div>
    
  </form>
</div>

   );
}

export default AddAddress;
