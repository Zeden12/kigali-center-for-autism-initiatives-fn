import React from 'react'
import england from '../assets/england.svg'
import frc from '../assets/frc.svg'
import rw from '../assets/rw.svg'
import logo from "../assets/logo.svg"

const TopNav = () => {
  return (
    <div className='sticky top-0 z-10 bg-[#FFC107] flex justify-between items-center px-4 sm:px-[50px] lg:px-[100px] py-[5px]'>
        <div>
           <img src={logo} alt="logo"  className='w-[40px] h-[40px]'/>
        </div>
        <div className=' gap-4 text-[13px] hidden md:flex'>
           <p>example@gmail.com</p>
           <p>+250780000000</p>
        </div>
        <div className='flex gap-[20px]'>
            <img src={england} alt="flag" className='w-[20px]' />
            <img src={rw} alt="flag" className='w-[20px]'  />
            <img src={frc} alt="flag" className='w-[20px]'  />
        </div>
    </div>
  )
}

export default TopNav