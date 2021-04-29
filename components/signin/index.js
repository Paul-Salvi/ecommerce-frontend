
import { auth, facebookProvider, googleProvider } from '../../services/firebase';
 import SignInManager from '../../plugins/signInManager'
function SignIn(props) {
  
  const LoginUser = value => (async () => {
    var provider=value;
  var signInManager =new SignInManager();
     const response = await auth.signInWithPopup(provider === 'google' ? googleProvider : facebookProvider);
     if (response.additionalUserInfo) {
         const profile = response.additionalUserInfo.profile ;
         const id = profile.id;
         const name = provider === 'google' ? profile.given_name : profile.first_name;
         console.log(response,"response.additionalUserInfo")
         signInManager.signin(response.additionalUserInfo);
         props.dialogClose(response.additionalUserInfo);
         // return { name, id };
        
     }
     //return { name: null, id: null };
 });
 
 const close =  () => {
   props.dialogClose('');
 };
 
   return (
    <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
  
      <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
  
    
      <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div className="flex flex-col items-center p-2">
        <div className="p-2 ">
       <img src="./logo/shopit-logos_black.png" className="w-48 h-30 items-center" alt="logo" />
       </div>
       <div className="p-2">  <button type="button" onClick={LoginUser('google')} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-500 text-base font-medium text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black-800 sm:ml-3 sm:w-auto sm:text-sm">
           SignIn With Google 
          </button></div>
          <div className="p-2">  <button type="button"  onClick={LoginUser('facebook')} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 sm:ml-3 sm:w-auto sm:text-sm">
          SignIn With Facebook
          </button></div>
</div>
       
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        
          <button type="button" onClick={close} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
   )
};

export default SignIn;