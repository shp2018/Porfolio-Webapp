import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faMapMarkerAlt, faLink } from '@fortawesome/free-solid-svg-icons';

const experiences = [
  {
    id: 'enodam',
    title: 'Software Developer Intern @ enodam Co., Ltd',
    date: '2024.04 - 2024.08',
    location: 'Asan-si, South Korea',
    website: 'http://enodam.com/index_eng.php',
    description: `
      Developed and planned a communication interface for battery maintenance systems using TCP/IP protocols, establishing a reliable
      Ethernet connection between maintenance units and battery devices, resulting in improved data transmission stability and enhanced
      system reliability.
      Integrated a PCAN system to receive and display cell voltages and warning/fault messages from a BMS on a Python GUI by parsing
      hexadecimal data from the PCAN device, resulting in improved diagnostic capabilities and enhanced reliability and efficiency of the
      battery management system.
      Developed a data processing system for battery management systems (BMS) data using Python, preprocessing data to filter errors,
      remove duplicates, and extract relevant metrics, and saving the processed data to CSV files, resulting in a streamlined workflow,
      enhanced data accuracy, and improved reliability and efficiency of BMS monitoring.
      Developing Pulse Width Modulation (PWM) functionality using the MCU STM32F429I-DISC1, programming the microcontroller using
      C to generate precise PWM signals for controlling various components, resulting in improved control accuracy and system performance.
    `,
    languages: ['Python', 'C', 'TCP/IP', 'PCAN', 'STM32F429I-DISC1','BMS','Tkinter']
  },
  {
    id: 'freelance',
    title: 'Freelance Software Developer @ Smart Construction Equipment Management',
    date: '2023.02 - 2023.11',
    location: 'Vancouver, BC',
    website: 'https://www.scem.ca/',
    description: `
      Developed a sophisticated equipment management web application using React for frontend with Jest and RTL, automating tests to
      ensure the integration of visual components and the dynamic view changes depending on backend output.
      Developed a Login/Signup component handling user registration via email, with additional options for login using Google and
      Facebook, providing more options to enhance user accessibility.
      Implemented User Authentication with Firebase Authentication, ensuring persistent login session until user-initiated sign-out,
      improving user experience.
      Designed and implemented a frontend search feature to dynamically generate query string to fetch collections from the Cloud Firestore
      database, significantly minimizing code redundancy and enhancing efficiency across 15+ webpages.
      Developed a visual geo map component utilizing the Google Maps API to dynamically display the locations of stored equipment from
      our database as pins on the map, enhancing real-time visibility and operational tracking.
    `,
    languages: ['React', 'Firebase', 'Google Maps API', 'Jest', 'RTL']
  },
  {
    id: 'instructor',
    title: 'Coding & Robotics Instructor @ Elite Educational Institute',
    date: '2022.04 - Present',
    location: 'North Vancouver, BC',
    description: `
      Coached over 20 students aged 12-16 for national-level competitions including the Canadian Computing Competition (CCC) and the
      USA Computing Olympiad (USACO), by employing customized training materials and practice sessions, resulting in many
      advancing to higher competition levels and achieving top scores.
      Instructed students in preparation for the AP Computer Science A exam using tailored teaching methodologies, resulting in the
      majority of my students achieving scores of 4 or above.
      Taught Python and modern development frameworks, such as OpenCV and Django, to students of varying proficiency levels and
      ages, offering personalized lesson plans and practical projects that enhanced their programming skills and real-world application
      knowledge.
    `,
    languages: ['Python','Java', 'OpenCV', 'Django','PyCharm','CCC','USACO']
  }
];

const Experience = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-8 pt-24" id="experience" style={{ background: 'linear-gradient(to right, #5cc8da, #5070b8)' }}>
      <h1 className="text-8xl font-bold flex flex-col items-center mb-8 text-white">EXPERIENCE</h1>
      <div className="space-y-8">
        {experiences.map(exp => (
          <div key={exp.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleExpand(exp.id)}>
              <h2 className="text-2xl font-bold">{exp.title}</h2>
              <div className="flex items-center">
                <span className="text-gray-500 mr-4">{exp.date}</span>
                <FontAwesomeIcon icon={expanded === exp.id ? faMinus : faPlus} />
              </div>
            </div>
            {expanded === exp.id && (
              <div className="mt-4">
                <div className="flex items-center mb-2">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                  <span>{exp.location}</span>
                </div>
                {exp.website && (
                  <div className="flex items-center mb-2">
                    <FontAwesomeIcon icon={faLink} className="mr-2" />
                    <a href={exp.website} target="_blank" rel="noopener noreferrer" className="text-blue-500">{exp.website}</a>
                  </div>
                )}
                <p>{exp.description}</p>
                <div className="flex flex-wrap mt-4">
                  {exp.languages.map(lang => (
                    <div key={lang} className="bg-gray-200 text-gray-900 px-4 py-2 m-2 rounded-full shadow-md">
                      {lang}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
