import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Profile from './components/profile/Profile';
import About from './components/about/About';
import { HashRouter as  Routes, Route } from 'react-router-dom';
import Contact from './components/contact/Contact';
import Skills from './components/skills/Skills';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/profile-portfolio" element={<Profile />} />
            <Route path="/profile-portfolio/about" element={<About />} />
            <Route path="/profile-portfolio/projects" element={<Header />} />
            <Route path="/profile-portfolio/skills" element={<Skills />} />
            <Route path="/profile-portfolio/contact" element={<Contact />} />
          </Routes>
        </div>
      </HashRouter>
    );
  }
}

export default App;
