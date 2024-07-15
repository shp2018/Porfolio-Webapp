import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faLaptopCode, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import resume from '../assets/Resume.pdf';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-8 pt-16" id="about" style={{ background: 'linear-gradient(to right, #5cc8da, #5070b8)' }}>
      <h1 className="text-8xl font-bold mb-8 text-white">About Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mb-16">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FontAwesomeIcon icon={faDesktop} className="mr-2" /> Software Development
          </h2>
          <p>Experienced in both functional and OOP: Python, Java, JavaScript, TypeScript, C, C++.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FontAwesomeIcon icon={faLaptopCode} className="mr-2" /> Frontend Dev React, Angular
          </h2>
          <p>Over 5 years of development experience in HTML, CSS, JS, React, Angular, and NextJS frameworks.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FontAwesomeIcon icon={faMobileAlt} className="mr-2" /> Mobile App Dev Android, iOS
          </h2>
          <p>Skilled in developing hybrid mobile apps and cross-platform solutions.</p>
        </div>
      </div>
      <div className="w-full max-w-6xl flex flex-col md:flex-row mb-16">
        <div className="md:w-1/2 p-4">
          <h2 className="text-4xl font-bold mb-4 text-white">Get to Know Me!</h2>
          <p className="text-white">
            I am a Computer Science major at Simon Fraser University who has been developing web and mobile apps for over 5 years. I started coding in grade 6 and have been passionate about building projects since then. My journey in technology has been fueled by my curiosity and drive to create impactful solutions. I believe in the power of perseverance and continuous learning, and I strive to stay updated with the latest advancements in the field. My goal is to leverage my skills to develop innovative applications that can make a difference in people's lives.
          </p>
          <div className="flex justify-start space-x-8 mt-4">
            <a href="https://github.com/shp2018" target="_blank" rel="noopener noreferrer" className="text-white text-3xl">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/sanghyun-park-4786142a8/" target="_blank" rel="noopener noreferrer" className="text-white text-3xl">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href={resume} target="_blank" rel="noopener noreferrer" className="text-white text-3xl">
              <FontAwesomeIcon icon={faFilePdf} />
            </a>
          </div>
        </div>
        <div className="md:w-1/2 p-4">
          <h2 className="text-4xl font-bold mb-4 text-white">My Skills</h2>
          <div className="flex flex-wrap">
            {['Java', 'Python', 'C/C++', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'C#', 'SQL', 'Kotlin', 'Spring', 'React', 'Angular', 'NextJS', 'OpenCV', 'Jest', 'JUnit', 'Docker', 'AWS', 'Git', 'Github', 'Jira'].map(skill => (
              <div key={skill} className="bg-white text-gray-900 px-4 py-2 m-2 rounded-full shadow-lg">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
