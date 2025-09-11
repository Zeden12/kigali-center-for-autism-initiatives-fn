import { useState } from 'react';
import kcaBg from '../assets/kcaBg.svg';
import { FaHandHoldingHeart, FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  const [showDonationModal, setShowDonationModal] = useState(false);
  
  const overlayStyle = {
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.34)',
    backdropFilter: 'blur(3px)',
  };
  
  const bg = {
    backgroundImage: `url(${kcaBg})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '100vh',
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div id='hero' style={bg} className='relative'>
        <div style={overlayStyle} className='mx-auto px-4 flex flex-col justify-center items-center text-center font-poppins'>
          <h1 className='text-white font-bold text-3xl md:text-4xl lg:text-5xl mb-4'>
            Kigali Center for <span className='text-[#FFC107]'>Autism</span> Initiatives
          </h1>
          <p className='text-white text-lg md:text-xl max-w-2xl mb-8'>
            We are dedicated to fostering a supportive and inclusive environment for individuals with autism.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 mt-8'>
            <button 
              onClick={() => setShowDonationModal(true)}
              className='bg-[#FFC107] text-white px-6 py-3 rounded-lg hover:bg-[#E6AC00] transition-colors flex items-center justify-center font-semibold'
            >
              <FaHandHoldingHeart className="mr-2" />
              Donate Now
            </button>
            <button 
              onClick={() => scrollToSection('programs')}
              className='bg-transparent border-2 border-[#FFC107] text-[#FFC107] px-6 py-3 rounded-lg hover:bg-[#FFC107] hover:text-white transition-colors flex items-center justify-center font-semibold'
            >
              What We Do
              <FaArrowRight className="ml-2" />
            </button>
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
                  <input 
                    type="text" 
                    placeholder="Full Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#FFC107] focus:border-[#FFC107]"
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#FFC107] focus:border-[#FFC107]"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#FFC107] focus:border-[#FFC107]"
                  />
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3">Payment Method</h4>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#FFC107] focus:border-[#FFC107]">
                  <option value="">Select payment method</option>
                  <option value="mobile">Mobile Money</option>
                  <option value="bank">Bank Transfer</option>
                  <option value="card">Credit/Debit Card</option>
                </select>
              </div>

              <div className="flex items-center mb-6">
                <input 
                  type="checkbox" 
                  id="anonymous" 
                  className="mr-2 h-4 w-4 text-[#FFC107] focus:ring-[#FFC107]"
                />
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
    </>
  )
}

export default Hero;