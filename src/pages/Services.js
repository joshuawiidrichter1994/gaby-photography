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
            <span className="sub-header-text">
              Transforming your vision into captivating visuals: from candid
              portraits that reflect authenticity, to strategic brand
              partnerships with intentional businesses.
            </span>
          </div>
          <div className="grid-container">
            <div className="grid-row">
              <div className="grid-item">
                <img
                  className="grid-item-image"
                  src="/img/services/portraits.jpg"
                />
                <div className="grid-item-text">
                  <span className="grid-item-text-header">Portraits</span>
                  <p>Candid, genuine and real - just like you.</p>
                </div>
              </div>
              <div className="grid-item">
                <img
                  className="grid-item-image"
                  src="/img/services/brands.jpg"
                />
                <div className="grid-item-text">
                  <span className="grid-item-text-header">Brands</span>
                  <p>Partnerships with intentional businesses.</p>
                </div>
              </div>
              <div className="grid-item-travel">
                <img
                  className="grid-item-image"
                  src="/img/services/travel.jpg"
                />
                <div id="grid-item-text" className="grid-item-text">
                  <span className="grid-item-text-header">Travel</span>
                  <p>The gift of perspective.</p>
                </div>
              </div>
            </div>
          </div>
          <div id="contact-section" className="contact-section">
            <div className="contact-section-left">
              <span className="contact-section-left-text">
                Reach out to inquire about my services
              </span>
            </div>
            <div className="contact-section-right">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Services;
