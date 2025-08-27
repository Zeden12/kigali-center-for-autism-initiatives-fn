import { useState } from 'react';
import { FaArrowRight, FaQuoteLeft, FaAward, FaUsers, FaHeart } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

// Import images (replace with your actual images)
// import founderImg from '../assets/founder.jpg';
// import activity1 from '../assets/activity1.jpg';
// import activity2 from '../assets/activity2.jpg';
// import activity3 from '../assets/activity3.jpg';
// import activity4 from '../assets/activity4.jpg';

// Placeholder images from Unsplash for demonstration
const founderImg = "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
const activity1 = "https://images.unsplash.com/photo-1549056572-75914d6d7e1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
const activity2 = "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
const activity3 = "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
const activity4 = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";

const About = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [showTeam, setShowTeam] = useState(false);
  const [showEngagementForm, setShowEngagementForm] = useState(false);

  // Founder information with provided data
  const founderInfo = {
    name: "Dr. BAZIGA Vedaste",
    title: "Senior Lecturer & Head of Mental Health Nursing Department",
    image: founderImg,
    contact: {
      phone: "+250784499986",
      email: "vedastebaziga2@gmail.com",
      email2: "v.baziga@ur.ac.rw"
    },
    qualifications: [
      "Registered Mental Health Nurse",
      "Advanced Diploma in Mental Health Nursing",
      "Bachelor's Degree in Nursing Education",
      "Master's Degree in Nursing (Mental Health)",
      "PhD in Experimental Medicine"
    ],
    bio: "Dr. Baziga Vedaste is a Registered Mental Health Nurse and Senior Lecturer at University of Rwanda. He is Head of Mental Health Nursing Department in University of Rwanda- College of Medicine and Health Sciences, in School of Nursing and Midwifery. He has been participating in different academic activities after he was appointed as Senior Lecturer in the Department of Mental Health Nursing.",
    researchInterests: [
      "Mental Health stigma",
      "Community mental health",
      "Autism spectrum disorders and other neurodevelopmental disorders"
    ],
    publications: [
      "Assessment of knowledge, attitude and perceptions regarding kidney donation among nursing students at the University of Rwanda (2021)",
      "Local authorities' attitude towards people with mental illness in Musanze District, Rwanda (2020)",
      "Community health workers' attitude towards people with mental illness (2020)",
      "Nurses Stigmatising Attitudes towards Persons with a Mental Disorder (2017)",
      "Student Nurses' Stigmatising Attitudes towards Persons with a Mental Disorder (2017)",
      "Rwandan Nurses' Support for Integration of Mental Health Services (2016)"
    ]
  };

  // Activities data with images and descriptions
  const activities = [
    {
      id: 1,
      title: "Autism Awareness Workshop",
      image: activity1,
      description: "We conducted a series of workshops across Rwanda to raise awareness about autism spectrum disorders, reaching over 500 community health workers and educators.",
      impact: "Trained 200+ professionals in early autism detection techniques"
    },
    {
      id: 2,
      title: "School Inclusion Program",
      image: activity2,
      description: "Our school inclusion initiative has helped 15 schools develop autism-friendly learning environments and trained teachers in inclusive education strategies.",
      impact: "Supported 45 children with autism in mainstream educational settings"
    },
    {
      id: 3,
      title: "Parent Support Groups",
      image: activity3,
      description: "We've established monthly support groups for parents and caregivers of children with autism, providing a safe space for sharing experiences and strategies.",
      impact: "Regularly serving 120+ families across 3 regions"
    },
    {
      id: 4,
      title: "Research Symposium",
      image: activity4,
      description: "Hosted the first annual Autism Research Symposium in Rwanda, bringing together researchers, clinicians, and advocates to share knowledge and best practices.",
      impact: "Featured 12 research presentations and attracted 150+ participants"
    }
  ];

  const teamMembers = [
    {
      name: "Marie Uwase",
      role: "Head Therapist",
      expertise: "Occupational Therapy, Sensory Integration"
    },
    {
      name: "Jean Paul Habimana",
      role: "Education Coordinator",
      expertise: "Special Education, Curriculum Development"
    },
    {
      name: "Grace Mukandoli",
      role: "Community Outreach Manager",
      expertise: "Public Awareness, Family Support"
    },
    {
      name: "Dr. Eric Mutabazi",
      role: "Clinical Psychologist",
      expertise: "Behavioral Interventions, Assessment"
    }
  ];

  const openModal = (modalType) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const handleEngagementSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert("Thank you for your interest! We'll contact you soon.");
    setShowEngagementForm(false);
  };

  return (
    <div id='about' className='mx-auto px-4 py-[70px] md:px-[2.5rem]'>
      <div className='flex flex-col justify-center items-center text-center mb-12'>
        <h1 className='font-poppins text-[30px] font-bold mb-4'>Who We <span className='text-[#FFC107]'>Are</span></h1>
        <p className='font-poppins max-w-3xl'>
          Our organization strives to create a world where people with autism can thrive and reach their fullest potential.
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

      {/* Activities Gallery */}
      <div className='mb-16'>
        <h2 className='font-poppins text-2xl font-bold text-center mb-8'>Our <span className='text-[#FFC107]'>Activities</span> & Engagement</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {activities.map((activity) => (
            <div key={activity.id} className='bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all'>
              <div className='h-56 overflow-hidden'>
                <img 
                  src={activity.image} 
                  alt={activity.title} 
                  className='w-full h-full object-cover transition-transform duration-500 hover:scale-105'
                />
              </div>
              <div className='p-6'>
                <h3 className='font-poppins font-bold text-xl mb-3'>{activity.title}</h3>
                <p className='font-poppins text-gray-600 mb-4'>{activity.description}</p>
                <div className='bg-[#FFC107] bg-opacity-10 p-3 rounded-lg mb-4'>
                  <p className='font-poppins text-sm font-semibold text-[#B68500]'>{activity.impact}</p>
                </div>
                <button className='flex items-center gap-2 text-[#FFC107] font-poppins text-sm font-medium hover:underline'>
                  Read more about this project <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
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
            <div className='mt-4 text-center'>
              <h3 className='font-poppins font-bold'>{founderInfo.name}</h3>
              <p className='font-poppins text-[#FFC107]'>{founderInfo.title}</p>
            </div>
          </div>
          <div className='md:w-2/3'>
            <h2 className='font-poppins text-2xl font-bold mb-4'>About Our Founder</h2>
            
            <div className='mb-4 flex'>
              <FaQuoteLeft className='text-[#FFC107] mr-2 text-xl mt-1' />
              <p className='font-poppins italic text-gray-700'>
                `Every individual with autism has unique gifts to share with the world. Our mission is to help them discover and nurture these gifts.
              </p>
            </div>
            
            <p className='font-poppins text-gray-600 mb-4'>{founderInfo.bio}</p>
            
            <div className='mb-4'>
              <h4 className='font-poppins font-bold mb-2'>Contact Information:</h4>
              <p className='font-poppins text-gray-600'>Phone: {founderInfo.contact.phone}</p>
              <p className='font-poppins text-gray-600'>Email: {founderInfo.contact.email}</p>
              <p className='font-poppins text-gray-600'>Email: {founderInfo.contact.email2}</p>
            </div>
            
            <button 
              onClick={() => openModal('founder')}
              className='bg-[#FFC107] text-white font-poppins font-medium py-2 px-6 rounded-lg hover:bg-[#E6AC00] transition-colors'
            >
              View Full Profile & Research
            </button>
          </div>
        </div>
      </div>

      {/* KCA Team Section with Engagement */}
      <div className='text-center mb-12'>
        <h2 className='font-poppins text-2xl font-bold mb-4'>Our <span className='text-[#FFC107]'>Dedicated</span> Team</h2>
        <p className='font-poppins max-w-2xl mx-auto mb-8'>
          Our multidisciplinary team of professionals brings together expertise from various fields to provide comprehensive support for individuals with autism and their families.
        </p>
        
        {!showTeam ? (
          <div className='flex flex-col items-center gap-4'>
            <button 
              onClick={() => setShowTeam(true)}
              className='bg-transparent border border-[#FFC107] text-[#FFC107] font-poppins font-medium py-2 px-6 rounded-lg hover:bg-[#FFC107] hover:text-white transition-colors'
            >
              Meet Our Team
            </button>
            <button 
              onClick={() => setShowEngagementForm(true)}
              className='bg-[#FFC107] text-white font-poppins font-medium py-2 px-6 rounded-lg hover:bg-[#E6AC00] transition-colors'
            >
              Join Our Team / Volunteer
            </button>
          </div>
        ) : (
          <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
              {teamMembers.map((member, index) => (
                <div key={index} className='bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-all'>
                  <div className='w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center'>
                    <FaUsers className='text-2xl text-gray-400' />
                  </div>
                  <h3 className='font-poppins font-bold'>{member.name}</h3>
                  <p className='font-poppins text-[#FFC107] mb-2'>{member.role}</p>
                  <p className='font-poppins text-sm text-gray-600'>{member.expertise}</p>
                </div>
              ))}
            </div>
            <button 
              onClick={() => setShowEngagementForm(true)}
              className='bg-[#FFC107] text-white font-poppins font-medium py-2 px-6 rounded-lg hover:bg-[#E6AC00] transition-colors'
            >
              Join Our Team / Volunteer
            </button>
          </div>
        )}
      </div>

      {/* Engagement Modal */}
      {showEngagementForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-poppins font-bold text-2xl text-[#FFC107]">
                  Get Involved with KCA
                </h3>
                <button 
                  onClick={() => setShowEngagementForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <IoClose className="text-2xl" />
                </button>
              </div>
              
              <p className="font-poppins text-gray-700 mb-6">
                We are always looking for passionate individuals to join our mission. Whether you are a professional in the field or someone who wants to make a difference, there are many ways to get involved.
              </p>
              
              <form onSubmit={handleEngagementSubmit} className="space-y-4">
                <div>
                  <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full p-2 border border-gray-300 rounded focus:ring-[#FFC107] focus:border-[#FFC107]"
                  />
                </div>
                
                <div>
                  <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    required
                    className="w-full p-2 border border-gray-300 rounded focus:ring-[#FFC107] focus:border-[#FFC107]"
                  />
                </div>
                
                <div>
                  <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full p-2 border border-gray-300 rounded focus:ring-[#FFC107] focus:border-[#FFC107]"
                  />
                </div>
                
                <div>
                  <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">Area of Interest</label>
                  <select className="w-full p-2 border border-gray-300 rounded focus:ring-[#FFC107] focus:border-[#FFC107]">
                    <option value="">Select an option</option>
                    <option value="volunteer">General Volunteer</option>
                    <option value="professional">Professional Services</option>
                    <option value="research">Research Collaboration</option>
                    <option value="internship">Internship</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full p-2 border border-gray-300 rounded focus:ring-[#FFC107] focus:border-[#FFC107]"
                    placeholder="Tell us about your skills, experience, and how you'd like to contribute"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-[#FFC107] text-white font-poppins font-medium py-2 px-6 rounded-lg hover:bg-[#E6AC00] transition-colors"
                >
                  Submit Interest
                </button>
              </form>
              
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="font-poppins text-sm text-gray-600">
                  Alternatively, you can contact us directly at <strong>info@kca.org.rw</strong> or complete our <a href="https://forms.google.com/your-form-link" className="text-[#FFC107] underline">Volunteer Application Form</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

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
            To create a world where individuals with autism are valued, included, and able to achieve their fullest potential. 
            We envision a society where everyone understands and embraces the unique strengths and needs of those with autism.
          </p>
          <p className='font-poppins text-gray-700'>
            Our vision extends beyond providing services to transforming community attitudes, breaking down barriers to inclusion, 
            and creating opportunities for individuals with autism to participate fully in all aspects of society.
          </p>
        </Modal>
      )}

      {activeModal === 'values' && (
        <Modal onClose={closeModal} title="Our Values">
          <ul className='font-poppins text-gray-700 space-y-2'>
            <li className='flex items-start'>
              <span className='text-[#FFC107] mr-2'>•</span>
              <span><strong>Compassion:</strong> We approach our work with empathy and understanding</span>
            </li>
            <li className='flex items-start'>
              <span className='text-[#FFC107] mr-2'>•</span>
              <span><strong>Inclusion:</strong> We believe in creating spaces where everyone belongs</span>
            </li>
            <li className='flex items-start'>
              <span className='text-[#FFC107] mr-2'>•</span>
              <span><strong>Excellence:</strong> We are committed to providing high-quality services</span>
            </li>
            <li className='flex items-start'>
              <span className='text-[#FFC107] mr-2'>•</span>
              <span><strong>Innovation:</strong> We continuously seek new and better ways to serve our community</span>
            </li>
            <li className='flex items-start'>
              <span className='text-[#FFC107] mr-2'>•</span>
              <span><strong>Collaboration:</strong> We work together with families, communities, and partners</span>
            </li>
          </ul>
        </Modal>
      )}

      {activeModal === 'founder' && (
        <Modal onClose={closeModal} title={founderInfo.name}>
          <div className='mb-4'>
            <h4 className='font-poppins font-bold mb-2'>Qualifications:</h4>
            <ul className='font-poppins text-gray-700 space-y-1'>
              {founderInfo.qualifications.map((qualification, index) => (
                <li key={index} className='flex items-start'>
                  <span className='text-[#FFC107] mr-2'>•</span>
                  <span>{qualification}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className='mb-4'>
            <h4 className='font-poppins font-bold mb-2'>Research Interests:</h4>
            <ul className='font-poppins text-gray-700 space-y-1'>
              {founderInfo.researchInterests.map((interest, index) => (
                <li key={index} className='flex items-start'>
                  <span className='text-[#FFC107] mr-2'>•</span>
                  <span>{interest}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className='mb-4'>
            <h4 className='font-poppins font-bold mb-2'>Key Publications:</h4>
            <ul className='font-poppins text-gray-700 space-y-2'>
              {founderInfo.publications.map((publication, index) => (
                <li key={index} className='flex items-start'>
                  <span className='text-[#FFC107] mr-2'>•</span>
                  <span className='text-sm'>{publication}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className='flex'>
            <FaQuoteLeft className='text-[#FFC107] mr-2 text-xl mt-1' />
            <p className='font-poppins italic text-gray-700'>
              Every individual with autism has unique gifts to share with the world. Our mission is to help them discover and nurture these gifts.
            </p>
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