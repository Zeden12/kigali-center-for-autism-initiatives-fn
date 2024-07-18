import React from 'react'
import kcaBg from '../assets/kcaBg.svg'

const Hero = () => {
    
    const overlayStyle = {
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.34)', // Semi-transparent background
        backdropFilter: 'blur(3px)', // Adjust the blur value as needed
      };
      
      
        const bg = {
          backgroundImage: `url(${kcaBg})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: '100%',
          height: '100vh',
        };
      
  
      
  return (
    <div id='hero' style={bg} className=' '>
         <div style={overlayStyle} className='mx-auto px-4 flex flex-col justify-center items-center text-center font-poppins'>
            <h1 className='text-white font-semibold text-[40px]'>
            Kigali Center for <span className='text-[#FFC107]'>Autism</span> Initiatives
            </h1>
            <p className='text-white mt-4'>
            We are dedicated to fostering a supportive and inclusive environment for individuals with autism.
            </p>
            <div className='flex gap-[20px] mt-[30px]'>
                <button className='bg-[#FFC107] text-[13px] text-white px-[20px] py-[10px] rounded-[5px] hover:bg-transparent hover:border hover:border-[#FFC107] hover:text-[#FFC107]'>Donate now</button>
                <button className='bg-transparent border border-[#FFC107] text-[#FFC107] text-[13px] px-[20px] py-[10px] rounded-[5px] hover:bg-[#FFC107] hover:text-white'>Projects</button>
            </div>
         </div>
    </div>
  )
}

export default Hero