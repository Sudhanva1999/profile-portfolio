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
            <Route path="https://sudhanva1999.github.io/profile-portfolio/" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Header />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </HashRouter>
    );
  }
}

export default App;
