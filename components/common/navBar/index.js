import { useRouter } from 'next/router'
import Link from 'next/Link'


function NavBar({ props }) {

  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault()
    router.push({ pathname: '/about' })
  }
  return (
   
<div class="container relative">
    <div class="shadow-xs py-6 lg:py-10 z-50 relative">
        <div class="flex justify-between items-center">
        <a href="/" className="p-4">
                <img src="http://www.danielledeveloper.com/wp-content/uploads/2018/04/Reactjs-logo-e1523253944211.png" class="w-28 sm:w-48 h-auto" alt="logo" />
            </a>
            <div class="flex items-center">
                
            <div class=" relative mx-auto text-gray-600 lg:block hidden">
                <input
                    class="focus:ring-2 focus:ring-red-300 border-2 border-gray-300 bg-white h-10 pl-2 pr-8 w-96 rounded-lg text-sm focus:outline-none"
                    type="search" name="search" placeholder="Search" />
                <button type="submit" class="absolute right-0 top-0 mt-3 mr-2" />
                   
                
            </div>
                </div>

            <div class="flex items-center">
            <a href="#"
                   class="block text-md px-4 py-2 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0">Sign
                    in</a>
                <a href="/account/dashboard" class="border-2 transition-all border-transparent hover:border-primary rounded-full p-2 sm:p-4 group">
                    <img src="https://d33wubrfki0l68.cloudfront.net/f7d761469bf66852487412569632673f9d21d1f8/5e821/assets/img/icons/icon-user.svg" class="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 block group-hover:hidden" alt="icon user" />
                    <img src="https://d33wubrfki0l68.cloudfront.net/813133414c7aa22b471f0e3efbe3ddfc3600d77e/3dc2c/assets/img/icons/icon-user-hover.svg" class="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 hidden group-hover:block" alt="icon user hover" />
                </a>

                <a href="/cart/index" class="hidden lg:block border-2 transition-all border-transparent hover:border-primary rounded-full p-2 sm:p-4 ml-2 sm:ml-3 md:ml-5 lg:ml-8 group">
                    <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg" class="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 block group-hover:hidden" alt="icon cart" />
                    <img src="https://d33wubrfki0l68.cloudfront.net/bcbeda5344e5934d7eaa7a3e7f6e86b78d79755b/6df24/assets/img/icons/icon-cart-hover.svg" class="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 hidden group-hover:block" alt="icon cart hover" />
                </a>

                <span class="block lg:hidden border-2 transition-all border-transparent hover:border-primary rounded-full p-2 sm:p-4 ml-2 sm:ml-3 md:ml-5 lg:ml-8 group">
                    <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg" class="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 block group-hover:hidden" alt="icon cart" />
                    <img src="https://d33wubrfki0l68.cloudfront.net/bcbeda5344e5934d7eaa7a3e7f6e86b78d79755b/6df24/assets/img/icons/icon-cart-hover.svg" class="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 hidden group-hover:block" alt="icon cart hover" />
                </span>
            </div>
            <div class="hidden">
                <i class="bx bx-menu text-primary text-3xl" ></i>
            </div>
        </div>
        <div class="justify-center lg:pt-8 hidden lg:flex">
            <ul class="list-reset flex items-center">
                
                
                <li class="mr-10">
                    <a href="/products" class="block text-lg font-hk hover:font-bold transition-all text-secondary hover:text-primary border-b-2 border-white hover:border-primary px-2">products</a>
                </li>
                
                
                
                <li class="mr-10">
                    <Link  href="/about">
                    <a class="block text-lg font-hk hover:font-bold transition-all text-secondary hover:text-primary border-b-2 border-white hover:border-primary px-2">About</a>
                    </Link>
</li>
                
                
                
                <li class="mr-10 hidden lg:block group">
                    <div class="border-b-2 border-white transition-colors group-hover:border-primary flex items-center">
                        <span class="cursor-pointer text-lg font-hk group-hover:font-bold text-secondary group-hover:text-primary px-2 transition-all">Collections</span>
                        <i class="bx bx-chevron-down text-secondary group-hover:text-primary pl-2 px-2 transition-colors"></i>
                    </div>
                    <div class="pt-10 absolute mt-40 top-0 left-0 right-0 z-50 w-2/3 mx-auto opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto ">
                        <div class="transition-all flex bg-white shadow-lg p-8 rounded-b relative ">
                            
                            <div class="flex-1 relative z-20">
                                <h4 class="font-hkbold text-base text-secondary mb-2">Man</h4>
                                <ul>
                                    
                                    <li>
                                        <a href="/collection-grid" class="text-sm font-hk text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Boots</a>
                                    </li>
                                    
                                    <li>
                                        <a href="/collection-grid" class="text-sm font-hk text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Blutcher Boot</a>
                                    </li>
                                    
                                    <li>
                                        <a href="/collection-grid" class="text-sm font-hk text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Chelsea Boot</a>
                                    </li>
                                    
                                    <li>
                                        <a href="/collection-grid" class="text-sm font-hk text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Chukka Boot</a>
                                    </li>
                                    
                                    <li>
                                        <a href="/collection-grid" class="text-sm font-hk text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Dress Boot</a>
                                    </li>
                                    
                                    <li>
                                        <a href="/collection-grid" class="text-sm font-hk text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Work Boot</a>
                                    </li>
                                    
                                </ul>
                            </div>
                            
                            <div class="flex-1 relative z-20">
                                <h4 class="font-hkbold text-base text-secondary mb-2">Woman</h4>
                                <ul>
                                    
                                    <li>
                                        <a href="/collection-grid" class="text-sm font-hk text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Accessories</a>
                                    </li>
                                    
                                    <li>
                                        <a href="/collection-grid" class="text-sm font-hk text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Belts</a>
                                    </li>
                                    
                                    <li>
                                        <a href="/collection-grid" class="text-sm font-hk text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Caps</a>
                                    </li>
                                    
                                    <li>
                                        <a href="/collection-grid" class="text-sm font-hk text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Laces</a>
                                    </li>
                                    
                                    <li>
                                        <a href="/collection-grid" class="text-sm font-hk text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Socks</a>
                                    </li>
                                    
                                </ul>
                            </div>
                            
                            <div class="flex-1 relative z-20">
                                <h4 class="font-hkbold text-base text-secondary mb-2">Kids</h4>
                                <ul>
                                    
                                    <li>
                                        <a href="/collection-grid" class="text-sm font-hk text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Shoes</a>
                                    </li>
                                    
                                    <li>
                                        <a href="/collection-grid" class="text-sm font-hk text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Derby Shoes</a>
                                    </li>
                                    
                                    <li>
                                        <a href="/collection-grid" class="text-sm font-hk text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Belts</a>
                                    </li>
                                    
                                    <li>
                                        <a href="/collection-grid" class="text-sm font-hk text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Caps</a>
                                    </li>
                                    
                                    <li>
                                        <a href="/collection-grid" class="text-sm font-hk text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Laces</a>
                                    </li>
                                    
                                    <li>
                                        <a href="/collection-grid" class="text-sm font-hk text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Socks</a>
                                    </li>
                                    
                                </ul>
                            </div>
                            
                            <div class="flex-1">
                                {/* <div class="z-0 bg-contain bg-right-bottom bg-no-repeat absolute inset-0" style="background-image: url(/assets/img/unlicensed/bg-mega-menu.png)">
                                </div> */}
                                <div class="z-0 bg-contain bg-right-bottom bg-no-repeat absolute inset-0" >
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                
                
                
                <li class="mr-10">
                    <a href="/blog" class="block text-lg font-hk hover:font-bold transition-all text-secondary hover:text-primary border-b-2 border-white hover:border-primary px-2">Blog</a>
                </li>
                
                
                
                <li class="mr-10">
                    <a href="/contact#faq" class="block text-lg font-hk hover:font-bold transition-all text-secondary hover:text-primary border-b-2 border-white hover:border-primary px-2">FAQ</a>
                </li>
                
                
                
                <li class="mr-10">
                    <a href="/contact" class="block text-lg font-hk hover:font-bold transition-all text-secondary hover:text-primary border-b-2 border-white hover:border-primary px-2">Contact</a>
                </li>
                
                
            </ul>
        </div>
    </div>
    
</div>
























  )
};

export default NavBar;