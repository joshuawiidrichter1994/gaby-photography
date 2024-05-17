import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <div>
      <main>
        <div className="portfolio-container">
          <div className="header-container">
            <h1 className="header-text">Works</h1>
          </div>
          <div className="grid-container">
            <div className="grid-row">
              <div className="grid-item">
                <img
                  className="grid-item-image"
                  src={require('../img/final/portfolio/1.jpg')}
                />
              </div>
              <div className="grid-item">
                <img
                  className="grid-item-image"
                  src={require('../img/final/portfolio/2.jpg')}
                />
              </div>
            </div>
            <div className="grid-row">
              <div className="grid-item">
                <img
                  className="grid-item-image"
                  src={require('../img/final/portfolio/3.jpg')}
                />
              </div>
              <div className="grid-item">
                <img
                  className="grid-item-image"
                  src={require('../img/final/portfolio/4.jpg')}
                />
              </div>
            </div>
            <div className="grid-row">
              <div className="grid-item">
                <img
                  className="grid-item-image"
                  src={require('../img/final/portfolio/5.jpg')}
                />
              </div>
              <div className="grid-item">
                <img
                  className="grid-item-image"
                  src={require('../img/final/portfolio/6.jpg')}
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
