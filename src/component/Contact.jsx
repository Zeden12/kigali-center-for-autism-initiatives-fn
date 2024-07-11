import React from "react";
import banner from "../assets/banner.svg";
import flight from "../assets/flight.svg";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const Contact = () => {
  return (
    
     <div id="contact" className="my-[80px]  px-4 sm:px-[50px] lg:px-[100px]">
       <div
        className="relative bg-cover bg-center bg-no-repeat rounded-[20px] w-full h-[200px]"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute top-[10px] sm:left-[30px] lg:top-[20px] lg:left-[50px] m-4">
          <p className="font-poppins text-white md:w-[60%]">
          Your generosity lights the way to a brighter future for individuals with autism. Together, we can unlock potential and create endless possibilities.
          </p>

          <button className="font-poppins text-white border px-[15px] py-[10px] rounded-[5px] mt-[20px] hover:border hover:border-[#FFC107] hover:text-[#FFC107]">
            Donate now
          </button>
        </div>
      </div>


      <div className="mt-[80px] flex flex-col justify-center items-center text-center font-poppins">
        <h1 className=" text-[30px] font-bold mb-4">Get in Touch, We're Here to <span className="text-[#FFC107]">Help</span></h1>
        <p className="max-w-4xl">Whether you have questions, need more information, or want to get involved, our team at the KCA is here to assist you. Reach out to us today!</p>
      </div>

     <div className="flex flex-col justify-between items-center md:flex md:flex-row">
     <div className="flex flex-col text-left mt-[80px] shadow-2xl pb-[20px]">
        <img src={flight} alt="contact" className="w-[100%] h-[260px] rounded-t-[20px]" />
        <div className="flex items-center gap-[20px] mt-[20px] pl-[20px]">
        <FaPhoneAlt /><p>+ (250) 781 963 232</p>
        </div>
        <div className="flex items-center gap-[20px] mt-[20px] pl-[20px]">
        <MdEmail /><a href="#">info@kca.org</a>
        </div>
        <div className="flex items-center gap-[20px] mt-[20px] text-[23px] pl-[20px]">
        <a href="#" className="hover:text-[#FFC107]"><FaXTwitter /></a>
        <a href="#" className="hover:text-[#FFC107]"><FaInstagram /></a>
        <a href="#" className="hover:text-[#FFC107]"><FaYoutube /></a>
        <a href="#" className="hover:text-[#FFC107]"><FaLinkedin /></a>
        <a href="#" className="hover:text-[#FFC107]"><FaFacebookF /></a>
        </div>
      </div>

      <div className="mt-[80px]">
        <form className="flex flex-col font-poppins justify-center items-center text-center px-[20px] py-[30px] rounded-[10px] shadow-2xl">
          <input type="text" placeholder="Enter your names.." className="px-[10px] py-[10px] border border-[#adadad] rounded-[5px] mb-[20px] outline-[#FFC107] w-full" />
          <input type="text" placeholder="Enter your email.." className="px-[10px] py-[10px] border border-[#adadad] rounded-[5px] mb-[20px] outline-[#FFC107] w-full" />
          <textarea rows="4" cols="50" type="textarea" placeholder="Type your message.." className="px-[10px] py-[10px] border border-[#adadad] rounded-[5px] mb-[20px] outline-[#FFC107] w-full" />

          <button className="bg-[#FFC107] px-[15px] py-[10px] w-[200px] rounded-[5px] text-white mt-[50px] hover:bg-white hover:border hover:border-[#FFC107] hover:text-[#FFC107]">Send message</button>
        </form>
      </div>
     </div>
     </div>
  
  );
};

export default Contact;
