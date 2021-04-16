
function pagination({ pagesCount }) {

   return (
      <div class="py-16 flex justify-center mx-auto">
         <span class="font-hk font-semibold text-grey-darkest transition-colors hover:text-black pr-5 cursor-pointer">Previous</span>
         <span class="font-hk font-semibold text-black transition-colors hover:text-white text-sm hover:bg-primary h-6 w-6 rounded-full flex items-center justify-center mr-3 cursor-pointer">1</span>
         <span class="font-hk font-semibold text-black transition-colors hover:text-white text-sm hover:bg-primary h-6 w-6 rounded-full flex items-center justify-center mr-3 cursor-pointer">2</span>
         <span class="font-hk font-semibold text-black transition-colors hover:text-white text-sm hover:bg-primary h-6 w-6 rounded-full flex items-center justify-center mr-3 cursor-pointer">3</span>
         <span class="font-hk font-semibold text-grey-darkest transition-colors hover:text-black pl-2 cursor-pointer">Next</span>
      </div>
   );
}
export default pagination;