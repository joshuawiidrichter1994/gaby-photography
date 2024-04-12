import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className="services-container">
      <div className="header-container">
        <h1 className="header-text">Services</h1>
      </div>
      <div className="grid-container">
        <div className="grid-row">
          <div className="grid-item">
            <img
              className="grid-image"
              src={require('../img/compressed/5.JPG')}
            />
          </div>
          <div className="grid-item">
            <img
              className="grid-image"
              src={require('../img/compressed/7.jpg')}
            />
          </div>
          <div className="grid-item">
            <img
              className="grid-image"
              src={require('../img/compressed/6.JPG')}
            />
          </div>
          <div className="contact-section">
            <div className="contact-section-left"></div>
            <div className="contact-section-right"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
