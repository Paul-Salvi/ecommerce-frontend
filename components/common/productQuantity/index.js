

function ProductQuantity(props) {
   
   
    return (
       <div className={`flex ${props.readonly}`}>
          
          <button onClick={() =>{props.getQuantity(props.quantity-1)}} className={"w-8 bg-gray-400 rounded-md mx-2 " + (parseInt(props.quantity) <=1 ? "pointer-events-none":'') } >-</button> 
          {props.quantity} 
          <button className="w-8 bg-gray-400 rounded-md mx-2 " onClick={() =>{props.getQuantity(props.quantity+1)}}>+</button>
               
 
          </div>
    )
 };
 
 export default ProductQuantity;