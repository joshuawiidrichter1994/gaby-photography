import React, { useState, useEffect } from 'react';
import './Header.css';
import { HashLink as Link } from 'react-router-hash-link';

function Header() {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavVisible(!isMobileNavVisible);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={isScrolled ? 'scrolled' : ''}>
      {/* desktop */}
      <header className="header-desktop">
        <div className="icon-container">
          <a href="./">
            <img
              className="icon"
              src="https://gabyisabelle.com/img/logo.jpg"
              alt="Logo"
            />
          </a>
        </div>
        <div className="nav-container">
          <div className="nav-item">
            <span className="nav-item-text">
              <a href="./blog-listings">BLOG</a>
              <Link to="./blog-listings"></Link>
            </span>
          </div>
          <div className="nav-item">
            <span className="nav-item-text">
              <a href="./portfolio">WORKS</a>
            </span>
          </div>
          <div className="nav-item">
            <span className="nav-item-text">
              <a href="./services">SERVICES</a>
            </span>
          </div>
          <div className="nav-item">
            <span className="nav-item-text">
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
          <a href="/">
            <img
              className="icon"
              src="https://gabyisabelle.com/img/logo.jpg"
              alt="Logo"
            />
          </a>
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
            src="https://gabyisabelle.com/img/mobile-menu.png"
            alt="Menu"
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
            src="https://gabyisabelle.com/img/cross.png"
            alt="Close"
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
          <ul className="mobile-nav-list">
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
              <div className="mobile-nav-button" onClick={toggleMobileNav}>
                <span>Get a Quote</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
