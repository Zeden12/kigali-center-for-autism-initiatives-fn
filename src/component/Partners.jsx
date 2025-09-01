import React, { useState } from 'react';
import Autism from '../assets/Autism.png';
import HelloWorld from '../assets/HelloWorld.png';
import microsoft from '../assets/microsoft.jpg';
import RBD from '../assets/RBD.jpg';
import RSSB from '../assets/RSSB.png';
import WaterAid from '../assets/WaterAid.png';
import { FaHandshake, FaDonate, FaEnvelope, FaPhone, FaArrowRight } from 'react-icons/fa';

const Partners = () => {
  const [showPartnerModal, setShowPartnerModal] = useState(false);
  const [showDonateModal, setShowDonateModal] = useState(false);

  const partners = [
    {
      id: 1,
      name: "Autism Research Institute",
      logo: Autism,
      description: "Global leader in autism research and evidence-based practices."
    },
    {
      id: 2,
      name: "Microsoft Rwanda",
      logo: microsoft,
      description: "Technology partner providing digital solutions and accessibility tools."
    },
    {
      id: 3,
      name: "Rwanda Biomedical Center",
      logo: RBD,
      description: "Government partner supporting national autism awareness campaigns."
    },
    {
      id: 4,
      name: "RSSB",
      logo: RSSB,
      description: "Social security partner enabling sustainable funding for autism programs."
    },
    {
      id: 5,
      name: "WaterAid Rwanda",
      logo: WaterAid,
      description: "Development partner focusing on inclusive WASH facilities."
    },
    {
      id: 6,
      name: "Hello World Foundation",
      logo: HelloWorld,
      description: "Education partner creating accessible learning platforms."
    }
  ];

  return (
    <div id="partners" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <FaHandshake className="text-4xl text-[#FFC107]" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-[#FFC107]">Strategic</span> Partners
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            We are proud to collaborate with organizations that share our vision of creating an inclusive 
            society for individuals with autism. Our partners provide essential support through funding, 
            expertise, and resources that enable us to expand our reach and enhance our programs. Together, 
            we are making a meaningful difference in the lives of those affected by autism in Rwanda and beyond.
          </p>
        </div>

        {/* Partners Grid - Images Only */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-lg p-4 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-auto max-h-16 object-contain"
                title={partner.name}
              />
            </div>
          ))}
        </div>

        {/* Partnership CTA Banner */}
        <div className="bg-gradient-to-r from-[#FFC107] to-[#F2BA12] rounded-2xl p-8 text-white text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Join Our Mission</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Whether through partnership or donation, your support helps us create meaningful change 
            for the autism community in Rwanda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowPartnerModal(true)}
              className="bg-white text-[#FFC107] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <FaHandshake className="mr-2" />
              Become a Partner
            </button>
            <button 
              onClick={() => setShowDonateModal(true)}
              className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-[#FFC107] transition-colors flex items-center justify-center"
            >
              <FaDonate className="mr-2" />
              Make a Donation
            </button>
          </div>
        </div>
      </div>

      {/* Become a Partner Modal */}
      {showPartnerModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  Become a Partner
                </h3>
                <button
                  onClick={() => setShowPartnerModal(false)}
                  className="text-gray-500 hover:text-gray-700 text-xl"
                >
                  ✕
                </button>
              </div>

              <div className="mb-6">
                <p className="text-gray-600 mb-4">
                  We welcome organizations and companies that share our vision to support individuals 
                  with autism. Partner with us to create meaningful impact through:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Corporate sponsorship and funding</li>
                  <li>Expertise sharing and capacity building</li>
                  <li>Resource provision and in-kind donations</li>
                  <li>Collaborative programs and initiatives</li>
                  <li>Employee volunteering opportunities</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h4 className="font-semibold text-gray-700 mb-3">Contact Our Partnership Team</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <FaEnvelope className="text-[#FFC107] mr-3" />
                    <a href="mailto:partnerships@kca.org.rw" className="text-gray-600 hover:text-[#FFC107]">
                      partnerships@kca.org.rw
                    </a>
                  </div>
                  <div className="flex items-center">
                    <FaPhone className="text-[#FFC107] mr-3" />
                    <a href="tel:+250781963232" className="text-gray-600 hover:text-[#FFC107]">
                      +250 781 963 232
                    </a>
                  </div>
                  <div className="flex items-center">
                    <FaArrowRight className="text-[#FFC107] mr-3" />
                    <span className="text-gray-600">KG 06 Street Gasanze, Kigali</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-500 mb-6">
                Our partnership team will contact you within 2 business days to discuss potential 
                collaboration opportunities tailored to your organization&apos;s strengths and interests.
              </p>

              <button className="w-full bg-[#FFC107] text-white font-semibold py-3 rounded-lg hover:bg-[#E6AC00] transition-colors">
                Send Partnership Inquiry
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Donation Modal */}
      {showDonateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  Support Our Cause
                </h3>
                <button
                  onClick={() => setShowDonateModal(false)}
                  className="text-gray-500 hover:text-gray-700 text-xl"
                >
                  ✕
                </button>
              </div>

              <div className="mb-6">
                <p className="text-gray-600 mb-4">
                  Your donation directly supports our programs and services for individuals with autism:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Therapy and intervention programs</li>
                  <li>Educational resources and training</li>
                  <li>Community awareness campaigns</li>
                  <li>Family support services</li>
                  <li>Research and advocacy initiatives</li>
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

              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h4 className="font-semibold text-gray-700 mb-3">Other Ways to Donate</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Bank Transfer:</strong> KCA Account #: 000123456789</p>
                  <p><strong>Mobile Money:</strong> 0781 963 232 (MTN)</p>
                  <p><strong>In Person:</strong> Visit our office at KG 06 Street Gasanze, Kigali</p>
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

export default Partners;