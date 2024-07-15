import React from 'react';
import { Link } from 'react-scroll';
import faceImage from '../assets/Face.png';
import resume from '../assets/Resume.pdf';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 fixed w-full z-10 top-0 h-16 flex items-center">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={faceImage} alt="face" className="w-10 h-10 rounded-full mr-4" />
          <Link to="home" smooth={true} duration={500} className="text-white text-lg font-bold cursor-pointer sanghyun-park-link">
            Sanghyun Park
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link activeClass="active" to="home" spy={true} smooth={true} duration={500} className="text-white cursor-pointer nav-link">
            Home
          </Link>
          <Link activeClass="active" to="about" spy={true} smooth={true} duration={500} className="text-white cursor-pointer nav-link">
            About
          </Link>
          <Link activeClass="active" to="projects" spy={true} smooth={true} duration={500} className="text-white cursor-pointer nav-link">
            Projects
          </Link>
          <Link activeClass="active" to="experience" spy={true} smooth={true} duration={500} className="text-white cursor-pointer nav-link">
            Experience
          </Link>
          <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} className="text-white cursor-pointer nav-link">
            Contact
          </Link>
          <a href={resume} target="_blank" rel="noopener noreferrer" className="text-white cursor-pointer nav-link">
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
