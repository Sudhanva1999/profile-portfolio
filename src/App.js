import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Profile from './components/profile/Profile';
import About from './components/about/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/contact/Contact';
import Skills from './components/skills/Skills';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Header />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
