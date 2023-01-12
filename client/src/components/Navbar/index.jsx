import React from "react";
import {FaUserAlt} from "react-icons/fa";
import {HiLocationMarker} from "react-icons/hi"
import {IoMdArrowDropdown, IoMdArrowDropup} from "react-icons/io"
import {RiSearch2Line} from "react-icons/ri"

const MobileNav = () => {
    return (
        <div className="flex w-full items-center justify-between lg:hidden">
            <div className="w-28">
                <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                alt="logo"
                className="w-full h-full"
                />
            </div>
            <div className="flec items-center gap-3 relative">
                <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">
                    Use App
                </button>
            </div>
            <div className="border border-gray-300 text-zomato-400 w-9 h-9 rounded-full">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjqBSb7G_xg7xO4zfYh-WLGsINiMkv0rNpzAS5tJ5VetYJTlmN0WL__RsgrwlpYZRjgu8&usqp=CAU"
                 alt="avatarlogo"
                 className="w-full h-full rounded-full object-cover" />
            </div>
            <div>
                <div className="abolute shadow-lg py-3 -bottom-20 -right-4 w-full z-20 flex flex-col gap-2">
                    <button>Sign Out</button>
                </div>
            </div>
        </div>
    );
};

const Navbar = () =>{
    return(<>
    <MobileNav />
    </>)
}
    
export default Navbar;