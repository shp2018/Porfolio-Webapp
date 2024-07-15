import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import homebg from '../assets/Homebg.png';

const Home = () => {
  return (
    <motion.div 
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white pt-16"
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ backgroundImage: `url(${homebg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-8">
          HEY, I'M <br />
          <span className="text-8xl">SANGHYUN PARK</span>
        </h1>
        <p className="text-2xl mb-16">SOFTWARE ENGINEER, FRONT END & APP DEVELOPER</p>
      </div>
      <div className="absolute bottom-10">
        <motion.div 
          className="text-white text-center cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          <Link to="about" smooth={true} duration={500}>
            <svg className="w-6 h-6 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
            <p>Scroll Down</p>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
