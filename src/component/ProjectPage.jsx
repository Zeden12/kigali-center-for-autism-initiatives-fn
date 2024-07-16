import React from "react";
import about1 from "../assets/about1.svg";
import banner from "../assets/banner.svg";
import { Link } from "react-router-dom";

const ProjectPage = () => {
  return (
    <div className='mx-auto px-4 mt-8 md:px-8 flex flex-col gap-8 w-full max-w-5xl'>
      <h1 className='font-poppins text-2xl md:text-4xl font-bold text-center mb-8'>
        Our <span className='text-[#FFC107]'>Open</span> Projects
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center bg-gray-100 rounded-lg shadow-md w-full">
        <div
          className="relative w-full md:w-2/5 h-48 md:h-64 bg-cover bg-center rounded-t-lg md:rounded-l-lg md:rounded-r-none"
          style={{
            backgroundImage: `url(${about1})`,
          }}
        >
        </div>
        <div className="flex-1 p-6 text-left">
          <div className="mb-4">
            <p className="text-sm text-gray-600">
              <strong>Date:</strong> 2024-08-01 <span className="text-yellow-500 font-bold">To</span> 2024-10-01
            </p>
            <p className="text-sm text-gray-600">
              <strong>Destination:</strong> Kigali, Rwanda
            </p>
          </div>
          <h2 className="text-2xl font-bold mb-4">Autism Awareness Campaign</h2>
          <p className="mb-6 text-gray-700">
            Our campaign focuses on raising awareness about autism spectrum disorders in various communities across Rwanda. We aim to educate and inform the public through workshops, seminars, and media campaigns.
          </p>
          <div className="flex space-x-4">
            <Link to='/singproject'>
              <button className="bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-800">
                Read More
              </button>
            </Link>
            <button className="bg-[#FFC107] text-black font-bold py-2 px-4 rounded hover:bg-yellow-500">
              Donate The Project
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse justify-center items-center bg-gray-100 rounded-lg shadow-md w-full">
        <div
          className="relative w-full md:w-2/5 h-48 md:h-64 bg-cover bg-center rounded-t-lg md:rounded-r-lg md:rounded-l-none"
          style={{
            backgroundImage: `url(${about1})`,
          }}
        >
        </div>
        <div className="flex-1 p-6 text-left">
          <div className="mb-4">
            <p className="text-sm text-gray-600">
              <strong>Date:</strong> 2024-10-01 <span className="text-yellow-500 font-bold">To</span> 2024-12-31
            </p>
            <p className="text-sm text-gray-600">
              <strong>Destination:</strong> Kigali, Rwanda
            </p>
          </div>
          <h2 className="text-2xl font-bold mb-4">Autism Support Initiative</h2>
          <p className="mb-6 text-gray-700">
            Our initiative provides resources and support for families and individuals affected by autism. We offer counseling, training, and community outreach programs.
          </p>
          <div className="flex space-x-4">
            <Link to='/singproject'>
              <button className="bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-800">
                Read More
              </button>
            </Link>
            <button className="bg-[#FFC107] text-black font-bold py-2 px-4 rounded hover:bg-yellow-500">
              Donate The Project
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center bg-gray-100 rounded-lg shadow-md w-full">
        <div
          className="relative w-full md:w-2/5 h-48 md:h-64 bg-cover bg-center rounded-t-lg md:rounded-l-lg md:rounded-r-none"
          style={{
            backgroundImage: `url(${about1})`,
          }}
        >
        </div>
        <div className="flex-1 p-6 text-left">
          <div className="mb-4">
            <p className="text-sm text-gray-600">
              <strong>Date:</strong> 2024-07-16 <span className="text-yellow-500 font-bold">To</span> 2024-09-16
            </p>
            <p className="text-sm text-gray-600">
              <strong>Destination:</strong> Kigali, Rwanda
            </p>
          </div>
          <h2 className="text-2xl font-bold mb-4">Autism Awareness Campaign</h2>
          <p className="mb-6 text-gray-700">
            Our campaign focuses on raising awareness about autism spectrum disorders in various communities across Rwanda. We aim to educate and inform the public through workshops, seminars, and media campaigns.
          </p>
          <div className="flex space-x-4">
            <Link to='/singproject'>
              <button className="bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-800">
                Read More
              </button>
            </Link>
            <button className="bg-[#FFC107] text-black font-bold py-2 px-4 rounded hover:bg-yellow-500">
              Donate The Project
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse justify-center items-center bg-gray-100 rounded-lg shadow-md w-full">
        <div
          className="relative w-full md:w-2/5 h-48 md:h-64 bg-cover bg-center rounded-t-lg md:rounded-r-lg md:rounded-l-none"
          style={{
            backgroundImage: `url(${about1})`,
          }}
        >
        </div>
        <div className="flex-1 p-6 text-left">
          <div className="mb-4">
            <p className="text-sm text-gray-600">
              <strong>Date:</strong> 2024-09-01 <span className="text-yellow-500 font-bold">To</span> 2024-11-30
            </p>
            <p className="text-sm text-gray-600">
              <strong>Destination:</strong> Huye, South
            </p>
          </div>
          <h2 className="text-2xl font-bold mb-4">Autism Support Center</h2>
          <p className="mb-6 text-gray-700">
            The Autism Support Center provides resources and support for families and individuals affected by autism. Our services include counseling, educational programs, and skill development workshops.
          </p>
          <div className="flex space-x-4">
            <Link to='/singproject'>
              <button className="bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-800">
                Read More
              </button>
            </Link>
            <button className="bg-[#FFC107] text-black font-bold py-2 px-4 rounded hover:bg-yellow-500">
              Donate The Project
            </button>
          </div>
        </div>
      </div>

      <div
        className='relative bg-cover bg-center bg-no-repeat rounded-2xl w-full h-[200px] mt-14'
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className='top-10 left-8 md:left-16 lg:top-16 lg:left-24 m-4'>
          <p className='font-poppins text-white text-sm md:text-base lg:text-lg max-w-2xl mt-8 ml-8'>
            Your generosity lights the way to a brighter future for individuals with autism. Together, we can unlock potential and create endless possibilities.
          </p>
          <button className='font-poppins text-white border mx-auto px-4 py-2 rounded-md mt-4 hover:border-[#FFC107] hover:text-[#FFC107] ml-8'>
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
