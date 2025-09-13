import React, { useState } from "react";
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
  const [showDonationModal, setShowDonationModal] = useState(false);

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
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-[#FFC107] transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-[#FFC107] rounded-full mr-2"></span>
                  Volunteer Opportunities
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('partners')}
                  className="text-gray-300 hover:text-[#FFC107] transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-[#FFC107] rounded-full mr-2"></span>
                  Partner With Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setShowDonationModal(true)}
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
          <button 
            onClick={() => setShowDonationModal(true)}
            className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
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

      {/* Donation Modal */}
      {showDonationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 flex items-center">
                  <FaHandHoldingHeart className="text-[#FFC107] mr-2" />
                  Support Our Mission
                </h3>
                <button
                  onClick={() => setShowDonationModal(false)}
                  className="text-gray-500 hover:text-gray-700 text-xl"
                >
                  ✕
                </button>
              </div>

              <div className="mb-6">
                <p className="text-gray-600 mb-4">
                  Your generosity helps us provide essential services and support to individuals with autism and their families.
                </p>
                <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-[#B68500] mb-2">How Your Donation Helps:</h4>
                  <ul className="text-sm text-[#B68500] space-y-1">
                    <li>• Therapy sessions for children with autism</li>
                    <li>• Parent training and support programs</li>
                    <li>• Community awareness campaigns</li>
                    <li>• Educational resources and materials</li>
                  </ul>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3">Select Donation Amount</h4>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[5000, 10000, 25000].map((amt) => (
                    <button
                      key={amt}
                      className="p-3 border border-[#FFC107] rounded-lg text-[#FFC107] hover:bg-[#FFC107] hover:text-white transition-colors"
                    >
                      {amt.toLocaleString()} RWF
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">Or enter custom amount:</span>
                  <input
                    type="number"
                    className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-[#FFC107] focus:border-[#FFC107]"
                    placeholder="Amount (RWF)"
                  />
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3">Your Information</h4>
                <div className="space-y-3">
                  <input type="text" placeholder="Full Name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#FFC107]" />
                  <input type="email" placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#FFC107]" />
                  <input type="tel" placeholder="Phone Number" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#FFC107]" />
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3">Payment Method</h4>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#FFC107]">
                  <option value="">Select payment method</option>
                  <option value="mobile">Mobile Money</option>
                  <option value="bank">Bank Transfer</option>
                  <option value="card">Credit/Debit Card</option>
                </select>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h4 className="font-semibold text-gray-700 mb-3">Other Ways to Donate</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Bank Transfer:</strong> KCA Account #: 000123456789</p>
                  <p><strong>Mobile Money:</strong> +250 784 499 986 (MTN)</p>
                  <p><strong>In Person:</strong> Visit our office at KG 06 Street Gasanze, Kigali</p>
                </div>
              </div>

              <div className="flex items-center mb-6">
                <input type="checkbox" id="anonymous" className="mr-2 h-4 w-4 text-[#FFC107] focus:ring-[#FFC107]" />
                <label htmlFor="anonymous" className="text-sm text-gray-700">
                  I would like to donate anonymously
                </label>
              </div>

              <button className="w-full bg-[#FFC107] text-white font-semibold py-3 rounded-lg hover:bg-[#E6AC00] transition-colors">
                Complete Donation
              </button>

              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500">
                  Your donation is secure and tax-deductible. We respect your privacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;