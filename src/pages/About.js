import React from 'react';
import './About.css';
import ContactForm from '../components/ContactForm';

function About() {
  return (
    <div className="about-container">
      <div className="header-container">
        <h1 className="header-text">About</h1>
        <span className="sub-heading-text">
          I’m a portrait photographer seeking to capture the identities,
          expressions, and auras of people.
        </span>
      </div>
      <div className="about-img-container">
        <img className="about-img" src="/img/about/about.jpg" />
      </div>
      <div className="contact-container">
        <div className="contact-left">
          <h1 className="conact-left-text">Contact</h1>
        </div>
        <div className="contact-right">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default About;
