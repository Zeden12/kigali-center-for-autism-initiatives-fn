import React, { useState } from 'react';
import { IoMenu, IoClose } from "react-icons/io5";

const BottomNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className='flex justify-between items-center mx-auto px-4 py-4 bg-white shadow-md'>
      <div className='flex items-center'>
        <h1 className='font-poppins font-bold text-lg'>KCA</h1>
      </div>

      <div className='relative'>
        <div onClick={toggleMenu} className='md:hidden text-2xl cursor-pointer'>
          {isMenuOpen ? <IoClose /> : <IoMenu />}
        </div>
      </div>

      <nav className={`font-poppins font-medium text-sm md:flex md:items-center md:gap-5 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        <ul className='flex flex-col md:flex-row md:gap-5'>
          <li className=' '><a href="#" className='hover:text-gray-700'>Home</a></li>
          <li className=' '><a href="#" className='hover:text-gray-700'>Who We Are</a></li>
          <li className=' '><a href="#" className='hover:text-gray-700'>Projects</a></li>
          <li className=' '><a href="#" className='hover:text-gray-700'>Blog</a></li>
          <li className=' '><a href="#" className='hover:text-gray-700'>Contact Us</a></li>
          <li className=' '><button className='bg-yellow-500 text-white px-5 py-2 rounded-md hover:bg-yellow-600 transition'>Donate</button></li>
        </ul>
      </nav>
    </div>
  )
}

export default BottomNav;
