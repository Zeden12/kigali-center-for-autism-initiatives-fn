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
    <div className='Part1 flex flex-col justify-center items-center  text-center'>
      <h1 className="text-2xl md:text-3xl font-bold mb-4 mt-4">
        Our <span className="text-[#FFC107]">Esteemed </span> Partners
      </h1>
      <p className="md:text-lg mb-2 max-w-3xl mx-auto text-lg">We proudly collaborate with over 10 companies and institutions in our fight against autism. Join us in making a difference! </p>

    <div className= 'grid grid-cols-6  mt-[80px] gap-[40px]' >
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
    <img src={HelloWorld} alt="" className='w-[90px]'/>
    <img src={HelloWorld} alt="" className='w-[90px]'/>
    </div>
      
    </div>
  )
}

export default Partners