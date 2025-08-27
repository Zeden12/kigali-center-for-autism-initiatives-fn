import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import logo from "../assets/logo.svg";

const TopNav = () => {
  return (
    <div className='sticky top-0 z-10 bg-[#FFC107] flex justify-between items-center px-4 sm:px-[50px] lg:px-[100px] py-[8px]'>
        <div>
           <img src={logo} alt="logo"  className='w-[40px] h-[40px]'/>
        </div>
        
        <div className='hidden md:flex items-center gap-6 text-[13px]'>
           <div className='flex items-center gap-1'>
             <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
             </svg>
             <p>info@kca.org.rw | support@kca.org.rw</p>
           </div>
           <div className='flex items-center gap-1'>
             <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
             </svg>
             <p>+250 780 000 000 | +250 780 000 000</p>
           </div>
        </div>
        
        <div className='hidden md:flex items-center gap-4 text-[13px]'>
           <div className='flex items-center gap-1'>
             <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
             </svg>
             <p>Kigali, Rwanda, Gasabo, Gasanze</p>
           </div>
        </div>
        
        <div className='flex gap-[15px]'>
            <a href="#" className="text-gray-800 hover:text-white transition-colors">
              <FaFacebook className="text-lg" />
            </a>
            <a href="#" className="text-gray-800 hover:text-white transition-colors">
              <FaTwitter className="text-lg" />
            </a>
            <a href="#" className="text-gray-800 hover:text-white transition-colors">
              <FaInstagram className="text-lg" />
            </a>
            <a href="#" className="text-gray-800 hover:text-white transition-colors">
              <FaLinkedin className="text-lg" />
            </a>
            <a href="#" className="text-gray-800 hover:text-white transition-colors">
              <FaYoutube className="text-lg" />
            </a>
        </div>
    </div>
  );
};

export default TopNav;