import StarRatings from '../starRatings/index'
import LinkButton from '../linkButton/index'
import Text from '../text/index'
import Pagination from '../pagination/index'

function products({ items }) {
  if (!items || items.length <= 0) {
    return (
      <div class="py-16 flex justify-center mx-auto">
        <Text
          text="No Products found." />
      </div>
    );
  }

  return (  
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {items.map((product, index) => {
              return <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img alt="prod" className="object-cover object-center w-full h-full block" src={product.image} />
                </a>
                <div className="mt-4">
                  <StarRatings />
                  <LinkButton
                    text={product.title} />
                  <Text text={"$ " + product.price} />
                </div>
              </div>
            })}

          </div>
        </div>
      </section>
      <Pagination />
    </>
  );
}

export default products;