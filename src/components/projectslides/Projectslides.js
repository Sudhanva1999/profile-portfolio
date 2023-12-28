import React, { useState } from 'react';
import './Projectslides.css'; // Import your CSS file for styling

const Projectslides = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel-container">
      <button className="nav-button prev" onClick={prevSlide}>
        &lt; Prev
      </button>
      <div className="carousel">
        {slides.map((slide, index) => (
          <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
            {slide}
          </div>
        ))}
      </div>
      <button className="nav-button next" onClick={nextSlide}>
        Next &gt;
      </button>
    </div>
  );
};

export default Projectslides;
