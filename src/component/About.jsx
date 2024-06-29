import React from 'react'
import about1 from '../assets/about1.svg'
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
    <div className='mx-auto px-4 mt-[100px] flex flex-col justify-center items-center text-center'>
        <h1 className='font-poppins text-[30px] font-bold'>Who We <span className='text-[#FFC107]'>Are</span></h1>
        <p className='font-poppins text-[13px]'>Our organization strives to create a world where people with autism can thrive and reach their fullest potential.</p>

       <div className='mt-[50px] justify-items-cente grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] mx-auto md:px-4 '>
       <div style={bg} className=' mt-[30px] rounded-[10px] bg-black text-white  '>
            <div  className='w-[250px] h-[400px] px-4 relative top-[130px] text-left'>
                <h1 className='leading-[27px] font-teko text-[30px] font-semibold'>OUR<br />MISSION</h1>
                <p className='mt-[5px] text-[13px]'>
                To empower individuals with autism by providing comprehensive resources, personalized care, and innovative programs. Our aim is to support their development, enhance their quality of life, and promote inclusion and understanding within the community.
                </p>
                <button className='mt-[20px]'>More</button>
            </div>
        </div>


        <div style={bg} className=' mt-[30px] rounded-[10px] bg-black text-white text-left '>
            <div  className='w-[250px] h-[400px] px-4 relative top-[130px]'>
                <h1 className='leading-[27px] font-teko text-[30px] font-semibold'>OUR<br />MISSION</h1>
                <p className='mt-[5px] text-[13px]'>
                To empower individuals with autism by providing comprehensive resources, personalized care, and innovative programs. Our aim is to support their development, enhance their quality of life, and promote inclusion and understanding within the community.
                </p>
                <button className='mt-[20px]'>More</button>
            </div>
        </div>

        <div style={bg} className=' mt-[30px] rounded-[10px] bg-black text-white text-left '>
            <div  className='w-[250px] h-[400px] px-4 relative top-[130px]'>
                <h1 className='leading-[27px] font-teko text-[30px] font-semibold'>OUR<br />MISSION</h1>
                <p className='mt-[5px] text-[13px]'>
                To empower individuals with autism by providing comprehensive resources, personalized care, and innovative programs. Our aim is to support their development, enhance their quality of life, and promote inclusion and understanding within the community.
                </p>
                <button className='mt-[20px]'>More</button>
            </div>
        </div>
       </div>
    </div>
  )
}

export default About