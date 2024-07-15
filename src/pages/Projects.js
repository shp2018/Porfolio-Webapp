import React from 'react';
import macbookFrame from '../assets/macbook-frame.png';

const projects = [
    {id: 'macm316', title:'MACM 316 Numerical Method Visualization tool',videoUrl:'https://www.youtube.com/embed/vocDWwOjKvg?si=KgbvLImoe7-C4HN6',link:'https://sfuosdev.github.io/Macm316/'},
  { id: 'rmp', title: 'SFU Rate My Professor Chrome Extension', videoUrl: 'https://www.youtube.com/embed/KqIkSZO0DYA', link: 'https://github.com/sfu-software-engineering-club/SFU-RMP' },
  { id: 'league', title: 'League of Legends Stat Checker', videoUrl: 'https://www.youtube.com/embed/L-vB2p6tHKA', link: 'https://github.com/shp2018/LeagueofLegendsAPI' },
  { id: 'face', title: 'OpenCV Face Detection/Recognition', videoUrl: 'https://www.youtube.com/embed/tkcy-gOoKjA', link: 'https://github.com/shp2018/Face-Detection-and-Recognition' },
  {id:'hauntower', title: 'Hauntower 2D Game', videoUrl:'https://www.youtube.com/embed/B27QczWjpBE?si=P1NuEuQ4I5AqOEaV',link:'https://github.com/shp2018/Hauntower'},
  { id: 'anime', title: 'What Anime API', videoUrl: 'https://www.youtube.com/embed/JLFRSk8-654', link: 'https://github.com/shp2018/What-Anime-API' },
  { id: 'gpa', title: 'C++ GPA/CPGA Calculator', videoUrl: 'https://www.youtube.com/embed/SxAeYWFr3do', link: 'https://github.com/shp2018/GPA-CGPA-Calculator' },
  { id: 'grade', title: 'Dynamic Grade Histogram Generator', videoUrl: 'https://www.youtube.com/embed/HU4Lztt1ZuU', link: 'https://github.com/shp2018/Histogram-Generator' },
  { id: 'chat', title: 'Online Browser Chat App', videoUrl: 'https://www.youtube.com/embed/c8x1gh-Cz1c', link: 'https://github.com/shp2018/chatapp-node' },
  { id: 'toll', title: 'Highway Toll Fee Calculator', videoUrl: 'https://www.youtube.com/embed/mbbwD5ol5iQ', link: 'https://github.com/shp2018/cohort-2/blob/master/lectures/inf1340.py' },
  { id: 'twitter', title: 'Twitter Sentiment Analyzer', videoUrl: 'https://www.youtube.com/embed/feTBxHnXOGo', link: 'https://github.com/shp2018/twitter_sentiment_analyzer' },
  { id: 'pig', title: 'Pig Farm', videoUrl: 'https://www.youtube.com/embed/MLBUvNU-Pus', link: 'https://github.com/shp2018/Pig-Farm' },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-8 pt-24" id="projects" style={{ background: 'linear-gradient(to right, #5cc8da, #5070b8)' }}>
      <h1 className="text-8xl font-bold flex flex-col items-center mb-8 text-white">PROJECTS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map(project => (
          <div key={project.id} className="rounded-lg overflow-hidden shadow-md">
            <div className="relative macbook-frame">
              <iframe
                className="absolute top-0 left-0 w-full h-full video-content"
                src={project.videoUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={project.title}
              ></iframe>
            </div>
            <div className="bg-white p-6">
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <a href={project.link} className="text-blue-500">View on GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
