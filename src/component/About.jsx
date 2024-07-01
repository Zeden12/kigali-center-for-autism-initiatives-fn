import React from 'react'
import about1 from '../assets/about1.svg'
import { FaArrowRight } from "react-icons/fa6";

const About = () => {

    const bg = {
        backgroundImage: `url(${about1})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderRadius:'10px',
        height:'100%',
      
        
      };
  return (
    <div className='mx-auto px-4 mt-[50px] flex flex-col md:px-[2.5rem] justify-center items-center text-center'>
        <h1 className='font-poppins text-[30px] font-bold'>Who We <span className='text-[#FFC107]'>Are</span></h1>
        <p className='font-poppins text-[13px]'>Our organization strives to create a world where people with autism can thrive and reach their fullest potential.</p>

       <div className='mt-[50px] justify-items-cente grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px] mx-auto md:px-4 '>
       <div style={bg} className=' mt-[30px] rounded-[10px] bg-black text-white hover:transition-transform hover:scale-105 duration-300  '>
            <div  className='w-[300px] h-[400px] px-4 relative top-[130px] text-left'>
                <h1 className='leading-[27px] font-teko text-[30px] font-semibold'>OUR<br />MISSION</h1>
                <p className='mt-[5px] text-[13px]'>
                To empower individuals with autism by providing comprehensive resources, personalized care, and innovative programs. Our aim is to support their development, enhance their quality of life, and promote inclusion and understanding within the community.
                </p>
                <button className='mt-[20px] text-[14px] flex justify-center items-center gap-2 text-[#FFC107] font-poppins'>More<FaArrowRight /></button>
            </div>
        </div>


        <div style={bg} className=' mt-[30px] rounded-[10px] bg-black text-white text-left hover:transition-transform hover:scale-105 duration-300'>
            <div  className='w-[300px] h-[400px] px-4 relative top-[130px]'>
                <h1 className='leading-[27px] font-teko text-[30px] font-semibold'>OUR<br />VISION</h1>
                <p className='mt-[5px] text-[13px]'>
                To create a world where individuals with autism are valued, included, and able to achieve their fullest potential. We envision a society where everyone understands and embraces the unique strengths and needs of those with autism                </p>
                <button className='mt-[20px] text-[14px] flex justify-center items-center gap-2 text-[#FFC107] font-poppins'>More<FaArrowRight /></button>
            </div>
        </div>

        <div style={bg} className=' mt-[30px] rounded-[10px] bg-black text-white text-left hover:transition-transform hover:scale-105 duration-300 '>
            <div  className='w-[300px] h-[400px] px-4 relative top-[130px]'>
                <h1 className='leading-[27px] font-teko text-[30px] font-semibold'>OUR<br />VALUES</h1>
                <p className='mt-[5px] text-[13px]'>
                We believe in creating a welcoming and supportive environment for all individuals with autism and their families.                </p>
                <button className='mt-[20px] text-[14px] flex justify-center items-center gap-2 text-[#FFC107] font-poppins'>More<FaArrowRight /></button>
            </div>
        </div>
       </div>
    </div>
  )
}

export default About