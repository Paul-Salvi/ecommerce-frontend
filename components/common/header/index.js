import { useRouter } from 'next/router'
import SignIn from '../../signin/index';
import React, { useEffect, useState } from 'react';
import UserInfo from '../avatar/index';
import Link from 'next/link'
import SignInManager from '../../../plugins/signInManager';
import ProductSearch from '../productSearch/index';
import { set } from 'react-hook-form';
function NavBar({ props }) {
    const [login, setLogin] = useState(false);
    // const [UserData, setUserData] = useState('');
    const [UserName, setUserName] = useState('');
    const [UserPhoto, setUserPhoto] = useState('');
    const router = useRouter();
    var signInManager = new SignInManager();
   
    const handleClick = (e) => {
        e.preventDefault()
        router.push({ pathname: '/about' })
    }
    
    const openModal = () => {
        var modal = document.getElementById("signinModal");
        modal.style.display = "block";
    }
    const getUserdata = (status,user) => {
        if (status=true) {
            setUserName(user['profile']['name'])
            setUserPhoto(user['profile']['picture'])
            setLogin(true)
        }
    }
    const signout = () => {

        signInManager.signOut();
        setUserName('');
        setUserPhoto('');
        setLogin(false)
    }
    const NavigateCategory = (name) => {
        
              router.push({
                 pathname: '/products',
                 query: { name: name },
              });
     }
    useEffect(() => {
        var userData = signInManager.signinUserData();
        if (userData != '' && userData != undefined) {
            setUserName(userData['profile']['name'])
            setUserPhoto(userData['profile']['picture'])
            setLogin(true)
        }
    }, [])
    return (

        <div className="container mx-auto sticky top-0 z-40 bg-white">
          
            <div className="shadow-xs py-2 lg:py-2 z-50 relative">
                <div className="flex justify-between items-center">

                    <a href="/" className="p-2">
                        <img src="/logo/shopit-logos_black.png" className="w-20 sm:w-32 h-auto" alt="logo" />
                    </a>
                    {/* {
                        loginShow ? <SignIn dialogClose={(userdata) => { setloginShow(false); getUserdata(userdata) }} /> : null
                    } */}

             <SignIn userSignInStatus={(status,info) => { getUserdata(status,info)} } />
                   
                    <div className="flex items-center">

                        <div className=" relative mx-auto text-gray-600 lg:block hidden">
                            <ProductSearch />
                        </div>
                    </div>

                    <div className="flex items-center">
                        {
                            UserName == '' ? <a onClick={openModal}
                                className="block text-md px-4 py-2 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0">Sign
                in</a>
                                :
                                // <span
                                //     className="block text-3xl px-4 py-2 mb-2">{UserName}</span>
                                <a onClick={signout}
                                    className="block text-md px-4 py-2 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0">Signout</a>
                        }

                        {
                            UserName != '' ? <UserInfo userPhoto={UserPhoto} /> : null
                        }

                        {/* <a href="/account/dashboard" className="border-2 transition-all border-transparent hover:border-primary rounded-full p-2 sm:p-4 group">
                            <img src="https://d33wubrfki0l68.cloudfront.net/f7d761469bf66852487412569632673f9d21d1f8/5e821/assets/img/icons/icon-user.svg" className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 block group-hover:hidden" alt="icon user" />
                            <img src="https://d33wubrfki0l68.cloudfront.net/813133414c7aa22b471f0e3efbe3ddfc3600d77e/3dc2c/assets/img/icons/icon-user-hover.svg" className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 hidden group-hover:block" alt="icon user hover" />
                        </a> */}
                        <Link href="/cart" >
                            <a className="hidden lg:block border-2 transition-all border-transparent hover:border-primary rounded-full p-2 sm:p-4 ml-2 sm:ml-3 md:ml-5 lg:ml-8 group">

                                <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg" className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 block group-hover:hidden" alt="icon cart" />
                                <img src="https://d33wubrfki0l68.cloudfront.net/bcbeda5344e5934d7eaa7a3e7f6e86b78d79755b/6df24/assets/img/icons/icon-cart-hover.svg" className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 hidden group-hover:block" alt="icon cart hover" />
                            </a>
                        </Link>
                        <Link href="/wishlist">
                            <a className="hidden lg:block border-2 transition-all border-transparent hover:border-primary rounded-full p-2 sm:p-4 ml-2 sm:ml-3 md:ml-5 lg:ml-8 group">
                                <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2018/240/iconmonstr-heart-thin.png" className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 block group-hover:hidden" alt="icon cart" />
                                <img src="https://d33wubrfki0l68.cloudfront.net/bcbeda5344e5934d7eaa7a3e7f6e86b78d79755b/6df24/assets/img/icons/icon-cart-hover.svg" className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 hidden group-hover:block" alt="icon cart hover" />
                            </a>
                        </Link>
                    </div>
                   
                </div>
                <div className="justify-center lg:pt-1 hidden lg:flex">
                    <ul className="list-reset flex items-center">

                        <li className="mx-16 cursor-pointer">
                        <UserInfo userPhoto="/images/mens_cloth.jpg"/>
                            <a onClick={()=>{NavigateCategory('men')}} className="  block text-lg font-hk hover:font-bold transition-all text-secondary hover:text-primary border-b-2 border-white hover:border-primary ml-2">Men </a>
                        </li>
                        <li className="mx-16 cursor-pointer">
                        <UserInfo userPhoto="/images/women_cloth.jpg"/>
                            <a onClick={()=>{NavigateCategory('women')}} className="block text-lg font-hk hover:font-bold transition-all text-secondary hover:text-primary border-b-2 border-white hover:border-primary ml-2">Women </a>
                        </li>



                        <li className="mx-16 cursor-pointer">
                        <UserInfo userPhoto="/images/kids_cloth.jpg" />
                            <a  onClick={()=>{NavigateCategory('kids')}} className="block text-lg font-hk hover:font-bold transition-all text-secondary hover:text-primary border-b-2 border-white hover:border-primary ml-2">Kids</a>
                        </li>

                        <li className="mx-16 cursor-pointer">
                        <UserInfo userPhoto="/images/footware.jpg"/>
                            <a onClick={()=>{NavigateCategory('footware')}} className="block text-lg font-hk hover:font-bold transition-all text-secondary hover:text-primary border-b-2 border-white hover:border-primary ml-2">Footware</a>
                        </li>



                        <li className="mx-16 cursor-pointer">
                        <UserInfo userPhoto="/images/bags.jpg" />
                            <a onClick={()=>{NavigateCategory('bags')}} className="block text-lg font-hk hover:font-bold transition-all text-secondary hover:text-primary border-b-2 border-white hover:border-primary ml-2">Bags</a>
                        </li>


                    </ul>
                </div>
            </div>

        </div>
    )
}

export default NavBar;