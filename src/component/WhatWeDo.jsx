import { useState } from 'react';
import { FaArrowRight, FaHandsHelping, FaFlask, FaUsers, FaChartLine } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

// Import images (you'll need to add these to your assets folder)
// import consultancyImg from '../assets/consultancy.jpg';
// import researchImg from '../assets/research.jpg';
// import outreachImg from '../assets/outreach.jpg';
// import impactImg from '../assets/impact.jpg';

// For demonstration, I'll use placeholder images from a service
const consultancyImg = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
const researchImg = "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
const outreachImg = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
const impactImg = "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";

const WhatWeDo = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const programs = [
    {
      id: 1,
      title: "Consultancy & Therapy",
      icon: <FaHandsHelping className="text-3xl text-[#FFC107]" />,
      description: "Professional consultancy and evidence-based therapy services tailored for individuals with autism.",
      image: consultancyImg,
      details: "Our team of experienced consultants and therapists provide comprehensive assessments and individualized intervention plans. We offer one-on-one sessions, group therapy, and family support to ensure holistic development and progress.",
      impacts: [
        "95% of clients report improved quality of life",
        "Personalized therapy plans for each individual",
        "Parent and caregiver training programs",
        "Teleconsultation services for remote access"
      ]
    },
    {
      id: 2,
      title: "Research & Innovation",
      icon: <FaFlask className="text-3xl text-[#FFC107]" />,
      description: "Advancing autism understanding through cutting-edge research and innovative approaches.",
      image: researchImg,
      details: "Our research division collaborates with leading universities and institutions worldwide to pioneer new understanding and interventions for autism. We focus on evidence-based practices that translate directly to improved services and outcomes.",
      impacts: [
        "Published 15+ research papers in the last year",
        "Developed 3 new assessment tools now used nationally",
        "Ongoing clinical trials for innovative interventions",
        "Annual research symposium with international experts"
      ]
    },
    {
      id: 3,
      title: "Community Outreach",
      icon: <FaUsers className="text-3xl text-[#FFC107]" />,
      description: "Building inclusive communities through awareness, education, and support programs.",
      image: outreachImg,
      details: "We work directly with communities to increase autism awareness and acceptance. Our programs include training for schools and businesses, public awareness campaigns, and support groups for families and individuals affected by autism.",
      impacts: [
        "Trained over 10,000 educators and professionals",
        "Established 50+ autism-friendly spaces in the community",
        "Monthly support groups serving 500+ families",
        "Annual autism acceptance week with 20,000+ participants"
      ]
    }
  ];

  const successStories = [
    {
      name: "Michael's Journey",
      story: "After receiving our therapy services, Michael transitioned from being non-verbal to using an AAC device effectively. He's now able to communicate his needs and preferences.",
      achievement: "Now participates in family decisions and expresses his choices"
    },
    {
      name: "Research Breakthrough",
      story: "Our research team identified early markers that help with autism diagnosis before age 2, leading to earlier interventions and better outcomes.",
      achievement: "Published in Journal of Autism and Developmental Disorders"
    },
    {
      name: "Autism-Friendly City Initiative",
      story: "We partnered with local government to create the first autism-certified city district, with trained staff and sensory-friendly environments throughout.",
      achievement: "Recognized by National Autism Association as model program"
    }
  ];

  return (
    <section id="programs" className="mx-auto px-4 py-[70px] md:px-[2.5rem] bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-poppins text-[30px] font-bold mb-4">
            Our <span className="text-[#FFC107]">Programs</span> & Services
          </h1>
          <p className="font-poppins max-w-3xl mx-auto">
            We offer comprehensive programs designed to support individuals with autism at every stage of life. 
            Our evidence-based approaches are tailored to meet unique needs and maximize potential.
          </p>
        </div>

        {/* Program Cards with Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <div 
              key={program.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-3">
                    {program.icon}
                  </div>
                  <h3 className="font-poppins font-bold text-xl">{program.title}</h3>
                </div>
                <p className="font-poppins text-gray-600 mb-5">{program.description}</p>
                <button 
                  onClick={() => {
                    setActiveTab(index);
                    setShowModal(true);
                  }}
                  className="flex items-center gap-2 text-[#FFC107] font-poppins font-medium hover:underline"
                >
                  Read more <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Impact/Success Stories with Image */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-2/5">
              <img 
                src={impactImg} 
                alt="Our Impact" 
                className="w-full h-full object-cover min-h-[300px]"
              />
            </div>
            <div className="p-6 md:p-8 md:w-3/5">
              <h2 className="font-poppins text-2xl font-bold mb-2">
                Our <span className="text-[#FFC107]">Impact</span> & Success Stories
              </h2>
              <p className="font-poppins text-gray-600 mb-6">
                The success of our participants and families is what drives us forward. Here are some of their stories.
              </p>
              
              <div className="space-y-6">
                {successStories.map((story, index) => (
                  <div key={index} className="bg-gray-50 p-5 rounded-lg border-l-4 border-[#FFC107]">
                    <h4 className="font-poppins font-bold mb-2">{story.name}</h4>
                    <p className="font-poppins text-sm text-gray-600 mb-3">{story.story}</p>
                    <div className="bg-[#FFC107] bg-opacity-10 p-2 rounded">
                      <p className="font-poppins text-xs font-semibold text-[#B68500]">{story.achievement}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 flex items-center">
                <FaChartLine className="text-[#FFC107] mr-2" />
                <span className="font-poppins text-sm font-medium">
                  Over 5,000 individuals and families served since 2010
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Program Detail Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <div className="h-56 overflow-hidden">
                <img 
                  src={programs[activeTab].image} 
                  alt={programs[activeTab].title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md text-gray-700 hover:text-gray-900"
              >
                <IoClose className="text-2xl" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="mr-3">
                  {programs[activeTab].icon}
                </div>
                <h3 className="font-poppins font-bold text-2xl">
                  {programs[activeTab].title}
                </h3>
              </div>
              
              <p className="font-poppins text-gray-700 mb-6">
                {programs[activeTab].details}
              </p>
              
              <h4 className="font-poppins font-bold text-lg mb-3 text-[#FFC107]">
                Key Achievements:
              </h4>
              
              <ul className="font-poppins space-y-2 mb-8">
                {programs[activeTab].impacts.map((impact, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#FFC107] mr-2">•</span>
                    <span>{impact}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => setShowModal(false)}
                className="bg-[#FFC107] text-white font-poppins font-medium py-2 px-6 rounded-lg hover:bg-[#E6AC00] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WhatWeDo;