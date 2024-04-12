import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <div>
      <main>
        <div className="container">
          <div className="header-container">
            <h1 className="header-text">Works</h1>
          </div>
          <div className="grid-container">
            <div className="grid-row">
              <div className="grid-item">
                <img
                  className="grid-image"
                  src={require('../img/compressed/2.JPG')}
                />
              </div>
              <div className="grid-item">
                <img
                  className="grid-image"
                  src={require('../img/compressed/3.jpg')}
                />
              </div>
            </div>
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
                  src={require('../img/compressed/5.JPG')}
                />
              </div>
            </div>
            <div className="grid-row">
              <div className="grid-item">
                <img
                  className="grid-image"
                  src={require('../img/compressed/6.JPG')}
                />
              </div>
              <div className="grid-item">
                <img
                  className="grid-image"
                  src={require('../img/compressed/7.jpg')}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Portfolio;
