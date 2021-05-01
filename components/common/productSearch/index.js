import { useRouter } from 'next/router'

function ProductSearch() {

   const router = useRouter();

   const handleProductSearch = (e) => {
      if (e.key === 'Enter') {
         const name = e.target.value;
         if (name) {
            router.push({
               pathname: '/products',
               query: { name: name },
            });
         }
      }
   }
   return (
      <>
         <input
            className="focus:ring-2 focus:ring-red-300 border-2 border-gray-300 bg-white h-10 pl-2 pr-8 w-96 rounded-lg text-sm focus:outline-none"
            type="search" name="search" placeholder="Search" onKeyPress={handleProductSearch} />
         <button type="submit" className="absolute right-0 top-0 mt-3 mr-2" />
      </>
   );
}
export default ProductSearch;