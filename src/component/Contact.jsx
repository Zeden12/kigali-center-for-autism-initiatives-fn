import React, { useState } from "react";
import banner from "../assets/banner.svg";
import flight from "../assets/flight.svg";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock, FaPaperPlane, FaDonate, FaHandHoldingHeart } from "react-icons/fa";
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
    <div id="contact" className="py-16 px-4 sm:px-8 lg:px-16 bg-gray-50">
      {/* Enhanced Donation Banner with More Yellow */}
      <div className="relative bg-cover bg-center bg-no-repeat rounded-2xl w-full h-72 mb-16 overflow-hidden"
        style={{ backgroundImage: `url(${banner})` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFC107] to-[#F2BA12] rounded-2xl flex flex-col justify-center items-center p-8 md:p-12 text-center">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
            <FaHandHoldingHeart className="text-white text-2xl" />
          </div>
          <h2 className="font-poppins text-white text-3xl md:text-4xl font-bold mb-4">
            Join Us in Making a Difference
          </h2>
          <p className="font-poppins text-white md:w-2/3 mb-6 text-lg">
            Your support transforms lives and creates opportunities for individuals with autism. 
            Together, we're building a more inclusive world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => setShowDonationModal(true)}
              className="bg-white text-[#FFC107] font-poppins font-medium px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center"
            >
              <FaDonate className="mr-2" />
              Make a Donation
            </button>
            <button className="bg-transparent border-2 border-white text-white font-poppins font-medium px-8 py-3 rounded-lg hover:bg-white hover:text-[#FFC107] transition-colors">
              Become a Volunteer
            </button>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="w-20 h-1 bg-[#FFC107] mx-auto mb-6"></div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">
          Get in <span className="text-[#FFC107]">Touch</span> With Us
        </h1>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto font-poppins">
          We're here to answer your questions, provide support, and help you get involved in our mission. 
          Reach out to us through any of the following channels.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-start mb-16">
        {/* Contact Information Card */}
        <div className="w-full lg:w-2/5 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="relative">
            <img src={flight} alt="Contact us" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
              <h3 className="text-white text-2xl font-bold">Kigali Center for Autism</h3>
            </div>
          </div>
          
          <div className="p-8">
            <div className="mb-6 bg-yellow-50 p-5 rounded-xl border-l-4 border-[#FFC107]">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <MdLocationOn className="text-[#FFC107] mr-2 text-xl" />
                Main Office
              </h4>
              <p className="text-gray-600 flex items-start">
                <FaMapMarkerAlt className="text-[#FFC107] mt-1 mr-3 flex-shrink-0" />
                KG 06 Street, Gasanze Sector<br />Gasabo District, Kigali, Rwanda
              </p>
            </div>

            <div className="space-y-5 mb-6">
              <div className="flex items-start">
                <FaPhoneAlt className="text-[#FFC107] mr-4 text-lg mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800">Phone Number</p>
                  <a href="tel:+250781963232" className="text-gray-600 hover:text-[#FFC107] transition-colors">
                    + (250) 781 963 232
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Primary contact</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MdEmail className="text-[#FFC107] mr-4 text-lg mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800">Email Address</p>
                  <a href="mailto:info@kca.org.rw" className="text-gray-600 hover:text-[#FFC107] transition-colors">
                    info@kca.org.rw
                  </a>
                  <p className="text-sm text-gray-500 mt-1">General inquiries</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaClock className="text-[#FFC107] mr-4 text-lg mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800">Office Hours</p>
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                  <p className="text-sm text-gray-500 mt-1">Closed on Sundays</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-6 border-t border-gray-100">
              <h4 className="font-semibold text-gray-800 mb-4">Connect With Us</h4>
              <div className="flex space-x-3">
                {[
                  { icon: <FaFacebookF />, color: "hover:bg-blue-600" },
                  { icon: <FaXTwitter />, color: "hover:bg-black" },
                  { icon: <FaInstagram />, color: "hover:bg-pink-600" },
                  { icon: <FaLinkedin />, color: "hover:bg-blue-800" },
                  { icon: <FaYoutube />, color: "hover:bg-red-600" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 transition-all duration-300 transform hover:scale-110 hover:text-white ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-3/5 bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-[#FFC107] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaPaperPlane className="text-[#FFC107] text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Send Us a Message</h3>
            <p className="text-gray-600">We'll respond within 24 hours</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC107] focus:border-[#FFC107] transition-colors"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC107] focus:border-[#FFC107] transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC107] focus:border-[#FFC107] transition-colors"
                  placeholder="+250 XXX XXX XXX"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC107] focus:border-[#FFC107] transition-colors"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Support Services">Support Services</option>
                  <option value="Volunteering">Volunteering Opportunities</option>
                  <option value="Partnership">Partnership Inquiry</option>
                  <option value="Donation">Donation Question</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
              <textarea
                rows={6}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFC107] focus:border-[#FFC107] transition-colors"
                placeholder="Tell us how we can help you..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#FFC107] text-white font-semibold py-4 px-6 rounded-lg hover:bg-[#E6AC00] transition-colors flex items-center justify-center text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform"
            >
              <FaPaperPlane className="mr-2" />
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Interactive Map Section - Moved Below */}
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 border border-gray-100">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#FFC107] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaMapMarkerAlt className="text-[#FFC107] text-2xl" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Visit Our Center</h3>
          <p className="text-gray-600">We're located in the heart of Kigali</p>
        </div>
        
        <div className="bg-gradient-to-br from-[#FFC107] to-[#F2BA12] rounded-xl h-96 mb-6 relative overflow-hidden flex items-center justify-center">
          <div className="text-center text-white p-8">
            <FaMapMarkerAlt className="text-4xl mx-auto mb-4" />
            <h4 className="text-2xl font-bold mb-2">Kigali Center for Autism</h4>
            <p className="text-lg mb-4">KG 06 Street, Gasanze Sector</p>
            <p className="text-lg mb-6">Gasabo District, Kigali, Rwanda</p>
            <a 
              href="https://www.google.com/maps/place/Kigali,+Rwanda"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#FFC107] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold inline-block"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>

      {/* Donation Modal */}
      {showDonationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  Support Our Cause
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
                  Your donation directly supports our programs and services for individuals with autism:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 pl-4">
                  <li>Therapy and intervention programs</li>
                  <li>Educational resources and training</li>
                  <li>Community awareness campaigns</li>
                  <li>Family support services</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3">Select Donation Amount</h4>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <button className="p-3 border border-[#FFC107] rounded-lg text-[#FFC107] hover:bg-[#FFC107] hover:text-white transition-colors">
                    5,000 RWF
                  </button>
                  <button className="p-3 border border-[#FFC107] rounded-lg text-[#FFC107] hover:bg-[#FFC107] hover:text-white transition-colors">
                    10,000 RWF
                  </button>
                  <button className="p-3 border border-[#FFC107] rounded-lg text-[#FFC107] hover:bg-[#FFC107] hover:text-white transition-colors">
                    25,000 RWF
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">Or enter amount:</span>
                  <input 
                    type="number" 
                    className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-[#FFC107] focus:border-[#FFC107]"
                    placeholder="Amount (RWF)"
                  />
                </div>
              </div>

              <button className="w-full bg-[#FFC107] text-white font-semibold py-3 rounded-lg hover:bg-[#E6AC00] transition-colors">
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