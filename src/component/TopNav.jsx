import React from 'react'
import england from '../assets/england.svg'
import frc from '../assets/frc.svg'
import rw from '../assets/rw.svg'


const TopNav = () => {
  return (
    <div className='bg-[#FFC107] flex justify-between items-center py-[10px] mx-auto px-4'>
        <div>
            <h1>Logo</h1>
        </div>
        <div className='flex gap-4 text-[13px]'>
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