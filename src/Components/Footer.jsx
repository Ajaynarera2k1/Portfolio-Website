import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id='Footer' className="bg-[#e5e7eb] text-white py-6 shadow-lg border border-t-2 border-gray-200">
      <div className="container mx-auto px-4 bg-[#e5e7eb] ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">My Portfolio</h2>
            <p className="text-gray-400">&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <div className="flex flex-col md:flex-row  items-center md:space-x-4 mb-4 md:mb-0">
            <Link to="Skills" className="hover:text-gray-400 mb-2 md:mb-0">Skills</Link>
            <Link to="projects" className="hover:text-gray-400 mb-2 md:mb-0">Projects</Link>
            <Link to="Contact" className="hover:text-gray-400 mb-2 md:mb-0">Contact</Link>
            <Link to="mailto:yourname@example.com" className="hover:text-gray-400 mb-2 md:mb-0">Email</Link>
            <Link to="/privacy" className="hover:text-gray-400 mb-2 md:mb-0">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-400">Terms of Service</Link>
          </div>
          <div className="flex space-x-4">
            <Link to="https://github.com/Ajaynarera2k1" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaGithub size={24} />
            </Link>
            <Link to="https://www.linkedin.com/in/ajay-narera-2k1" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaLinkedin size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
