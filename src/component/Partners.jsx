import React from 'react'
import Autism from '../assets/Autism.png'
import HelloWorld from '../assets/HelloWorld.png'
import microsoft from '../assets/microsoft.jpg'
import RBD from '../assets/RBD.jpg'
import RSSB from '../assets/RSSB.png'
import WaterAid from '../assets/WaterAid.png'
import '../App.css'

const Partners = () => {
  return (
    <div className='Part1 flex flex-col justify-center items-center  '>
      <h1>Our <span className='text-[#FFC107] font-poppins'> partners</span></h1>
      <p>More than 40  companies and institutions that trusts us over the year </p>

    <div className= 'grid grid-cols-5  mt-[80px] gap-[40px]' >
    <img src={HelloWorld} alt="" className='w-[90px]' />
    <img src={Autism} alt=""     className='w-[90px]'/> 
    <img src={HelloWorld} alt=""  className='w-[90px]'/>
    <img src={Autism} alt=""     className='w-[90px]'/> 
    <img src={HelloWorld} alt="" className='w-[90px]'/>
    <img src={microsoft} alt="" className='w-[90px]'/>
    <img src={RBD} alt=""    className='w-[90px]'/>
    <img src={RSSB} alt=""  className='w-[90px]'/>
    <img src={WaterAid} alt="" className='w-[90px]'/>
    <img src={HelloWorld} alt="" className='w-[90px]'/>
    </div>
      
    </div>
  )
}

export default Partners