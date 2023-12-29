import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Profile from './components/profile/Profile';
import About from './components/about/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/contact/Contact';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';

class App extends Component {
  render() {
    return (
      <Router >
        <div className="App">
          <Header />
          <Routes>
            <Route path="/profile-portfolio" element={<Profile />} />
            <Route path="/profile-portfolio/about" element={<About />} />
            <Route path="/profile-portfolio/projects" element={<Projects />} />
            <Route path="/profile-portfolio/skills" element={<Skills />} />
            <Route path="/profile-portfolio/hobby" element={<Hobby />} />
            <Route path="/profile-portfolio/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
