import React, { useState } from 'react';
import './Header.css';
import { HashLink as Link } from 'react-router-hash-link';

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
            <img className="icon" src="/img/logo.jpg" />
          </a>
        </div>
        <div className="nav-container">
          <div className="nav-item">
            <span>
              <a href="./blog-listings">BLOG</a>
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
              <a href="./about">ABOUT</a>
            </span>
          </div>
          <Link to="/services#grid-item-text">
            <div className="nav-button">
              <span>Get a Quote</span>
            </div>
          </Link>
        </div>
      </header>
      {/* mobile */}
      <header className="header-mobile">
        <div className="icon-container">
          <img className="icon" src="/img/logo.jpg" />
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
            src="/img/mobile-menu.png"
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
            src="/img/cross.png"
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
              <span>
                <a href="./blog-listings">BLOG</a>
              </span>
            </li>
            <li className="mobile-nav-item">
              <span>
                <a href="./portfolio">WORKS</a>
              </span>
            </li>
            <li className="mobile-nav-item">
              <span>
                <a href="./services">SERVICES</a>
              </span>
            </li>
            <li className="mobile-nav-item">
              <span>
                <a href="./about">ABOUT</a>
              </span>
            </li>
          </ul>

          <div className="mobile-nav-button-container">
            <Link to="/services#grid-item-text">
              <div className="mobile-nav-button">
                <a href="https://www.google.com/" target="_blank">
                  <span>Get a Quote</span>
                </a>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
