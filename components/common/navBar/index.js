import { useRouter } from 'next/router'


import SignIn from '../../signin/index';
import React, { useEffect, useState } from 'react';
import UserInfo from '../avatar/index';
import Link from 'next/link'
import SignInManager from '../../../plugins/signInManager';
function NavBar({ props }) {
    const [loginShow, setloginShow] = useState(false);
   // const [UserData, setUserData] = useState('');
    const [UserName, setUserName] = useState('');
    const [UserPhoto, setUserPhoto] = useState('');
    const router = useRouter();
    var signInManager =new SignInManager();
   
    const handleClick = (e) => {
        e.preventDefault()
        router.push({ pathname: '/about' })
    }

    const openModal = () => {
        setloginShow(true);
        console.log(loginShow, "aaaa")
    }
    const getUserdata = (user) => {
        if (user != null && user != undefined) {
            setUserName(user['profile']['name'])
            setUserPhoto(user['profile']['picture'])
        }
    }
    const signout = () => {
       
        signInManager.signOut();
        setUserName('');
        setUserPhoto('');
    }
    
     useEffect(()=>{
        var userData =signInManager.signinUserData();
        if(userData!='')
         {
             console.log("userdata",userData)
             getUserdata(userData);
         }
    }, []) 

    return (

        <div className="container mx-auto sticky top-0 z-40 bg-white">
            <div className="shadow-xs py-2 lg:py-2 z-50 relative">
                <div className="flex justify-between items-center">

                    <a href="/" className="p-2">
                        <img src="/logo/shopit-logos_black.png" className="w-28 sm:w-48 h-auto" alt="logo" />
                    </a>
                    {
                        loginShow ? <SignIn dialogClose={(userdata) => { setloginShow(false); getUserdata(userdata) }} /> : null
                    }

                    <div className="flex items-center">

                        <div className=" relative mx-auto text-gray-600 lg:block hidden">
                            <input
                                className="focus:ring-2 focus:ring-red-300 border-2 border-gray-300 bg-white h-10 pl-2 pr-8 w-96 rounded-lg text-sm focus:outline-none"
                                type="search" name="search" placeholder="Search" />
                            <button type="submit" className="absolute right-0 top-0 mt-3 mr-2" />


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
                            UserName !='' ? <UserInfo userPhoto={UserPhoto} /> : null
                        }

                        {/* <a href="/account/dashboard" className="border-2 transition-all border-transparent hover:border-primary rounded-full p-2 sm:p-4 group">
                            <img src="https://d33wubrfki0l68.cloudfront.net/f7d761469bf66852487412569632673f9d21d1f8/5e821/assets/img/icons/icon-user.svg" className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 block group-hover:hidden" alt="icon user" />
                            <img src="https://d33wubrfki0l68.cloudfront.net/813133414c7aa22b471f0e3efbe3ddfc3600d77e/3dc2c/assets/img/icons/icon-user-hover.svg" className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 hidden group-hover:block" alt="icon user hover" />
                        </a> */}
                        <Link href="/cart">
                            <a className="hidden lg:block border-2 transition-all border-transparent hover:border-primary rounded-full p-2 sm:p-4 ml-2 sm:ml-3 md:ml-5 lg:ml-8 group">

                                <img src="https://d33wubrfki0l68.cloudfront.net/16f4de05841e1eea2fbe536d4053b73f0ad85baf/77013/assets/img/icons/icon-cart.svg" className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 block group-hover:hidden" alt="icon cart" />
                                <img src="https://d33wubrfki0l68.cloudfront.net/bcbeda5344e5934d7eaa7a3e7f6e86b78d79755b/6df24/assets/img/icons/icon-cart-hover.svg" className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 hidden group-hover:block" alt="icon cart hover" />
                            </a>
                        </Link>

                    </div>
                    <div className="hidden">
                        <i className="bx bx-menu text-primary text-3xl" ></i>
                    </div>
                </div>
                <div className="justify-center lg:pt-4 hidden lg:flex">
                    <ul className="list-reset flex items-center">

                        <li className="mr-10">
                            <a href="/" className="block text-lg font-hk hover:font-bold transition-all text-secondary hover:text-primary border-b-2 border-white hover:border-primary px-2">Home</a>
                        </li>
                        <li className="mr-10">
                            <a href="/products" className="block text-lg font-hk hover:font-bold transition-all text-secondary hover:text-primary border-b-2 border-white hover:border-primary px-2">Products</a>
                        </li>



                        <li className="mr-10">
                            <a href="/about" className="block text-lg font-hk hover:font-bold transition-all text-secondary hover:text-primary border-b-2 border-white hover:border-primary px-2">About</a>
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