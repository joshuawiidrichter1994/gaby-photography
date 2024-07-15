import React from 'react';
import './About.css';
import ContactForm from '../components/ContactForm';

function About() {
  return (
    <div className="about-container">
      <div className="header-container">
        <h1 className="header-text">About</h1>
        <span className="sub-heading-text">
          Self-taught photographer seeking to capture the identities,
          expressions, and auras of people.
        </span>
      </div>
      <div className="about-img-container">
        <img className="about-img" src="/img/about/about.jpg" />
      </div>
      <p className="about-text">
        Welcome! I'm Gaby, a fine art photographer and full-scale copywriter
        with a passion for immersive storytelling and a deep love for the
        written word. My journey has taken me through multiple cities during my
        early twenties, giving me the unique chance to experience the life of
        different communities firsthand. Now, I call Cape Town, South Africa,
        home, where I work remotely as a copywriter for{' '}
        <a className="about-link" href="https://theyovth.com/" target="_blank">
          The Yovth
        </a>{' '}
        and a photographer on a project basis.
      </p>
      <p className="about-text">
        I love collaborating with eco-conscious, intentional businesses that
        appreciate aesthetics and are driven to make a positive impact. My
        vision is to work authentically, capturing and expressing brands,
        concepts, and stories in ways that are real, vulnerable, and natural.
        All projects begin with a vision, taking into account your brand’s
        history and mission. Then I create a mood board to inspire the visual
        concept, and begin telling your story - endorsed by{' '}
        <a
          className="about-link"
          href="https://www.thehotelscollections.com/"
          target="_blank"
        >
          The Hotels Collection
        </a>{' '}
        and its partners.
      </p>
      <div className="contact-container">
        <div className="contact-left">
          <span className="contact-left-text">Contact</span>
        </div>
        <div className="contact-right">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default About;
