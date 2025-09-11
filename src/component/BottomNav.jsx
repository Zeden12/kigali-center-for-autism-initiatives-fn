import { useState } from 'react';
import { IoMenu, IoClose } from "react-icons/io5";
import { FaDonate } from "react-icons/fa";

const BottomNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDonationModal, setShowDonationModal] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }


  const handleDonateClick = () => {
    setIsOpen(false);
    setShowDonationModal(true);
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  }

  return (
    <>
      <div className="sticky bg-[#E9E9E9] top-[50px] z-10 flex justify-between items-center px-4 sm:px-[50px] lg:px-[100px] py-[15px]">
        <h1 className="font-poppins font-bold text-[20px]">
          KCA
        </h1>
        <nav>
          <ul className={`fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:static lg:flex lg:flex-row lg:gap-[50px] lg:translate-x-0 lg:bg-transparent lg:justify-end lg:items-center font-poppins`}>
            <li className="lg:hidden absolute top-4 right-4">
              <button onClick={toggleMenu}>
                <IoClose className='text-[30px]'/>
              </button>
            </li>
            <li className="my-4 lg:my-0">
              <button 
                onClick={() => scrollToSection('hero')}
                className="hover:text-[#FFC107] transition-colors"
              >
                Home
              </button>
            </li>
            <li className="my-4 lg:my-0">
              <button 
                onClick={() => scrollToSection('about')}
                className="hover:text-[#FFC107] transition-colors"
              >
                About Us
              </button>
            </li>
            <li className="my-4 lg:my-0">
              <button 
                onClick={() => scrollToSection('programs')}
                className="hover:text-[#FFC107] transition-colors"
              >
                What We Do
              </button>
            </li>
            <li className="my-4 lg:my-0">
              <button 
                onClick={() => scrollToSection('events')}
                className="hover:text-[#FFC107] transition-colors"
              >
                Events & Trainings
              </button>
            </li>
            <li className="my-4 lg:my-0">
              <button 
                onClick={() => scrollToSection('blog')}
                className="hover:text-[#FFC107] transition-colors"
              >
                Blog & News
              </button>
            </li>
            <li className="my-4 lg:my-0">
              <button 
                onClick={() => scrollToSection('contact')}
                className="hover:text-[#FFC107] transition-colors"
              >
                Contact Us
              </button>
            </li>
            <li className="my-4 lg:my-0 lg:hidden">
              <button 
                onClick={handleDonateClick}
                className="bg-[#FFC107] text-white font-outfit px-[30px] py-[7px] rounded-[10px] hover:bg-white hover:border-[1px] hover:border-[#FFC107] hover:text-[#FFC107] transition-colors flex items-center"
              >
                <FaDonate className="mr-2" />
                Donate
              </button>
            </li>
          </ul>
        </nav>
        <button 
          onClick={() => setShowDonationModal(true)}
          className="hidden lg:block bg-[#FFC107] text-white font-outfit px-[30px] py-[7px] rounded-[5px] hover:bg-white hover:border-[1px] hover:border-[#FFC107] hover:text-[#FFC107] transition-colors flex items-center"
        >
          Donate
        </button>
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            <IoMenu className='text-[30px]'/>
          </button>
        </div>
      </div>

      {/* Donation Modal */}
      {showDonationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 flex items-center">
                  <FaDonate className="text-[#FFC107] mr-2" />
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

              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3">Donor Information</h4>
                <div className="space-y-3">
                  <input 
                    type="text" 
                    placeholder="Full Name"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-[#FFC107] focus:border-[#FFC107]"
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-[#FFC107] focus:border-[#FFC107]"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-[#FFC107] focus:border-[#FFC107]"
                  />
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3">Payment Method</h4>
                <div className="grid grid-cols-2 gap-2">
                  <button className="p-2 border border-gray-300 rounded-lg hover:border-[#FFC107] transition-colors">
                    Mobile Money
                  </button>
                  <button className="p-2 border border-gray-300 rounded-lg hover:border-[#FFC107] transition-colors">
                    Bank Transfer
                  </button>
                  <button className="p-2 border border-gray-300 rounded-lg hover:border-[#FFC107] transition-colors">
                    Credit Card
                  </button>
                  <button className="p-2 border border-gray-300 rounded-lg hover:border-[#FFC107] transition-colors">
                    In Person
                  </button>
                </div>
              </div>

              <div className="flex items-center mb-4">
                <input 
                  type="checkbox" 
                  id="anonymous" 
                  className="mr-2 h-4 w-4 text-[#FFC107] focus:ring-[#FFC107]"
                />
                <label htmlFor="anonymous" className="text-sm text-gray-700">
                  Donate anonymously
                </label>
              </div>

              <button className="w-full bg-[#FFC107] text-white font-semibold py-3 rounded-lg hover:bg-[#E6AC00] transition-colors">
                Donate Now
              </button>

              <div className="mt-4 text-center">
                <p className="text-sm text-gray-500">
                  A receipt will be sent to your email.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default BottomNav;