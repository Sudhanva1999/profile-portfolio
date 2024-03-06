import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Profile from './components/profile/Profile';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Hobby from './components/hobbies/Hobby';

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <About />
      <Projects />
      <Skills />
      <Hobby />
      <Contact />
      <div className='bottomFooter'> </div>
    </div>
  );
}

export default App;