import React from 'react';
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
              <form
                className="contact-form"
                action="mailto:info@example.com"
                method="GET"
              >
                <span>name (required)</span>
                <div className="contact-form-name-container">
                  <div className="contact-form-name-item">
                    <label>First Name</label>
                    <br />
                    <input
                      type="text"
                      name="first-name"
                      className="contact-form-field-name"
                      required
                    ></input>
                  </div>
                  <div className="contact-form-name-item">
                    <label>Last Name</label>
                    <br />
                    <input
                      type="text"
                      name="last-name"
                      className="contact-form-field-name"
                      required
                    ></input>
                  </div>
                </div>
                <div className="contact-form-email">
                  <label>Email (required)</label>
                  <br />
                  <input
                    type="text"
                    name="email"
                    className="contact-form-field"
                    required
                  ></input>
                </div>
                <div className="contact-form-phone">
                  <label>Phone</label>
                  <br />
                  <input
                    type="text"
                    name="phone"
                    className="contact-form-field"
                  ></input>
                </div>
                <div className="contact-form-message">
                  <label>Message (required)</label>
                  <br />
                  <input
                    type="text"
                    name="message"
                    className="contact-form-field-message"
                    required
                  ></input>
                </div>
                <button type="submit" className="contact-form-submit-btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Services;
