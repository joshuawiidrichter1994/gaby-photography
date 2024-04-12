import React from 'react';
import './Services.css';

function Services() {
  return (
    <div>
      <main>
        <div className="services-container">
          <div className="header-container">
            <h1 className="header-text">Services</h1>
          </div>
          <div className="grid-container">
            <div className="grid-row">
              <div className="grid-item">
                <img
                  className="grid-item-image"
                  src={require('../img/compressed/5.JPG')}
                />
                {/* <div className="grid-item-text">
              <span>Branded Portraits</span>
              <p>Don’t worry about sounding professional. Sound like you.</p>
            </div> */}
              </div>
              <div className="grid-item">
                <img
                  className="grid-item-image"
                  src={require('../img/compressed/7.jpg')}
                />
                {/* <div className="grid-item-text">
              <span>Natural Lighting</span>
              <p>Your goal should be to make it feel right for right now.</p>
            </div> */}
              </div>
              <div className="grid-item">
                <img
                  className="grid-item-image"
                  src={require('../img/compressed/6.JPG')}
                />
              </div>
              {/* <div className="contact-section">
                <div className="contact-section-left"></div>
                <div className="contact-section-right"></div>
              </div> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Services;
