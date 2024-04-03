import React, { useState } from 'react';

function Landing() {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavVisible(!isMobileNavVisible);
  };

  return (
    <div>
      {/* HEADER */}
      {/* desktop */}
      <header className="header-desktop">
        <div className="icon-container">
          <img className="icon" src={require('../img/logo.jpg')} />
        </div>
        <div className="nav-container">
          <div className="nav-item">
            <span>
              <a href="https://www.google.com/">BLOG</a>
            </span>
          </div>
          <div className="nav-item">
            <span>
              <a href="https://www.google.com/">WORKS</a>
            </span>
          </div>
          <div className="nav-item">
            <span>
              <a href="https://www.google.com/">SERVICES</a>
            </span>
          </div>
          <div className="nav-item">
            <span>
              <a href="https://www.google.com/">ABOUT</a>
            </span>
          </div>
          <a href="https://www.google.com/" target="_blank">
            <div className="nav-button">
              <span>Get a Quote</span>
            </div>
          </a>
        </div>
      </header>
      {/* mobile */}
      <header className="header-mobile">
        <div className="icon-container">
          <img className="icon" src={require('../img/logo.jpg')} />
        </div>

        <div
          className={
            !isMobileNavVisible
              ? 'mobile-nav-container show'
              : 'mobile-nav-container'
          }
        >
          <img
            className="menu-icon"
            onClick={toggleMobileNav}
            src={require('../img/mobile-menu.png')}
          />
        </div>

        <div
          className={
            isMobileNavVisible
              ? 'mobile-nav-container show'
              : 'mobile-nav-container'
          }
        >
          <img
            className="menu-icon"
            onClick={toggleMobileNav}
            src={require('../img/cross.png')}
          />
        </div>
      </header>

      <div
        className={
          isMobileNavVisible
            ? 'mobile-nav-container show'
            : 'mobile-nav-container'
        }
      >
        <div className="mobile-nav">
          <ul>
            <li className="mobile-nav-item">
              <span>BLOG</span>
            </li>
            <li className="mobile-nav-item">
              <span>WORKS</span>
            </li>
            <li className="mobile-nav-item">
              <span>SERVICES</span>
            </li>
            <li className="mobile-nav-item">
              <span>ABOUT</span>
            </li>
          </ul>

          <div className="mobile-nav-button-container">
            <div className="mobile-nav-button">
              <a href="https://www.google.com/" target="_blank">
                <span>Get a Quote</span>
              </a>
            </div>
          </div>
        </div>
      </div>

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
      {/* FOOTER */}
      <div className="footer-top">
        <div className="footer-top-text-container">
          <span className="footer-top-text">
            Fine art photographer seeking to capture identities, expressions, &
            auras of people.
          </span>
        </div>
      </div>
      <footer>
        <div className="subscribe-container">
          <div className="subscribe-header">
            <span>Subscribe</span>
          </div>
          <div className="subscribe-text">
            <span>
              Sign up with your email address to receive news and exclusive
              prints
            </span>
          </div>
          <div className="subscribe-form">
            <input
              className="subscribe-input"
              type="text"
              placeholder="Email address"
            />
          </div>
          <button className="subscribe-button">Sign Up</button>
        </div>
        <div className="footer-nav">
          <div className="footer-nav-item">
            <span className="nav-item-text">
              <a href="https://www.google.com/">WORKS</a>
            </span>
          </div>
          <div className="footer-nav-item">
            <span className="nav-item-text">
              <a href="https://www.google.com/">SERVICES</a>
            </span>
          </div>
          <div className="footer-nav-item">
            <span className="nav-item-text">
              <a href="https://www.google.com/">BLOG</a>
            </span>
          </div>
          <div className="footer-nav-item">
            <span className="nav-item-text">
              <a href="https://www.google.com/">ABOUT</a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
