import React, { useState } from "react";
import banner from "../assets/banner.svg";
import flight from "../assets/flight.svg";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock, FaPaperPlane, FaDonate } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaXTwitter, FaInstagram, FaLinkedin, FaFacebookF, FaYoutube } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "General Inquiry"
  });

  const [showDonationModal, setShowDonationModal] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", message: "", subject: "General Inquiry" });
  };

  return (
    <div id="contact" className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      {/* Restored Original Donation Banner */}
      <div className="relative bg-cover bg-center bg-no-repeat rounded-xl w-full h-56 mb-12 overflow-hidden"
        style={{ backgroundImage: `url(${banner})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl flex flex-col justify-center items-start p-6 md:p-8">
          <h2 className="font-poppins text-white text-xl md:text-2xl font-bold mb-3">
            Support Our Mission
          </h2>
          <p className="font-poppins text-white md:w-2/3 mb-4 text-sm">
            Your generosity lights the way to a brighter future for individuals with autism. 
            Together, we can unlock potential and create endless possibilities.
          </p>
          <button 
            onClick={() => setShowDonationModal(true)}
            className="bg-[#FFC107] text-white font-poppins text-sm px-4 py-2 rounded hover:bg-[#E6AC00] transition-colors"
          >
            Donate Now
          </button>
        </div>
      </div>

      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 font-poppins">
          Get in <span className="text-[#FFC107]">Touch</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          We're here to answer your questions and help you get involved in our mission.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start mb-12 max-w-6xl mx-auto">
        {/* Contact Information Card */}
        <div className="w-full lg:w-2/5 bg-white rounded-xl shadow-md overflow-hidden">
          <img src={flight} alt="Contact us" className="w-full h-48 object-cover" />
          
          <div className="p-6">
            <h3 className="text-lg font-bold mb-4 text-gray-800 flex items-center">
              <MdLocationOn className="text-[#FFC107] mr-2" />
              Our Location
            </h3>
            
            <div className="mb-4 bg-gray-50 p-3 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2 text-sm">Main Office</h4>
              <p className="text-gray-600 text-sm flex items-start">
                <FaMapMarkerAlt className="text-[#FFC107] mt-1 mr-2 flex-shrink-0" />
                KG 06 Street, Gasanze Sector, Gasabo District, Kigali, Rwanda
              </p>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-start">
                <FaPhoneAlt className="text-[#FFC107] mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-800 text-sm">Phone Number</p>
                  <a href="tel:+250781963232" className="text-gray-600 text-sm hover:text-[#FFC107]">
                    + (250) 781 963 232
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MdEmail className="text-[#FFC107] mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-800 text-sm">Email Address</p>
                  <a href="mailto:info@kca.org.rw" className="text-gray-600 text-sm hover:text-[#FFC107]">
                    info@kca.org.rw
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaClock className="text-[#FFC107] mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-800 text-sm">Office Hours</p>
                  <p className="text-gray-600 text-sm">Mon-Fri: 8:00 AM - 5:00 PM</p>
                  <p className="text-gray-600 text-sm">Sat: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-4 border-t border-gray-100">
              <p className="font-medium text-gray-800 mb-3 text-sm">Follow Us</p>
              <div className="flex space-x-2">
                {[
                  { icon: <FaFacebookF size={14} />, color: "hover:bg-blue-600" },
                  { icon: <FaXTwitter size={14} />, color: "hover:bg-black" },
                  { icon: <FaInstagram size={14} />, color: "hover:bg-pink-600" },
                  { icon: <FaLinkedin size={14} />, color: "hover:bg-blue-800" },
                  { icon: <FaYoutube size={14} />, color: "hover:bg-red-600" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 transition-all duration-200 hover:text-white ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form - More Compact */}
        <div className="w-full lg:w-3/5 bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-bold mb-4 text-gray-800">Send us a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#FFC107] focus:border-[#FFC107]"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#FFC107] focus:border-[#FFC107]"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#FFC107] focus:border-[#FFC107]"
                  placeholder="+250 XXX XXX XXX"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Subject *</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#FFC107] focus:border-[#FFC107]"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Support Services">Support Services</option>
                  <option value="Volunteering">Volunteering</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Donation">Donation</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Message *</label>
              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#FFC107] focus:border-[#FFC107]"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#FFC107] text-white font-medium py-2 px-4 rounded text-sm hover:bg-[#E6AC00] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Google Maps Style Section */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-12 max-w-6xl mx-auto">
        <h3 className="text-lg font-bold mb-4 text-gray-800 flex items-center">
          <FaMapMarkerAlt className="text-[#FFC107] mr-2" />
          Find Us on Map
        </h3>
        
        <div className="bg-gray-100 rounded-lg h-64 mb-4 relative overflow-hidden border border-gray-200">
          {/* Google Maps Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#FFC107] rounded-full flex items-center justify-center mx-auto mb-2">
                <FaMapMarkerAlt className="text-white text-xl" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-1">Kigali Center for Autism</h4>
              <p className="text-gray-600 text-sm mb-3">KG 06 Street, Gasanze, Kigali</p>
              <div className="bg-white rounded-full px-3 py-1 inline-block border">
                <span className="text-xs text-gray-600">📍 GPS: -1.9441, 30.0619</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <a 
            href="https://goo.gl/maps/example"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FFC107] text-white text-sm px-4 py-2 rounded hover:bg-[#E6AC00] transition-colors"
          >
            Open in Google Maps
          </a>
        </div>
      </div>

      {/* Donation Modal */}
      {showDonationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-sm w-full">
            <div className="p-5">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-gray-800">Make a Donation</h3>
                <button 
                  onClick={() => setShowDonationModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <div className="mb-4">
                <p className="text-gray-600 text-sm mb-3">
                  Your support helps us continue our important work.
                </p>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  <button className="p-2 border border-[#FFC107] rounded text-[#FFC107] text-sm hover:bg-[#FFC107] hover:text-white">
                    5,000 RWF
                  </button>
                  <button className="p-2 border border-[#FFC107] rounded text-[#FFC107] text-sm hover:bg-[#FFC107] hover:text-white">
                    10,000 RWF
                  </button>
                  <button className="p-2 border border-[#FFC107] rounded text-[#FFC107] text-sm hover:bg-[#FFC107] hover:text-white">
                    25,000 RWF
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <input 
                    type="number" 
                    className="flex-1 p-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#FFC107]"
                    placeholder="Other amount"
                  />
                </div>
              </div>

              <button className="w-full bg-[#FFC107] text-white text-sm py-2 rounded hover:bg-[#E6AC00]">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;