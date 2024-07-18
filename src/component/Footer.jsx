import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-yellow-500 text-black w-full flex flex-col mt-16">
      <div className="flex flex-col md:flex-row text-left">
        <div className="w-full md:w-1/3 p-4 md:p-10">
          <h3 className="mb-4 underline">ABOUT US</h3>
          <p><a href="#about-us" className="text-black hover:text-yellow-900">Who we are</a></p>
          <p><a href="#about-us" className="text-black hover:text-yellow-900">Mission & Vision & Values</a></p>
          <p><a href="#about-us" className="text-black hover:text-yellow-900">Read Blogs</a></p>
          <p><a href="#about-us" className="text-black hover:text-yellow-900">Former & Offices</a></p>
          <p><a href="#about-us" className="text-black hover:text-yellow-900">Police & Guidelines</a></p>
          <p><a href="#about-us" className="text-black hover:text-yellow-900">FAQ</a></p>
        </div>
        <div className="w-full md:w-2/5 p-4 md:p-10">
          <h3 className="mb-4 underline">PARTICIPATE</h3>
          <p><a href="#about-us" className="text-black hover:text-yellow-900">Participate In Our Project</a></p>
          <p><a href="#about-us" className="text-black hover:text-yellow-900">Our Partners</a></p>
          <p><a href="#about-us" className="text-black hover:text-yellow-900">Our Members</a></p>
          <p>Register and Get informed about our project</p>
          <input type="text" placeholder="Enter your email.." className="bg-yellow-500 border border-black rounded p-2 mt-2 mr-2"/>
          <button className="bg-yellow-500 border border-black rounded p-2 mt-2 hover:bg-yellow-900 hover:text-white">Register Now</button>
        </div>
        <div className="w-full md:w-1/4 p-4 md:p-10">
          <h3 className="mb-4 underline">GET IN TOUCH</h3>
          <div className="mb-4">
            <p><a href="#" className="text-black hover:text-yellow-900">KG 06 street Gasanze, Kigali</a></p>
            <p><a href="mailto:info@kca.org.rw" className="text-black hover:text-yellow-900">info@kca.org.rw</a></p>
            <p><a href="#" className="text-black hover:text-yellow-900">+(250) 781 963 232</a></p>
            <p><a href="#" className="text-black hover:text-yellow-900">PO BOX 4285 Kigali-Rwanda</a></p>
            <p>Connect with KCA on socials:</p>
          </div>
          <div className="flex space-x-4">
            <FontAwesomeIcon icon={faTwitter} className="text-2xl cursor-pointer hover:text-yellow-900" />
            <FontAwesomeIcon icon={faInstagram} className="text-2xl cursor-pointer hover:text-yellow-900" />
            <FontAwesomeIcon icon={faYoutube} className="text-2xl cursor-pointer hover:text-yellow-900" />
            <FontAwesomeIcon icon={faLinkedin} className="text-2xl cursor-pointer hover:text-yellow-900" />
            <FontAwesomeIcon icon={faFacebook} className="text-2xl cursor-pointer hover:text-yellow-900" />
          </div>
        </div>
      </div>
      <div className="text-center bg-yellow-600 p-4">
        <h5 className="mt-2">Copyright © Kigali Center for Autism Initiatives - KCA. All Rights Reserved</h5>
        <p className="mt-1">developed by Umucyo<span className="text-yellow-900">Hub</span>.Net</p>
      </div>
    </div>
  );
};

export default Footer;
