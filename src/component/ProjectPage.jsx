import React from "react";
import about1 from "../assets/about1.svg";
import banner from "../assets/banner.svg";
import { Link } from "react-router-dom";

const ProjectPage = () => {
  
  return (
    <div className='mx-auto px-4 mt-[20px] flex flex-col md:px-[2.5rem] justify-center items-center text-center'>
      <h1 className='font-poppins text-[30px] font-bold mb-4'>
        Our <span className='text-[#FFC107]'>Open</span> Project
      </h1>

      <div className='flex flex-col md:flex-row mt-[30px] items-center bg-gray-100 rounded-[10px] overflow-hidden shadow-lg w-full max-w-4xl'>
        <div className="relative w-full md:w-2/5 h-48 md:h-64 bg-cover bg-center rounded-t-[10px] md:rounded-l-[10px] md:rounded-r-none"
          style={{
            backgroundImage: `url(${about1})`,
          }}
        >
        </div>
        <div className='flex-1 p-6 text-left'>
          <h2 className='text-2xl font-bold mb-4'>Autism Awareness Campaign</h2>
          <p className='mb-4'>Our campaign focuses on raising awareness about autism spectrum disorders in various communities across Rwanda. We aim to educate and inform the public through workshops, seminars, and media campaigns.</p>
          <p className='mb-4'><strong>Date:</strong> 2024-08-01  --  2024-10-01</p>
          <p className='mb-4'><strong>Destination:</strong> Kigali, Rwanda</p>
          <div className='flex space-x-4'>
            <Link to='/singproject'>
            <button className='bg-black text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-black'>Read More</button>
            </Link>
            <button className='bg-[#FFC107] text-black font-bold py-2 px-4 rounded hover:bg-white hover:text-yellow-500'>Donate The Project</button>
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row-reverse mt-[30px] items-center bg-gray-100 rounded-[10px] overflow-hidden shadow-lg w-full max-w-4xl'>
      <div className="relative w-full md:w-2/5 h-48 md:h-64 bg-cover bg-center rounded-t-[10px] md:rounded-l-[10px] md:rounded-r-none"
          style={{
            backgroundImage: `url(${about1})`,
          }}
        >
        </div>
        <div className='flex-1 p-6 text-left'>
          <h2 className='text-2xl font-bold mb-4'>Autism Support Center</h2>
          <p className='mb-4'>The Autism Support Center provides resources and support for families and individuals affected by autism. Our services include counseling, educational programs, and skill development workshops.</p>
          <p className='mb-4'><strong>Date:</strong> 2024-08-01  --  2024-10-01</p>
          <p className='mb-4'><strong>Destination:</strong> Huye, South</p>
          <div className='flex space-x-4'>
            <button className='bg-black text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-black'>Read More</button>
            <button className='bg-[#FFC107] text-black font-bold py-2 px-4 rounded hover:bg-white hover:text-yellow-500'>Donate The Project</button>
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row mt-[30px] items-center bg-gray-100 rounded-[10px] overflow-hidden shadow-lg w-full max-w-4xl'>
      <div className="relative w-full md:w-2/5 h-48 md:h-64 bg-cover bg-center rounded-t-[10px] md:rounded-l-[10px] md:rounded-r-none"
          style={{
            backgroundImage: `url(${about1})`,
          }}
        >
        </div>
        <div className='flex-1 p-6 text-left'>
          <h2 className='text-2xl font-bold mb-4'>Autism Awareness Campaign</h2>
          <p className='mb-4'>Our campaign focuses on raising awareness about autism spectrum disorders in various communities across Rwanda. We aim to educate and inform the public through workshops, seminars, and media campaigns.</p>
          <p className='mb-4'><strong>Date:</strong> 2024-07-16  --  2024-09-16</p>
          <p className='mb-4'><strong>Destination:</strong> Kigali, Rwanda</p>
          <div className='flex space-x-4'>
            <button className='bg-black text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-black'>Read More</button>
            <button className='bg-[#FFC107] text-black font-bold py-2 px-4 rounded hover:bg-white hover:text-yellow-500'>Donate The Project</button>
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row-reverse mt-[30px] items-center bg-gray-100 rounded-[10px] overflow-hidden shadow-lg w-full max-w-4xl'>
      <div className="relative w-full md:w-2/5 h-48 md:h-64 bg-cover bg-center rounded-t-[10px] md:rounded-l-[10px] md:rounded-r-none"
          style={{
            backgroundImage: `url(${about1})`,
          }}
        >
        </div>
        <div className='flex-1 p-6 text-left'>
          <h2 className='text-2xl font-bold mb-4'>Autism Support Center</h2>
          <p className='mb-4'>The Autism Support Center provides resources and support for families and individuals affected by autism. Our services include counseling, educational programs, and skill development workshops.</p>
          <p className='mb-4'><strong>Date:</strong> 2024-08-01  --  2024-10-01</p>
          <p className='mb-4'><strong>Destination:</strong> Huye, South</p>
          <div className='flex space-x-4'>
            <button className='bg-black text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-black'>Read More</button>
            <button className='bg-[#FFC107] text-black font-bold py-2 px-4 rounded hover:bg-white hover:text-yellow-500'>Donate The Project</button>
          </div>
        </div>
      </div>

      <div
        className="relative bg-cover bg-center bg-no-repeat rounded-[20px] w-full h-[200px] mt-14"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute top-[10px] sm:left-[30px] lg:top-[20px] lg:left-[50px] m-4">
          <p className="font-poppins text-white md:w-[60%]">
          Your generosity lights the way to a brighter future for individuals with autism. Together, we can unlock potential and create endless possibilities.
          </p>

          <button className="font-poppins text-white border mx-auto px-[15px] py-[10px] rounded-[5px] mt-[20px] hover:border hover:border-[#FFC107] hover:text-[#FFC107]">
            Donate now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
