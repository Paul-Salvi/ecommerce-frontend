import { useRouter } from 'next/router'


function NavBar({ props }) {

    const router = useRouter();

    const handleClick = (e) => {
        e.preventDefault()
        router.push({ pathname: '/about' })
    }
    return (

        <div className="container relative">
            <div className="shadow-xs py-6 lg:py-10 z-50 relative">
                <div className="flex justify-between items-center">
                    <a href="/" className="p-4">
                        <img src="https://d33wubrfki0l68.cloudfront.net/23b5f665f19d2465fb9751d325b522bda9614e53/c3543/assets/img/logo-elyssi.svg" className="w-28 sm:w-48 h-auto" alt="logo" />
                    </a>
                    <div className="flex items-center">

                        <div className=" relative mx-auto text-gray-600 lg:block hidden">
                            <input
                                className="focus:ring-2 focus:ring-red-300 border-2 border-gray-300 bg-white h-10 pl-2 pr-8 w-96 rounded-lg text-sm focus:outline-none"
                                type="search" name="search" placeholder="Search" />
                            <button type="submit" className="absolute right-0 top-0 mt-3 mr-2" />


                        </div>
                    </div>

                    <div className="flex items-center">
                        <a href="#"
                            className="block text-md px-4 py-2 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0">Sign
                    in</a>
                        <a href="/account/dashboard" className="border-2 transition-all border-transparent hover:border-primary rounded-full p-2 sm:p-4 group">
                            <img src="https://d33wubrfki0l68.cloudfront.net/f7d761469bf66852487412569632673f9d21d1f8/5e821/assets/img/icons/icon-user.svg" className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 block group-hover:hidden" alt="icon user" />
                            <img src="https://d33wubrfki0l68.cloudfront.net/813133414c7aa22b471f0e3efbe3ddfc3600d77e/3dc2c/assets/img/icons/icon-user-hover.svg" className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 hidden group-hover:block" alt="icon user hover" />
                        </a>

                        <a href="/cart/index" className="hidden lg:block border-2 transition-all border-transparent hover:border-primary rounded-full p-2 sm:p-4 ml-2 sm:ml-3 md:ml-5 lg:ml-8 group">
                            <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg" className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 block group-hover:hidden" alt="icon cart" />
                            <img src="https://d33wubrfki0l68.cloudfront.net/bcbeda5344e5934d7eaa7a3e7f6e86b78d79755b/6df24/assets/img/icons/icon-cart-hover.svg" className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 hidden group-hover:block" alt="icon cart hover" />
                        </a>

                        <span className="block lg:hidden border-2 transition-all border-transparent hover:border-primary rounded-full p-2 sm:p-4 ml-2 sm:ml-3 md:ml-5 lg:ml-8 group">
                            <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg" className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 block group-hover:hidden" alt="icon cart" />
                            <img src="https://d33wubrfki0l68.cloudfront.net/bcbeda5344e5934d7eaa7a3e7f6e86b78d79755b/6df24/assets/img/icons/icon-cart-hover.svg" className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 hidden group-hover:block" alt="icon cart hover" />
                        </span>
                    </div>
                    <div className="hidden">
                        <i className="bx bx-menu text-primary text-3xl" ></i>
                    </div>
                </div>
                <div className="justify-center lg:pt-8 hidden lg:flex">
                    <ul className="list-reset flex items-center">


                        <li className="mr-10">
                            <a href="/products" className="block text-lg font-hk hover:font-bold transition-all text-secondary hover:text-primary border-b-2 border-white hover:border-primary px-2">products</a>
                        </li>



                        <li className="mr-10">
                            <a href="/about" className="block text-lg font-hk hover:font-bold transition-all text-secondary hover:text-primary border-b-2 border-white hover:border-primary px-2">About</a>
                        </li>



                        <li className="mr-10 hidden lg:block group">
                            <div className="border-b-2 border-white transition-colors group-hover:border-primary flex items-center">
                                <span className="cursor-pointer text-lg font-hk group-hover:font-bold text-secondary group-hover:text-primary px-2 transition-all">Collections</span>
                                <i className="bx bx-chevron-down text-secondary group-hover:text-primary pl-2 px-2 transition-colors"></i>
                            </div>
                            <div className="pt-10 absolute mt-40 top-0 left-0 right-0 z-50 w-2/3 mx-auto opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto ">
                                <div className="transition-all flex bg-white shadow-lg p-8 rounded-b relative ">

                                    <div className="flex-1 relative z-20">
                                        <h4 className="font-hkbold text-base text-secondary mb-2">Man</h4>
                                        <ul>

                                            <li>
                                                <a href="/collection-grid" className="text-sm font-hk text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Boots</a>
                                            </li>

                                            <li>
                                                <a href="/collection-grid" className="text-sm font-hk text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Blutcher Boot</a>
                                            </li>

                                            <li>
                                                <a href="/collection-grid" className="text-sm font-hk text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Chelsea Boot</a>
                                            </li>

                                            <li>
                                                <a href="/collection-grid" className="text-sm font-hk text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Chukka Boot</a>
                                            </li>

                                            <li>
                                                <a href="/collection-grid" className="text-sm font-hk text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Dress Boot</a>
                                            </li>

                                            <li>
                                                <a href="/collection-grid" className="text-sm font-hk text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Work Boot</a>
                                            </li>

                                        </ul>
                                    </div>

                                    <div className="flex-1 relative z-20">
                                        <h4 className="font-hkbold text-base text-secondary mb-2">Woman</h4>
                                        <ul>

                                            <li>
                                                <a href="/collection-grid" className="text-sm font-hk text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Accessories</a>
                                            </li>

                                            <li>
                                                <a href="/collection-grid" className="text-sm font-hk text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Belts</a>
                                            </li>

                                            <li>
                                                <a href="/collection-grid" className="text-sm font-hk text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Caps</a>
                                            </li>

                                            <li>
                                                <a href="/collection-grid" className="text-sm font-hk text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Laces</a>
                                            </li>

                                            <li>
                                                <a href="/collection-grid" className="text-sm font-hk text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Socks</a>
                                            </li>

                                        </ul>
                                    </div>

                                    <div className="flex-1 relative z-20">
                                        <h4 className="font-hkbold text-base text-secondary mb-2">Kids</h4>
                                        <ul>

                                            <li>
                                                <a href="/collection-grid" className="text-sm font-hk text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Shoes</a>
                                            </li>

                                            <li>
                                                <a href="/collection-grid" className="text-sm font-hk text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Derby Shoes</a>
                                            </li>

                                            <li>
                                                <a href="/collection-grid" className="text-sm font-hk text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Belts</a>
                                            </li>

                                            <li>
                                                <a href="/collection-grid" className="text-sm font-hk text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Caps</a>
                                            </li>

                                            <li>
                                                <a href="/collection-grid" className="text-sm font-hk text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Laces</a>
                                            </li>

                                            <li>
                                                <a href="/collection-grid" className="text-sm font-hk text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">Socks</a>
                                            </li>

                                        </ul>
                                    </div>

                                    <div className="flex-1">
                                        {/* <div className="z-0 bg-contain bg-right-bottom bg-no-repeat absolute inset-0" style="background-image: url(/assets/img/unlicensed/bg-mega-menu.png)">
                                </div> */}
                                        <div className="z-0 bg-contain bg-right-bottom bg-no-repeat absolute inset-0" >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>



                        <li className="mr-10">
                            <a href="/blog" className="block text-lg font-hk hover:font-bold transition-all text-secondary hover:text-primary border-b-2 border-white hover:border-primary px-2">Blog</a>
                        </li>



                        <li className="mr-10">
                            <a href="/contact#faq" className="block text-lg font-hk hover:font-bold transition-all text-secondary hover:text-primary border-b-2 border-white hover:border-primary px-2">FAQ</a>
                        </li>



                        <li className="mr-10">
                            <a href="/contact" className="block text-lg font-hk hover:font-bold transition-all text-secondary hover:text-primary border-b-2 border-white hover:border-primary px-2">Contact</a>
                        </li>


                    </ul>
                </div>
            </div>

        </div>
























    )
};

export default NavBar;