import addressData from '../shared/address.json'


export const GetAddresses = () => {
  
      return addressData;
};
export const AddnewAddress = (data) => {
  console.log(data,"AddnewAddress")

   addressData.push(
   {
      "id": 3,
      "firstName":data.firstName,
      "lastName": data.lastName,
      "address1": data.address1,
      "address2": data.address2,
      "email": data.email,
      "phone": data.phone,
      "city": data.city,
      "state": data.state,
      "zip": data.zip
    }
  )
   
};
   