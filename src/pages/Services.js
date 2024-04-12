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
              src={require('../img/compressed/4.jpg')}
            />
          </div>
          <div className="grid-item">
            <img
              className="grid-image"
              src={require('../img/compressed/4.jpg')}
            />
          </div>
          <div className="grid-item">
            <img
              className="grid-image"
              src={require('../img/compressed/4.jpg')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
