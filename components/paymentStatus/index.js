
import { useRouter } from 'next/router'

function PaymentStatus(props) {
    const router = useRouter()
    const handleClick = () => {
        
        router.push('/')
    }
    return (
<div className=" flex flex-col space-y-4 items-center justify-center bg-gray-100 py-6">
      
	  {
          props.status=='success' ?
          <div>
          <img src="/images/payment_success.gif" className="pl-16 justify-center w-52  h-auto" alt="logo" />
              
          	<div className="alert flex flex-row items-center bg-green-200 p-5 rounded border-b-2 border-green-300">
          <div className="alert-icon flex items-center bg-green-100 border-2 border-green-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
              <span className="text-green-500">
                  <svg fill="currentColor"
                       viewBox="0 0 20 20"
                       className="h-6 w-6">
                      <path fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"></path>
                  </svg>
              </span>
          </div>
          <div className="alert-content ml-4">
              <div className="alert-title text-5xl font-mono font-bold text-green-800">
                  Success
              </div>
              <div className="alert-description text-lg text-green-600">
                  Payment Is Successfull !
              </div>
          </div>
      </div>
        </div>
    :
    
		<div className="alert flex flex-row items-center bg-red-200 p-5 rounded border-b-2 border-red-300">
        <div className="alert-icon flex items-center bg-red-100 border-2 border-red-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
            <span className="text-red-500">
                <svg fill="currentColor"
                     viewBox="0 0 20 20"
                     className="h-6 w-6">
                    <path fill-rule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clip-rule="evenodd"></path>
                </svg>
            </span>
        </div>
        <div className="alert-content ml-4">
            <div className="alert-title text-5xl font-mono font-bold text-red-800">
                Error
            </div>
            <div className="alert-description text-lg text-red-600">
                Something Went Wrong !
            </div>
        </div>
       
    </div>


      }
     
      <button onClick={()=>{handleClick()}} class="h-10 px-5 m-2 text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800">Enjoy More Shopping</button>

	</div>
    );
}
export default PaymentStatus;