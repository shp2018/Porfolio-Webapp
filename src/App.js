import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Home />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
