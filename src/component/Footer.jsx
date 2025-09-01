import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FaHeart, FaHandHoldingHeart, FaUsers, FaBook, FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  // Function to scroll to sections
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-900 text-white w-full">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#FFC107] mb-4 flex items-center">
              <FaHeart className="mr-2" /> ABOUT US
            </h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-[#FFC107] transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-[#FFC107] rounded-full mr-2"></span>
                  Who We Are
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-[#FFC107] transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-[#FFC107] rounded-full mr-2"></span>
                  Mission & Vision
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('programs')}
                  className="text-gray-300 hover:text-[#FFC107] transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-[#FFC107] rounded-full mr-2"></span>
                  Our Programs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('team')}
                  className="text-gray-300 hover:text-[#FFC107] transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-[#FFC107] rounded-full mr-2"></span>
                  Our Team
                </button>
              </li>
            </ul>
          </div>

          {/* Programs Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#FFC107] mb-4 flex items-center">
              <FaHandHoldingHeart className="mr-2" /> OUR WORK
            </h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('programs')}
                  className="text-gray-300 hover:text-[#FFC107] transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-[#FFC107] rounded-full mr-2"></span>
                  Consultancy & Therapy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('programs')}
                  className="text-gray-300 hover:text-[#FFC107] transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-[#FFC107] rounded-full mr-2"></span>
                  Research & Innovation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('programs')}
                  className="text-gray-300 hover:text-[#FFC107] transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-[#FFC107] rounded-full mr-2"></span>
                  Community Outreach
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('events')}
                  className="text-gray-300 hover:text-[#FFC107] transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-[#FFC107] rounded-full mr-2"></span>
                  Events & Trainings
                </button>
              </li>
            </ul>
          </div>

          {/* Get Involved Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#FFC107] mb-4 flex items-center">
              <FaUsers className="mr-2" /> GET INVOLVED
            </h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('get-involved')}
                  className="text-gray-300 hover:text-[#FFC107] transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-[#FFC107] rounded-full mr-2"></span>
                  Volunteer Opportunities
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('get-involved')}
                  className="text-gray-300 hover:text-[#FFC107] transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-[#FFC107] rounded-full mr-2"></span>
                  Partner With Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    // This would typically open a donation modal or scroll to donation section
                    const donateBtn = document.querySelector('button:contains("Donate")');
                    if (donateBtn) donateBtn.click();
                  }}
                  className="text-gray-300 hover:text-[#FFC107] transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-[#FFC107] rounded-full mr-2"></span>
                  Make a Donation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('events')}
                  className="text-gray-300 hover:text-[#FFC107] transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-[#FFC107] rounded-full mr-2"></span>
                  Attend Events
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#FFC107] mb-4 flex items-center">
              <FaPhone className="mr-2" /> CONTACT US
            </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-[#FFC107] mt-1 mr-3" />
                <span className="text-gray-300">KG 06 Street Gasanze, Kigali, Rwanda</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-[#FFC107] mr-3" />
                <a href="mailto:info@kca.org.rw" className="text-gray-300 hover:text-[#FFC107] transition-colors">
                  info@kca.org.rw
                </a>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-[#FFC107] mr-3" />
                <a href="tel:+250781963232" className="text-gray-300 hover:text-[#FFC107] transition-colors">
                  +(250) 781 963 232
                </a>
              </div>
              <div className="flex items-start">
                <FaBook className="text-[#FFC107] mt-1 mr-3" />
                <span className="text-gray-300">PO BOX 4285 Kigali-Rwanda</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-4">
              <p className="text-gray-400 mb-3">Follow Us:</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-[#FFC107] transition-colors">
                  <FontAwesomeIcon icon={faFacebook} className="text-xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#FFC107] transition-colors">
                  <FontAwesomeIcon icon={faTwitter} className="text-xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#FFC107] transition-colors">
                  <FontAwesomeIcon icon={faInstagram} className="text-xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#FFC107] transition-colors">
                  <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#FFC107] transition-colors">
                  <FontAwesomeIcon icon={faYoutube} className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Donation CTA Section */}
      <div className="bg-[#FFC107] py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Support Our Mission
          </h3>
          <p className="text-gray-800 mb-6 max-w-2xl mx-auto">
            Your donation helps us provide essential services and support to individuals with autism and their families.
          </p>
          <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
            Donate Now
          </button>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-gray-800 py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-2 md:mb-0">
              © {new Date().getFullYear()} Kigali Center for Autism Initiatives - KCA. All Rights Reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Kigali Center for <span className="text-[#FFC107]">Autism</span> Initiatives
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;