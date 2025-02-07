import React from "react";
import about1 from "../assets/about1.svg";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ProjectPart = () => {
  return (
    <div id="project" className="px-4 md:px-16 py-10 text-center font-poppins">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 mt-16">
        Our <span className="text-[#FFC107]">Project</span>
      </h1>
      <p className="md:text-lg mb-8 max-w-3xl mx-auto text-lg">
        Our organization strives to create a world where people with autism can
        thrive and reach their fullest potential.
      </p>
      <div className="flex flex-wrap justify-between gap-4 md:gap-6 mx-4 md:mx-0">
        <div className="bg-white border border-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 w-full md:w-[31%]">
          <img
            src={about1}
            alt="project image"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <div className="flex flex-col md:flex-row justify-between items-start mb-6">
              <p className="text-xs text-gray-600">
                2024-08-01 <span className="text-yellow-500 font-bold">To</span>{" "}
                2024-10-01
              </p>
              <p className="text-xs text-gray-600">Kigali, Rwanda</p>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-2">Kigali Autism Forum</h2>
              <p className="text-gray-600 text-sm mb-6">
                We are dedicated to fostering a supportive and inclusive
                environment for individuals with autism.{" "}
                <Link to="/singproject" className="hover:text-yellow-500">
                  Read More{" "}
                  <span className="text-yellow-500 font-bold cursor-pointer">
                    →
                  </span>
                </Link>
              </p>
              <button className="bg-[#FFC107] text-white border border-[#FFC107] rounded px-8 py-2 text-sm hover:bg-white hover:text-[#F2BA12] transition-colors duration-500">
                Donate Now
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white border border-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 w-full md:w-[31%]">
          <img
            src={about1}
            alt="project image"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <div className="flex flex-col md:flex-row justify-between items-start mb-6">
              <p className="text-xs text-gray-600">
                2024-08-01 <span className="text-yellow-500 font-bold">To</span>{" "}
                2024-10-01
              </p>
              <p className="text-xs text-gray-600">Kigali, Rwanda</p>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-2">Kigali Autism Forum</h2>
              <p className="text-gray-600 text-sm mb-6">
                We are dedicated to fostering a supportive and inclusive
                environment for individuals with autism.{" "}
                <Link to="/singproject" className="hover:text-yellow-500">
                  Read More{" "}
                  <span className="text-yellow-500 font-bold cursor-pointer">
                    →
                  </span>
                </Link>
              </p>
              <button className="bg-[#FFC107] text-white border border-[#FFC107] rounded px-8 py-2 text-sm hover:bg-white hover:text-[#F2BA12] transition-colors duration-500">
                Donate Now
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white border border-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 w-full md:w-[31%]">
          <img
            src={about1}
            alt="project image"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <div className="flex flex-col md:flex-row justify-between items-start mb-6">
              <p className="text-xs text-gray-600">
                2024-08-01 <span className="text-yellow-500 font-bold">To</span>{" "}
                2024-10-01
              </p>
              <p className="text-xs text-gray-600">Kigali, Rwanda</p>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-2">Kigali Autism Forum</h2>
              <p className="text-gray-600 text-sm mb-6">
                We are dedicated to fostering a supportive and inclusive
                environment for individuals with autism.{" "}
                <Link to="/singproject" className="hover:text-yellow-500">
                  Read More{" "}
                  <span className="text-yellow-500 font-bold cursor-pointer">
                    →
                  </span>
                </Link>
              </p>
              <button className="bg-[#FFC107] text-white border border-[#FFC107] rounded px-8 py-2 text-sm hover:bg-white hover:text-[#F2BA12] transition-colors duration-500">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <Link to="/propage">
        <button className="text-[#FFC107] text-base flex justify-center items-center gap-2 font-poppins mt-10 mx-auto underline hover:text-[#F2BA12]">
          <span>View More Projects</span>
          <FaArrowRight />
        </button>
      </Link>
    </div>
  );
};

export default ProjectPart;
