import { useState, useEffect } from 'react';
import { FaArrowRight, FaQuoteLeft, FaAward, FaUsers, FaHeart, FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

import slide2 from '../assets/autismcommunity.jpg';
import slide1 from '../assets/autismindividual.jpg';
import slide3 from '../assets/autismresearch.jpg';
import Founder from '../assets/founder.jpg';

const team1 = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
const team2 = "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
const team3 = "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";

const About = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [showTeam, setShowTeam] = useState(false);
  const [showEngagement, setShowEngagement] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slides data with background images and overlay text
  const slides = [
    {
      id: 1,
      image: slide1,
      title: "Empowering Individuals with Autism",
      description: "Providing comprehensive support and resources to help those with autism reach their full potential",
      cta: "Learn About Our Programs",
      target: "mission"
    },
    {
      id: 2,
      image: slide2,
      title: "Building Inclusive Communities",
      description: "Working together to create understanding and acceptance for people with autism",
      cta: "See Our Community Work",
      target: "community"
    },
    {
      id: 3,
      image: slide3,
      title: "Advancing Research & Awareness",
      description: "Pioneering new approaches and spreading knowledge about autism spectrum disorders",
      cta: "Explore Our Research",
      target: "research"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // FULL founder info
  const founderInfo = {
    name: "Dr. BAZIGA Vedaste",
    title: "Senior Lecturer & Head of Mental Health Nursing Department",
    image: Founder,
    contact: {
      phone: "+250784499986",
      email: "vedastebaziga2@gmail.com",
      email2: "v.baziga@ur.ac.rw"
    },
    bio: "Dr. Baziga Vedaste is a Registered Mental Health Nurse and Senior Lecturer at University of Rwanda. He is Head of Mental Health Nursing Department in University of Rwanda- College of Medicine and Health Sciences, in School of Nursing and Midwifery.",
    fullBio: `Dr Baziga Vedaste is Registered Mental Health Nurse and Senior Lecturer at University of Rwanda. 
    He holds Advanced Diploma in Mental Health Nursing and Bachelor' Degree in Nursing Education from Kigali Health Institute, 
    Master's Degree in Nursing (Mental Health) from University of KwaZulu Natal and PhD in Experimental Medicine from University of Tubingen. 
    He is Head of Mental Health Nursing Department in University of Rwanda- College of Medicine and Health Sciences, in School of Nursing and Midwifery.`,
    research: [
      "Mental Health stigma",
      "Community mental health",
      "Autism spectrum disorders and other neurodevelopmental disorders"
    ],
    publications: [
      "Uwingabiye, L., Baziga, V., Chironda G., Rajeswaran L. (2021). Assessment of knowledge, attitude and perceptions regarding kidney donation among nursing students at the University of Rwanda.",
      "Baziga, V., Gasovya, A., Uwingabire, F. (2020). Local authorities' attitude towards people with mental illness in Musanze District, Rwanda. RJMHS 2(3). DOI: 10.4314/rjmhs.v2i3.5.",
      "Baziga, V., Gasovya, A., Uwingabire, F. (2020). Community health workers' attitude towards people with mental illness: challenge of maternal mental health services. RJMHS 2(3). DOI: 10.4314/rjmhs.v2i3.3.",
      "Baziga, V. (2017). Nurses Stigmatising Attitudes towards Persons with a Mental Disorder. JOJNHC 3(3). DOI: 10.19080/JOJNHC.2017.03.555613.",
      "Baziga, V. (2017). Student Nurses' Stigmatising Attitudes towards Persons with a Mental Disorder in Rwanda. Rwanda Journal Series F. DOI: 10.4314/rj.v4i1.3F.",
      "Baziga, V., Mandy A.A. (2016). 'IN PRINCIPLE, YES, IN APPLICATION, NO': Rwandan Nurses' Support for Integration of Mental Health Services. Africa J. of Nursing and Midwifery. 18(1)."
    ]
  };

  const teamMembers = [
    {
      name: "UWURUKUNDO BAZIGA Mireille",
      role: "Head Therapist",
      image: team1,
      bio: "Specialized in occupational therapy with 8 years of experience working with children with autism."
    },
    {
      name: "NIYOGISUBIZO Diedonne",
      role: "Education Coordinator",
      image: team2,
      bio: "Developed inclusive education programs implemented in 15 schools across Rwanda."
    },
    {
      name: "HAGUMA KWIZERA Ernest",
      role: "Community Outreach Manager",
      image: team3,
      bio: "Led awareness campaigns reaching over 10,000 community members in the past year."
    },
    {
      name: "Dr. BANKUNDIYE Mechtilde",
      role: "Clinical Psychologist",
      image: team1,
      bio: "Specializes in behavioral interventions and assessment for autism spectrum disorders."
    },
    {
      name: "Annette Tuyishime",
      role: "Speech & Language Therapist",
      image: team2,
      bio: "Expert in communication development and AAC systems for non-verbal individuals."
    },
    {
      name: "RUKUNDO BAZIGA Irene Serge",
      role: "Research Coordinator",
      image: team3,
      bio: "Leads data analysis and program evaluation for our autism intervention programs."
    }
  ];

  const openModal = (modalType) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div id='about' className='mx-auto px-4 py-[20px] md:px-[2.5rem]'>
      {/* Hero Slider Section */}
      <div className="relative h-[500px] rounded-xl overflow-hidden mb-16">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white max-w-2xl px-4">
                <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-4">{slide.title}</h2>
                <p className="font-poppins text-xl mb-6">{slide.description}</p>
                <button onClick={() => {
                  const element = document.getElementById(slide.target);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }} className="bg-[#FFC107] text-white font-poppins font-medium py-3 px-8 rounded-lg hover:bg-[#E6AC00] transition-colors">{slide.cta}</button>
              </div>
            </div>
          </div>
        ))}
        
        {/* Navigation arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-colors"
        >
          <FaCircleArrowLeft className="text-2xl" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-colors"
        >
          <FaCircleArrowRight className="text-2xl" />
        </button>
        
        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-[#FFC107]' : 'bg-white'}`}
            />
          ))}
        </div>
      </div>

      <div className='flex flex-col justify-center items-center text-center mb-16'>
        <h1 className='font-poppins text-[30px] font-bold mb-4'>Who We <span className='text-[#FFC107]'>Are</span></h1>
        <p className='font-poppins max-w-3xl'>
          We are Kigali Center for Autism Initiatives - KCA, Our organization strives to create a world where people with autism can thrive and reach their fullest potential.
          Since 2010, we have been dedicated to providing comprehensive support, resources, and advocacy for the autism community in Rwanda.
        </p>
      </div>

      {/* Mission, Vision, Values Cards */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-16'>
        <div className='bg-white rounded-xl shadow-md p-6 border-l-4 border-[#FFC107] hover:shadow-lg transition-all'>
          <div className='mb-4'>
            <FaHeart className='text-2xl text-[#FFC107]' />
          </div>
          <h3 className='font-teko text-2xl font-semibold mb-3'>OUR MISSION</h3>
          <p className='font-poppins text-gray-600 mb-4'>
            To empower individuals with autism by providing comprehensive resources, personalized care, and innovative programs.
          </p>
          <button 
            onClick={() => openModal('mission')}
            className='flex items-center gap-2 text-[#FFC107] font-poppins text-sm font-medium hover:underline'
          >
            Learn more <FaArrowRight />
          </button>
        </div>

        <div className='bg-white rounded-xl shadow-md p-6 border-l-4 border-[#FFC107] hover:shadow-lg transition-all'>
          <div className='mb-4'>
            <FaAward className='text-2xl text-[#FFC107]' />
          </div>
          <h3 className='font-teko text-2xl font-semibold mb-3'>OUR VISION</h3>
          <p className='font-poppins text-gray-600 mb-4'>
            A world where individuals with autism are valued, included, and able to achieve their fullest potential.
          </p>
          <button 
            onClick={() => openModal('vision')}
            className='flex items-center gap-2 text-[#FFC107] font-poppins text-sm font-medium hover:underline'
          >
            Learn more <FaArrowRight />
          </button>
        </div>

        <div className='bg-white rounded-xl shadow-md p-6 border-l-4 border-[#FFC107] hover:shadow-lg transition-all'>
          <div className='mb-4'>
            <FaUsers className='text-2xl text-[#FFC107]' />
          </div>
          <h3 className='font-teko text-2xl font-semibold mb-3'>OUR VALUES</h3>
          <p className='font-poppins text-gray-600 mb-4'>
            We believe in creating a welcoming and supportive environment for all individuals with autism and their families.
          </p>
          <button 
            onClick={() => openModal('values')}
            className='flex items-center gap-2 text-[#FFC107] font-poppins text-sm font-medium hover:underline'
          >
            Learn more <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Founder Section */}
      <div className='bg-gray-50 rounded-xl p-8 mb-12'>
        <div className='flex flex-col md:flex-row items-center gap-8'>
          <div className='md:w-1/3'>
            <img 
              src={founderInfo.image} 
              alt={founderInfo.name} 
              className='w-full h-auto rounded-lg shadow-md'
            />
          </div>
          <div className='md:w-2/3'>
            <h2 className='font-poppins text-2xl font-bold mb-2'>Meet Our Founder</h2>
            <h3 className='font-poppins text-lg text-[#FFC107] mb-4'>{founderInfo.name}</h3>
            <p className='font-poppins text-[#FFC107] mb-4'>{founderInfo.title}</p>
            
            <div className='mb-4 flex'>
              <FaQuoteLeft className='text-[#FFC107] mr-2 text-xl mt-1' />
              <p className='font-poppins italic text-gray-700'>
                Every individual with autism has unique gifts to share with the world. Our mission is to help them discover and nurture these gifts.
              </p>
            </div>
            
            <p className='font-poppins text-gray-600 mb-4'>{founderInfo.bio}</p>
            
            <button 
              onClick={() => openModal('founder')}
              className='bg-[#FFC107] text-white font-poppins font-medium py-2 px-6 rounded-lg hover:bg-[#E6AC00] transition-colors'
            >
              Read Full Bio
            </button>
          </div>
        </div>
      </div>

      {/* KCA Team Section */}
      <div className='text-center mb-12'>
        <h2 className='font-poppins text-2xl font-bold mb-4'>Meet Our <span className='text-[#FFC107]'>Dedicated</span> Team</h2>
        <p className='font-poppins max-w-2xl mx-auto mb-8'>
          Our multidisciplinary team brings together expertise from various fields to provide comprehensive support for individuals with autism and their families.
        </p>
        
        {!showTeam ? (
          <button 
            onClick={() => setShowTeam(true)}
            className='bg-transparent border border-[#FFC107] text-[#FFC107] font-poppins font-medium py-2 px-6 rounded-lg hover:bg-[#FFC107] hover:text-white transition-colors'
          >
            Meet Our Team
          </button>
        ) : (
          <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
              {teamMembers.map((member, index) => (
                <div key={index} className='bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-all'>
                  <div className='w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden'>
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <h3 className='font-poppins font-bold'>{member.name}</h3>
                  <p className='font-poppins text-[#FFC107] mb-2'>{member.role}</p>
                  <p className='font-poppins text-sm text-gray-600'>{member.bio}</p>
                </div>
              ))}
            </div>
            <button 
              onClick={() => setShowTeam(false)}
              className='bg-gray-200 text-gray-700 font-poppins font-medium py-2 px-6 rounded-lg hover:bg-gray-300 transition-colors'
            >
              Show Less
            </button>
          </div>
        )}
      </div>

      {/* Get Involved Section */}
      <div className='bg-[#FFC107] bg-opacity-10 rounded-xl p-8 mb-12'>
        <div className='text-center max-w-2xl mx-auto'>
          <h2 className='font-poppins text-2xl font-bold mb-4'>Get <span className='text-[#FFC107]'>Involved</span></h2>
          <p className='font-poppins text-gray-700 mb-6'>
            Join us in making a difference in the lives of individuals with autism and their families. Whether you are a professional, student, or community member, there are many ways to contribute to our mission.
          </p>
          
          {!showEngagement ? (
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button 
                onClick={() => setShowEngagement(true)}
                className='bg-[#FFC107] text-white font-poppins font-medium py-2 px-6 rounded-lg hover:bg-[#E6AC00] transition-colors'
              >
                Read More
              </button>
              <a 
                href="https://forms.google.com/example-volunteer-form" 
                target="_blank" 
                rel="noopener noreferrer"
                className='bg-white border border-[#FFC107] text-[#FFC107] font-poppins font-medium py-2 px-6 rounded-lg hover:bg-[#FFC107] hover:text-white transition-colors'
              >
                Apply Now
              </a>
            </div>
          ) : (
            <div className='text-left'>
              <p className='font-poppins text-gray-700 mb-4'>
                We offer various opportunities for involvement including volunteering, internships, professional collaborations, and community partnerships. Our volunteers play a crucial role in supporting our programs and expanding our reach.
              </p>
              <p className='font-poppins text-gray-700 mb-6'>
                To get started, fill out our volunteer application form or contact us directly to discuss how you can contribute your skills and time to our mission.
              </p>
              
              <div className='bg-white rounded-lg p-4 mb-6'>
                <h4 className='font-poppins font-bold mb-2'>Contact for Volunteering:</h4>
                <p className='font-poppins text-gray-600'>Email: volunteer@kca.org.rw</p>
                <p className='font-poppins text-gray-600'>Phone: +250 780 123 456</p>
              </div>
              
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <a 
                  href="https://forms.google.com/example-volunteer-form" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='bg-[#FFC107] text-white font-poppins font-medium py-2 px-6 rounded-lg hover:bg-[#E6AC00] transition-colors text-center'
                >
                  Fill Volunteer Form
                </a>
                <button 
                  onClick={() => setShowEngagement(false)}
                  className='bg-white border border-[#FFC107] text-[#FFC107] font-poppins font-medium py-2 px-6 rounded-lg hover:bg-[#FFC107] hover:text-white transition-colors'
                >
                  Show Less
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modals for detailed information */}
      {activeModal === 'mission' && (
        <Modal onClose={closeModal} title="Our Mission">
          <p className='font-poppins text-gray-700 mb-4'>
            To empower individuals with autism by providing comprehensive resources, personalized care, and innovative programs. 
            Our aim is to support their development, enhance their quality of life, and promote inclusion and understanding within the community.
          </p>
          <p className='font-poppins text-gray-700'>
            We achieve this through early intervention programs, therapeutic services, educational support, community awareness initiatives, 
            and advocacy for policies that support individuals with autism and their families.
          </p>
        </Modal>
      )}

      {activeModal === 'vision' && (
        <Modal onClose={closeModal} title="Our Vision">
          <p className='font-poppins text-gray-700 mb-4'>
            We envision a world where individuals with autism are fully accepted, valued members of society who have access to all the resources and opportunities they need to thrive.
          </p>
          <p className='font-poppins text-gray-700'>
            This includes inclusive education systems, accessible healthcare, employment opportunities, and communities that celebrate neurodiversity rather than viewing it as a deficit.
          </p>
        </Modal>
      )}

      {activeModal === 'values' && (
        <Modal onClose={closeModal} title="Our Values">
          <ul className='font-poppins text-gray-700 list-disc list-inside space-y-2'>
            <li><strong>Compassion:</strong> We approach every individual and family with empathy, understanding, and kindness.</li>
            <li><strong>Inclusion:</strong> We believe in creating environments where everyone feels welcomed, valued, and respected.</li>
            <li><strong>Innovation:</strong> We continuously seek new and better ways to support individuals with autism.</li>
            <li><strong>Collaboration:</strong> We work together with families, professionals, and communities to achieve the best outcomes.</li>
            <li><strong>Advocacy:</strong> We speak up for the rights and needs of individuals with autism at all levels of society.</li>
          </ul>
        </Modal>
      )}

      {activeModal === 'founder' && (
        <Modal onClose={closeModal} title={founderInfo.name}>
          <div className='mb-4'>
            <h4 className='font-poppins font-bold mb-2'>Academic Rank:</h4>
            <p className='font-poppins text-gray-600'>Senior Lecturer</p>
          </div>
          <div className='mb-4'>
            <h4 className='font-poppins font-bold mb-2'>Contact Information:</h4>
            <p className='font-poppins text-gray-600'>Phone: {founderInfo.contact.phone}</p>
            <p className='font-poppins text-gray-600'>Email: {founderInfo.contact.email}</p>
            <p className='font-poppins text-gray-600'>Email: {founderInfo.contact.email2}</p>
          </div>
          <div className='mb-4'>
            <h4 className='font-poppins font-bold mb-2'>Biography:</h4>
            <p className='font-poppins text-gray-700 whitespace-pre-line'>{founderInfo.fullBio}</p>
          </div>
          <div className='mb-4'>
            <h4 className='font-poppins font-bold mb-2'>Research Interests:</h4>
            <ul className='list-disc list-inside text-gray-700'>
              {founderInfo.research.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
          <div className='mb-4'>
            <h4 className='font-poppins font-bold mb-2'>Key Publications:</h4>
            <ul className='list-disc list-inside text-gray-700 space-y-2'>
              {founderInfo.publications.map((pub, i) => <li key={i}>{pub}</li>)}
            </ul>
          </div>
        </Modal>
      )}
    </div>
  );
};

// Modal Component
// eslint-disable-next-line react/prop-types
const Modal = ({ onClose, title, children }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-poppins font-bold text-2xl text-[#FFC107]">
              {title}
            </h3>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <IoClose className="text-2xl" />
            </button>
          </div>
          {children}
          <button 
            onClick={onClose}
            className="mt-6 bg-[#FFC107] text-white font-poppins font-medium py-2 px-6 rounded-lg hover:bg-[#E6AC00] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;