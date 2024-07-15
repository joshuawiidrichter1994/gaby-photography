import React, { useState } from 'react';
import './Landing.css';

function Landing() {
  return (
    <div className="landing-container">
      {/* MAIN */}
      <main>
        <div className="intro">
          <div className="intro-text-container">
            <h1 className="header-text">Gaby Isabelle Photography</h1>
            <span className="sub-header">
              Fine art photography services with a niche in portraits,
              intentional brands, and luxury hotels.
            </span>
          </div>
          <div className="intro-image-container">
            <img className="intro-img" src="/img/home/1.JPG" />
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
              <img className="section-image" src="/img/home/2.png" />
              <p className="section-image-text">Travel</p>
            </div>
            <div className="section-image-container">
              <img className="section-image" src="/img/home/3.png" />
              <p className="section-image-text">Brands</p>
            </div>
            <div className="section-image-container">
              <img className="section-image" src="/img/home/4.png" />
              <p className="section-image-text">Portraits</p>
            </div>
          </div>
        </div>
        {/* SERVICES */}
        <div className="services-section">
          <div className="services-header">
            <span className="section-text-left">Services</span>
            <span className="section-text-right">
              <a href="./services">View Packages</a>
            </span>
          </div>
          <div className="services-images">
            <div className="service-image-container">
              <img className="service-image" src="/img/home/5.jpg" />
            </div>
            <div className="service-image-container">
              <img className="service-image" src="/img/home/6.jpg" />
            </div>
          </div>
        </div>
        {/* BLOGS */}
        <div className="blog-section">
          <div className="section-header">
            <span className="section-text-left">Blog</span>
            <span className="section-text-right">
              <a href="./blog-listings">Read More</a>
            </span>
          </div>
          <div className="section-images-container">
            <div className="section-image-container">
              <a href="./blog">
                <img className="section-image" src="/img/home/7.png" />
                <p className="section-image-text">Photographing Pairs</p>
              </a>
            </div>
            <div className="section-image-container">
              <a href="./blog">
                <img className="section-image" src="/img/home/8.png" />
                <p className="section-image-text">Learning Light</p>
              </a>
            </div>
            <div className="section-image-container">
              <a href="./blog">
                <img className="section-image" src="/img/home/9.png" />
                <p className="section-image-text">Environmental Portraiture</p>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Landing;
