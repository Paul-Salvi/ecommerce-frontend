

function ProductColorOptions(props) {
   
   
   return (
      <div className={`flex ${props.readonly}`}>
         <span className="mr-3">Color</span>
         {
         props.options.map((option) => 
       <button type="submit" onClick={() =>{props.getColor(option.color)}} className={`border-2 border-${option.color}-300 ml-1 bg-${option.color}-700 rounded-full w-6 h-6 focus:outline-none `} ></button>
   )
   }

         </div>
   )
};

export default ProductColorOptions;