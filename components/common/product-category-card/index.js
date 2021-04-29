

 function CategoryCard(props) {
  return (
    <div className=" container w-96 h-72 mx-auto w-25 bg-white rounded-xl shadow-md overflow-hidden md:max-w-1xl transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110">
            <div className="md:flex ">
              <div className="md:flex-shrink-0 ">
                <img className="w-96 h-72 object-cover " src={props.imagePath} alt="Man looking at item at a store" />
                <a href="#" className="relative -top-12 bg-gray-300 h-12  block mt-1 text-lg leading-tight font-medium text-black hover:underline text-center text-3xl">{props.productName}</a>
              </div>
              
            </div>
          </div>
  );
 }

export default CategoryCard;