import { useState } from "react";
import { FaArrowRight, FaCalendarAlt, FaMapMarkerAlt, FaClock, FaUsers } from "react-icons/fa";

import aWorkshop from "../assets/workshop.jpg";
import Therapy from "../assets/therapy.jpg";
import Parents from "../assets/parents.jpg";


const EventsTrainings = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showRegistration, setShowRegistration] = useState(false);

  const events = [
    {
      id: 1,
      title: "Autism Awareness Workshop",
      image: aWorkshop,
      date: "August 1, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "Kigali Convention Center",
      description: "Learn about autism spectrum disorders, early signs, and intervention strategies for parents and educators.",
      fullDescription: "This comprehensive workshop is designed for parents, educators, and healthcare professionals who want to deepen their understanding of autism spectrum disorders. Through interactive sessions, practical demonstrations, and expert guidance, participants will gain valuable insights into effective support strategies and intervention techniques.",
      seats: "25 spots left",
      status: "Open for Registration",
      category: "Workshop",
      registrationLink: "https://forms.google.com/your-workshop-form"
    },
    {
      id: 2,
      title: "Therapy Techniques Training",
      image: Therapy,
      date: "September 15, 2024",
      time: "10:00 AM - 3:00 PM",
      location: "Online Event",
      description: "Professional development for therapists and caregivers on the latest evidence-based intervention techniques.",
      fullDescription: "This professional development session is specifically designed for therapists, caregivers, and healthcare professionals working with individuals with autism. Participants will learn the latest evidence-based intervention techniques and practical strategies that can be implemented immediately in their practice.",
      seats: "Unlimited seats available",
      status: "Free Registration",
      category: "Training",
      registrationLink: "https://forms.google.com/your-training-form"
    },
    {
      id: 3,
      title: "Parent Support Group Meeting",
      image: Parents,
      date: "October 5, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "KCA Community Center",
      description: "Monthly meeting for parents and caregivers to share experiences, strategies, and support each other.",
      fullDescription: "Our monthly support group provides a safe, welcoming space for parents and caregivers of individuals with autism to connect, share experiences, and learn from one another. This session will include a special guest speaker and group discussion activities focused on practical strategies for daily challenges.",
      seats: "40 spots left",
      status: "Registration Open",
      category: "Support Group",
      registrationLink: "https://forms.google.com/your-support-group-form"
    }
  ];

  const handleReadMore = (event) => {
    setSelectedEvent(event);
  };

  const handleRegister = (event) => {
    setSelectedEvent(event);
    setShowRegistration(true);
  };

  const closeModal = () => {
    setSelectedEvent(null);
    setShowRegistration(false);
  };

  return (
    <div id="events" className="px-4 md:px-16 py-10 text-center font-poppins bg-gray-50">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 mt-16">
        Events & <span className="text-[#FFC107]">Trainings</span>
      </h1>
      <p className="md:text-lg mb-8 max-w-3xl mx-auto text-lg text-gray-600">
        Join our upcoming events and training sessions designed to support individuals with autism and their families. 
        Learn new skills, connect with experts, and become part of our supportive community.
      </p>
      
      <div className="flex flex-wrap justify-center gap-6 mx-4 md:mx-0">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 w-full md:w-[30%]">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  event.category === "Workshop" 
                    ? "bg-blue-100 text-blue-600" 
                    : event.category === "Training"
                    ? "bg-green-100 text-green-600"
                    : "bg-purple-100 text-purple-600"
                }`}>
                  {event.category}
                </span>
                <span className="text-xs bg-[#FFC107] bg-opacity-20 text-[#B68500] px-2 py-1 rounded-full">
                  {event.seats}
                </span>
              </div>

              <h2 className="text-xl font-bold mb-3 text-gray-800">{event.title}</h2>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <FaCalendarAlt className="text-[#FFC107] mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <FaClock className="text-[#FFC107] mr-2" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <FaMapMarkerAlt className="text-[#FFC107] mr-2" />
                  <span>{event.location}</span>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4">{event.description}</p>
              
              <div className="flex flex-col gap-2">
                <button 
                  onClick={() => handleReadMore(event)}
                  className="text-[#FFC107] text-sm font-medium hover:underline flex items-center justify-center"
                >
                  Read More <FaArrowRight className="ml-1" />
                </button>
                <button 
                  onClick={() => handleRegister(event)}
                  className="bg-[#FFC107] text-white border border-[#FFC107] rounded px-4 py-2 text-sm hover:bg-white hover:text-[#F2BA12] transition-colors duration-300"
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Event Detail Modal */}
      {selectedEvent && !showRegistration && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  {selectedEvent.title}
                </h3>
                <button 
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 text-xl"
                >
                  ✕
                </button>
              </div>

              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-56 object-cover rounded-lg mb-6"
              />

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <FaCalendarAlt className="text-[#FFC107] mr-2" />
                  <span className="text-sm">{selectedEvent.date}</span>
                </div>
                <div className="flex items-center">
                  <FaClock className="text-[#FFC107] mr-2" />
                  <span className="text-sm">{selectedEvent.time}</span>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-[#FFC107] mr-2" />
                  <span className="text-sm">{selectedEvent.location}</span>
                </div>
                <div className="flex items-center">
                  <FaUsers className="text-[#FFC107] mr-2" />
                  <span className="text-sm">{selectedEvent.seats}</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3">About This Event</h4>
                <p className="text-gray-600">{selectedEvent.fullDescription}</p>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={() => setShowRegistration(true)}
                  className="flex-1 bg-[#FFC107] text-white font-semibold py-3 rounded-lg hover:bg-[#E6AC00] transition-colors"
                >
                  Register Now
                </button>
                <button 
                  onClick={closeModal}
                  className="flex-1 bg-gray-200 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Registration Modal */}
      {showRegistration && selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  Register for {selectedEvent.title}
                </h3>
                <button 
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 text-xl"
                >
                  ✕
                </button>
              </div>

              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Date:</strong> {selectedEvent.date}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Time:</strong> {selectedEvent.time}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Location:</strong> {selectedEvent.location}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3">Register Online</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Complete your registration through our Google Form:
                </p>
                <a 
                  href={selectedEvent.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#FFC107] text-white text-center font-semibold py-3 rounded-lg hover:bg-[#E6AC00] transition-colors mb-4"
                >
                  Register via Google Form
                </a>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3">Other Registration Methods</h4>
                <div className="space-y-3 text-sm text-gray-600">
                  <p><strong>Email:</strong> events@kca.org.rw</p>
                  <p><strong>Phone:</strong> +250 781 963 232</p>
                  <p><strong>WhatsApp:</strong> +250 781 963 232</p>
                  <p><strong>In Person:</strong> KG 06 Street Gasanze, Kigali</p>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                <h4 className="font-semibold text-[#B68500] mb-2">Important Information</h4>
                <ul className="text-sm text-[#B68500] space-y-1">
                  <li>• Confirmation will be sent within 24 hours</li>
                  <li>• Please bring your confirmation to the event</li>
                  <li>• Contact us if you have any special requirements</li>
                </ul>
              </div>

              <button 
                onClick={closeModal}
                className="w-full bg-gray-200 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsTrainings;