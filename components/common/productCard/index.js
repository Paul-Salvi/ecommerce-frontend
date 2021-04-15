import StarRatings from '../starRatings/index'
import LinkButton from '../linkButton/index'


function products({ items }) {
  const elements = ['one', 'two', 'three'];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {elements.map((value, index) => {
            return <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="prod" className="object-cover object-center w-full h-full block" src="https://images-na.ssl-images-amazon.com/images/I/41fiun7%2B2SL._SY450_.jpg" />
              </a>
              <div className="mt-4">
                <StarRatings />
                <LinkButton
                  text="HP Laptop"
                />
                <p className="mt-1">$16.00</p>
              </div>
            </div>
          })}

        </div>
      </div>
    </section>
  );
}

export default products;