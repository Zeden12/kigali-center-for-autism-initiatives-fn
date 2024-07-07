import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";


const BottomNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="sticky bg-white top-[50px] z-10 flex justify-between items-center px-4 sm:px-[50px] lg:px-[100px] py-[7px]">
            <h1 className="font-poppins font-bold text-[20px]">
                KCA
            </h1>
            <nav>
                <ul className={`fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:static lg:flex lg:flex-row lg:gap-[50px] lg:translate-x-0 lg:bg-transparent lg:justify-end lg:items-center font-poppins`}>
                    <li className="lg:hidden absolute top-4 right-4">
                        <button onClick={toggleMenu}>
                            <IoClose className='text-[30px]'/>
                        </button>
                    </li>
                    <li className="my-4 lg:my-0 hover:text-[#FFC107]"><a href="#hero">Home</a></li>
                    <li className="my-4 lg:my-0 hover:text-[#FFC107]"><a href="#about">Who We Are</a></li>
                    <li className="my-4 lg:my-0 hover:text-[#FFC107]"><a href="#">Projects</a></li>
                    <li className="my-4 lg:my-0 hover:text-[#FFC107]"><a href="#">Blog</a></li>
                    <li className="my-4 lg:my-0 hover:text-[#FFC107]"><a href="#">Contact Us</a></li>
                    <li className="my-4 lg:my-0  lg:hidden bg-[#FFC107] text-white font-outfit px-[30px] py-[7px] rounded-[10px] hover:bg-white hover:border-[1px] hover:border-[#FFC107] hover:text-[#FFC107]"><a href="#">Donate</a></li>
                </ul>
            </nav>
            <button className="hidden lg:block bg-[#FFC107] text-white font-outfit px-[30px] py-[7px] rounded-[10px] hover:bg-white hover:border-[1px] hover:border-[#FFC107] hover:text-[#FFC107]">
                Donate
            </button>
            <div className="lg:hidden">
                <button onClick={toggleMenu}>
                    <IoMenu className='text-[30px]'/>
                </button>
            </div>
        </div>
  )
}

export default BottomNav;
