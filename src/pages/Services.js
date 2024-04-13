import React from 'react';
import ContactForm from '../components/ContactForm';
import './Services.css';

function Services() {
  return (
    <div>
      <main>
        <div className="services-container">
          <div className="header-container">
            <h1 className="header-text">Services</h1>
          </div>
          <div className="grid-container">
            <div className="grid-row">
              <div className="grid-item">
                <img
                  className="grid-item-image"
                  src={require('../img/compressed/5.JPG')}
                />
                <div className="grid-item-text">
                  <span className="grid-item-text-header">
                    Branded Portraits
                  </span>
                  <p>
                    Don’t worry about sounding professional. Sound like you.
                  </p>
                </div>
              </div>
              <div className="grid-item">
                <img
                  className="grid-item-image"
                  src={require('../img/compressed/7.jpg')}
                />
                <div className="grid-item-text">
                  <span className="grid-item-text-header">
                    Natural Lighting
                  </span>
                  <p>
                    Your goal should be to make it feel right for right now.
                  </p>
                </div>
              </div>
              <div className="grid-item">
                <img
                  className="grid-item-image"
                  src={require('../img/compressed/6.JPG')}
                />
                <div className="grid-item-text">
                  <span className="grid-item-text-header">Groups</span>
                  <p>Be clear, be confident, and don’t overthink it.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-section">
            <div className="contact-section-left">
              <span className="contact-section-left-text">
                Reach out to inquire about my services
              </span>
            </div>
            <div className="contact-section-right">
              <ContactForm />
              {/* <form
                className="contact-form"
                action="mailto:joshuawiidrichter@gmail.com"
                method="post"
                encType="text/plain"
                autoComplete="off"
              >
                <span>name</span>
                <div className="contact-form-name-container">
                  <div className="contact-form-name-item">
                    <label htmlFor="first-name">First Name</label>
                    <input
                      type="text"
                      name="first-name"
                      placeholder="first name"
                      className="contact-form-field-name"
                      id="first-name"
                      required
                    />
                  </div>
                  <div className="contact-form-name-item">
                    <label htmlFor="last-name">Last Name</label>
                    <input
                      type="text"
                      name="last-name"
                      placeholder="last name"
                      className="contact-form-field-name"
                      id="last-name"
                      required
                    />
                  </div>
                </div>
                <div className="contact-form-email">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    placeholder="email"
                    className="contact-form-field"
                    id="email"
                    required
                  />
                </div>
                <div className="contact-form-phone">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="phone"
                    className="contact-form-field"
                    id="phone"
                  />
                </div>
                <div className="contact-form-message">
                  <label htmlFor="message">Message</label>
                  <input
                    type="text"
                    name="message"
                    placeholder="message"
                    className="contact-form-field-message"
                    id="message"
                    required
                  />
                </div>
                <input
                  type="submit"
                  value="Submit"
                  className="contact-form-submit-btn"
                />
              </form> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Services;
