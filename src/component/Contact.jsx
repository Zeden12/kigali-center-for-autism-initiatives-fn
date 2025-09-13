/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import banner from "../assets/banner.svg";
import flight from "../assets/flight.svg";
import { 
  FaPhoneAlt, FaMapMarkerAlt, FaClock, FaHandHoldingHeart 
} from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { 
  FaXTwitter, FaInstagram, FaLinkedin, FaFacebookF, FaYoutube 
} from "react-icons/fa6";

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
    console.log("Form submitted:", formData);
    // No alert, just reset form
    setFormData({ name: "", email: "", phone: "", message: "", subject: "General Inquiry" });
  };

  return (
    <div id="contact" className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      {/* Donation Banner */}
      <div
        className="relative bg-cover bg-center bg-no-repeat rounded-xl w-full h-56 mb-12 overflow-hidden"
        style={{ backgroundImage: `url(${banner})` }}
      >
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

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 font-poppins">
          Talk To Kigali Center for <span className="text-[#FFC107]">Autism</span> Initiatives
        </h1>
        <p className="md:text-lg mb-8 max-w-3xl mx-auto text-lg text-gray-600">
          We're here to answer your questions and help you get involved in our mission.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start mb-12 max-w-6xl mx-auto">
        {/* Contact Info */}
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
                438V+339, Gasabo District, Kigali, Rwanda
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
                {[FaFacebookF, FaXTwitter, FaInstagram, FaLinkedin, FaYoutube].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:text-white transition-all duration-200 hover:bg-[#FFC107]"
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-3/5 bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-bold mb-4 text-gray-800">Send us a <span className="text-[#FFC107]">Message</span></h3>

          <p className="text-gray-600 mb-4">
  Have a question, want to collaborate, or simply wish to share your thoughts with us? 
  Fill out the form below and our team will get back to you as soon as possible. 
  Whether it’s about support, volunteering, partnerships, or just saying hello, 
  we’d love to hear from you.
</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#FFC107]"
                placeholder="Full Name *"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#FFC107]"
                placeholder="Email *"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#FFC107]"
                placeholder="Phone *"
              />
              <select
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#FFC107]"
              >
                <option>General Inquiry</option>
                <option>Support Services</option>
                <option>Volunteering</option>
                <option>Partnership</option>
                <option>Donation</option>
              </select>
            </div>
            <textarea
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#FFC107]"
              placeholder="Your Message *"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#FFC107] text-white font-medium py-2 px-4 rounded text-sm hover:bg-[#E6AC00]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Google Map Embed */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-12 max-w-6xl mx-auto">
        <h3 className="text-lg font-bold mb-4 text-gray-800 flex items-center">
          <FaMapMarkerAlt className="text-[#FFC107] mr-2" />
          Find Us on Map
        </h3>
        <iframe
          title="Kigali Center for Autism Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.707682046!2d30.0619!3d-1.9441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca7b7b9e804d3%3A0x123456789!2s438V%2B339%2C%20Gasabo%2C%20Kigali!5e0!3m2!1sen!2srw!4v1694631234567"
          className="w-full h-72 rounded-lg border border-gray-200"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
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
                  <p><strong>Mobile Money:</strong> 0781 963 232 (MTN)</p>
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

export default Contact;
