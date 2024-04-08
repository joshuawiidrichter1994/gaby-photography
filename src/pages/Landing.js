import React, { useState } from 'react';

function Landing() {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavVisible(!isMobileNavVisible);
  };

  return (
    <div>
      {/* MAIN */}
      <main>
        <div className="intro">
          <div>
            <h1>Gaby Isabelle Photography</h1>
          </div>
          <div className="intro-image-container">
            <img
              className="intro-img"
              src={require('../img/compressed/1.JPG')}
            />
          </div>
        </div>
        {/* PORTFOLIO */}
        <div className="portfolio-section">
          <div className="section-header">
            <span className="section-text-left">Portfolio</span>
            <span className="section-text-right">
              <a href="./portfolio">View Work</a>
            </span>
          </div>
          <div className="section-images-container">
            <div className="section-image-container">
              <img
                className="section-image"
                src={require('../img/compressed/2.JPG')}
              />
              <p className="section-image-text">Travel</p>
            </div>
            <div className="section-image-container">
              <img
                className="section-image"
                src={require('../img/compressed/3.jpg')}
              />
              <p className="section-image-text">Brands</p>
            </div>
            <div className="section-image-container">
              <img
                className="section-image"
                src={require('../img/compressed/4.jpg')}
              />
              <p className="section-image-text">Portraits</p>
            </div>
          </div>
        </div>
        {/* SERVICES */}
        <div className="services-section">
          <div className="services-header">
            <span className="section-text-left">Services</span>
            <span className="section-text-right">
              <a href="./services">View packages</a>
            </span>
          </div>
          <div className="services-images">
            <div className="service-image-container">
              <img
                className="service-image"
                src={require('../img/compressed/5.JPG')}
              />
            </div>
            <div className="service-image-container">
              <img
                className="service-image"
                src={require('../img/compressed/6.JPG')}
              />
            </div>
          </div>
        </div>
        {/* BLOGS */}
        <div className="blog-section">
          <div className="section-header">
            <span className="section-text-left">Blog</span>
            <span className="section-text-right">
              <a href="./blog">View Work</a>
            </span>
          </div>
          <div className="section-images-container">
            <div className="section-image-container">
              <img
                className="section-image"
                src={require('../img/compressed/7.jpg')}
              />
              <p className="section-image-text">Travel</p>
            </div>
            <div className="section-image-container">
              <img
                className="section-image"
                src={require('../img/compressed/8.jpg')}
              />
              <p className="section-image-text">Travel</p>
            </div>
            <div className="section-image-container">
              <img
                className="section-image"
                src={require('../img/compressed/9.JPG')}
              />
              <p className="section-image-text">Travel</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Landing;
