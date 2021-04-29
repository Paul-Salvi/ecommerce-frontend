
import jsCookie from "js-cookie";
import { auth, facebookProvider, googleProvider } from '../services/firebase';


class SignInManager {
   signinUserData() {      
      let user='';
      
     if(jsCookie.get('userData'))
     {
      user=JSON.parse(jsCookie.get('userData'));
     }
     console.log(user,"itemssss get")
      return user;
   };
   signin(userData)
   {
      jsCookie.set('userData',JSON.stringify(userData));
       };

     signOut()
     {
      auth.signOut();
      jsCookie.remove('userData');
     }
}
export default SignInManager;