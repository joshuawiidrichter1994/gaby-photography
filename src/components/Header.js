import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavVisible(!isMobileNavVisible);
  };

  return (
    <div>
      {/* desktop */}
      <header className="header-desktop">
        <div className="icon-container">
          <a href="./">
            <img className="icon" src={require('../img/logo.jpg')} />
          </a>
        </div>
        <div className="nav-container">
          <div className="nav-item">
            <span>
              <a href="./blog">BLOG</a>
            </span>
          </div>
          <div className="nav-item">
            <span>
              <a href="./portfolio">WORKS</a>
            </span>
          </div>
          <div className="nav-item">
            <span>
              <a href="./services">SERVICES</a>
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
    </div>
  );
}

export default Header;
