import React from 'react';
import about1 from '../assets/about1.svg';
import banner from '../assets/banner.svg';
import { Link } from 'react-router-dom';

const SingleProjectPage = () => {
  return (
    <div className='mx-auto px-4 mt-8 md:px-8 flex flex-col gap-8 w-full max-w-5xl'>
      <div
        className='relative bg-cover bg-center bg-no-repeat rounded-2xl w-full h-[250px]'
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className='absolute top-10 left-8 md:left-16 lg:top-16 lg:left-24 m-4'>
          <h1 className='font-poppins text-white text-3xl md:text-5xl lg:text-6xl font-bold'>
            Autism Awareness Campaign
          </h1>
        </div>
      </div>

      <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
        <div className='flex flex-col items-center'>
          <div
            className='relative w-full h-48 md:h-64 bg-cover bg-center rounded-lg mb-6'
            style={{ backgroundImage: `url(${about1})` }}
          >
          </div>
          <div className='text-left'>
            <div className='flex flex-col md:flex-row justify-between items-start mb-6'>
              <p className='text-sm text-gray-600'>
                <strong>Date:</strong> 2024-08-01 <span className='text-yellow-500 font-bold'>To</span> 2024-10-01
              </p>
              <p className='text-sm text-gray-600'>
                <strong>Destination:</strong> Kigali, Rwanda
              </p>
            </div>
            <h2 className='text-2xl font-bold mb-4'>Autism Awareness Campaign</h2>
            <p className='mb-6 text-gray-700'>
              Our campaign focuses on raising awareness about autism spectrum disorders in various communities across Rwanda. We aim to educate and inform the public through workshops, seminars, and media campaigns. We also plan to work closely with local schools, healthcare providers, and community organizations to create a comprehensive approach to autism awareness and support.
            </p>
            <p className='mb-6 text-gray-700'>
              <strong>Goals:</strong> Increase understanding of autism, reduce stigma, and provide resources for affected individuals and families.
            </p>
            <p className='mb-6 text-gray-700'>
              <strong>Achievements:</strong> To conduct 10 workshops, reach over 1000 individuals, and partnered with local organizations.
            </p>
            <p className='mb-6 text-gray-700'>
              Our efforts will include:
              <ul className='list-disc list-inside ml-5 mt-4'>
                <li><strong>Educational Workshops:</strong> Offering a series of workshops for parents, teachers, and community members to better understand autism spectrum disorders, including symptoms, challenges, and strategies for support.</li>
                <li><strong>Public Seminars:</strong> Hosting seminars with experts in the field to discuss the latest research, treatment options, and success stories. These seminars will be open to the general public to increase community involvement and awareness.</li>
                <li><strong>Media Campaigns:</strong> Launching a media campaign that includes social media outreach, radio spots, and local news features to reach a wider audience and share important information about autism.</li>
                <li><strong>Resource Distribution:</strong> Providing informational brochures, books, and online resources for families and individuals affected by autism. These materials will offer practical advice and direct individuals to additional sources of support.</li>
                <li><strong>Community Events:</strong> Organizing events such as charity runs, awareness walks, and family-friendly activities to bring attention to autism awareness while fostering a sense of community and solidarity.</li>
              </ul>
            </p>
            <p className='text-gray-700'>
              Our goal is not only to raise awareness but also to foster a supportive environment for individuals and families affected by autism. We believe that through education, open dialogue, and community engagement, we can make a significant impact on the lives of those affected by autism spectrum disorders.
            </p>
            <div className='flex flex-col md:flex-row gap-4 justify-center mt-6'>
              <button className='bg-[#FFC107] text-black font-bold py-2 px-4 rounded hover:bg-yellow-500'>
                Donate This Project
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='flex gap-4 justify-center mt-8'>
        <Link to='/propage'>
          <button className='bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-800'>
            Back to All Projects
          </button>
        </Link>
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

export default SingleProjectPage;
